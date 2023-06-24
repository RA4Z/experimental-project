import { ScrollView, VStack, Select, FormControl, Image, Button } from "native-base";
import { useEffect, useState } from 'react';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing
} from 'react-native-reanimated';

import { Botao } from "../../../components/Botao";
import { InputTexto } from "../../../components/InputTexto";
import CardPesquisa from "../../../components/CardPesquisa";

import IconeHomem from '../../../assets/homem.png';
import IconeMulher from '../../../assets/mulher.png';
import Load from "../../../components/Load";
import FiltroIMG from './assets/filtro.png';
import LimparFiltroIMG from './assets/filtro-limpo.png';

import { exercicios } from "../../../utils/Exercicios";
import { usuarios } from "../../../utils/Usuarios";
import { Titulo } from "../../../components/Titulo";
import { styles } from "./styles";
import { View, Text } from "react-native";

export default function Explorar({ navigation }: any) {
    const [filtro, setFiltro] = useState('Exercício')
    const [carregando, setCarregando] = useState(false);
    const [carregandoTopo, setCarregandoTopo] = useState(false);

    const [estilo, setEstilo] = useState(styles.desapareceFiltroGeral);
    const minHeight = useSharedValue(0);
    const momentHeight = useSharedValue(0);

    const [nome, setNome] = useState('')
    const [pesquisado, setPesquisado] = useState(false)

    const [lista, setLista] = useState(exercicios);
    const [users, setUsers] = useState(usuarios)

    useEffect(() => {
        filtrarListas();
    }, [])

    function selecionarFiltro(filtro: string) {
        setPesquisado(false)
        setFiltro(filtro)
    }

    async function filtrarListas(corta = false) {
        if (corta) {
            if(filtro == 'Exercício') {
                setLista(exercicios);
            }
            if(filtro == 'Usuário') {
                setUsers(usuarios)
            }
            return
        }

        if (filtro == 'Exercício') {
            setUsers([])
            if (nome !== '' && Array.isArray(lista) && Array.isArray(exercicios)) {
                if (exercicios.find(exercicio => exercicio.name.includes(nome)) !== undefined) {
                    setLista(exercicios.filter(exercicio => exercicio.name.includes(nome)));
                } else if (exercicios.find(exercicio => exercicio.muscle.includes(nome)) !== undefined) {
                    setLista(exercicios.filter(exercicio => exercicio.muscle.includes(nome)));
                } else if (exercicios.find(exercicio => exercicio.member.includes(nome)) !== undefined) {
                    setLista(exercicios.filter(exercicio => exercicio.member.includes(nome)));
                } else {
                    setLista([]);
                }
            } else {
                setLista(exercicios);
            }
        } if (filtro == 'Usuário') {
            setUsers(usuarios)
            setLista([])
            if (nome != '') {
                setUsers(users.filter(usuario => usuario.name.includes(`${nome}`)))
            }
        }
        setPesquisado(true)
    }

    function pesquisar() {
        setCarregando(true);
        setTimeout(() => {
            if (filtro == '') return
            filtrarListas();
            apertarBotao();
            setCarregando(false);
        }, 500);
    }

    function apertarBotao() {
        if (momentHeight.value == minHeight.value) {
            momentHeight.value = 375
            setEstilo(styles.apareceFiltroGeral)
            return
        } else {
            setEstilo(styles.desapareceFiltroGeral)
            momentHeight.value = 0
            return
        }
    }
    const config = {
        duration: 750,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
    };
    const style = useAnimatedStyle(() => {
        return {
            height: withTiming(momentHeight.value, config),
        };
    });

    function apagarVestigiosFiltro() {
        setNome('')
        setCarregandoTopo(true);
        setTimeout(() => {
            filtrarListas(true)
            setCarregandoTopo(false);
        }, 500);
    }

    return (
        <ScrollView p={5}>
            <View style={{flexDirection:'row', alignSelf:'flex-end', marginBottom:10, gap:15}}>
                <Load height={100} width={100} opacity={carregandoTopo ? 1 : 0} />
                <Button onPress={() => apagarVestigiosFiltro()} style={{backgroundColor:'transparent'}}><Image source={LimparFiltroIMG} w={35} h={35} alt="Limpar Filtro" /></Button>
                <Button onPress={() => apertarBotao()} style={{backgroundColor:'transparent'}}><Image source={FiltroIMG} w={35} h={35} alt="Filtro" /></Button>
            </View>

            <Animated.View
                style={[{ width: '100%', height: 0, backgroundColor: '#dfdfe6' }, style]} >
                <VStack style={estilo}>
                    <VStack>
                        <FormControl alignItems='center' mt={5}>
                            <FormControl.Label>Filtro Geral de Pesquisas</FormControl.Label>
                            <Select
                                placeholder='Selecionar Filtro'
                                selectedValue={filtro}
                                width={200}
                                onValueChange={(itemValue: string) => selecionarFiltro(itemValue)}>
                                <Select.Item label="Exercícios" value="Exercício" />
                                <Select.Item label="Alongamentos" value="Alongamento" />
                                <Select.Item label="Usuários" value="Usuário" />
                            </Select>
                        </FormControl>
                    </VStack>
                    <VStack p={5}>
                        <InputTexto
                            placeholder={`Digite a pesquisa`}
                            label='Pesquisar'
                            value={nome}
                            onChangeText={(text) => setNome(text.trim())} />

                        <View style={{ alignItems: 'center' }}>
                            <Botao onPress={() => pesquisar()}>Pesquisar</Botao>
                            <Load height={100} width={100} opacity={carregando ? 1 : 0} />
                        </View>
                    </VStack>
                </VStack>
            </Animated.View>

            <VStack p={5}>
                <VStack>
                    {(lista.length == 0 && users.length == 0 && pesquisado == true && filtro != '') && <Titulo>Nada encontrado</Titulo>}

                    {(filtro == 'Exercício' && pesquisado == true) && lista?.map(exercicio => {
                        return (
                            <CardPesquisa
                                name={exercicio.name}
                                key={exercicio.id}
                                image={exercicio.image}
                                description={exercicio.description}
                                action={() => navigation.navigate('Exercicio', { exercicio })} />
                        )
                    })}

                    {(filtro == 'Usuário' && pesquisado == true) && users?.map(usuario => {
                        return (
                            <CardPesquisa
                                name={usuario.name}
                                key={usuario.id}
                                image={usuario.linkImagem == '' ? (usuario.genero == 'Masculino' ? IconeHomem : IconeMulher) : usuario.linkImagem}
                                imageWeb={usuario.linkImagem == '' ? false : true}
                                description={usuario.cargo}
                                action={() => navigation.navigate('User', { usuario })} />
                        )
                    })}
                </VStack>
            </VStack>
        </ScrollView>
    )
}