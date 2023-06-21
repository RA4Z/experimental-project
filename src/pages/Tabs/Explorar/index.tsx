import { ScrollView, VStack, Select, FormControl } from "native-base";
import { useState } from 'react';
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

import { exercicios } from "../../../utils/Exercicios";
import { usuarios } from "../../../utils/Usuarios";
import { Titulo } from "../../../components/Titulo";
import { styles } from "./styles";

export default function Explorar({ navigation }: any) {
    const [filtro, setFiltro] = useState('')

    const [nome, setNome] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    const [membro, setMembro] = useState('')
    const [musculo, setMusculo] = useState('')

    const [pesquisado, setPesquisado] = useState(false)

    const [lista, setLista] = useState(exercicios)
    const [users, setUsers] = useState(usuarios)

    function selecionarFiltro(filtro: string) {
        setPesquisado(false)
        setFiltro(filtro)
    }

    async function filtrarListas() {
        if (filtro == 'Exercício' || filtro == 'Alongamento') {
            setLista(exercicios)
            setUsers([])
            if (membro != '') {
                setLista(lista.filter(exercicio => exercicio.member.includes(`${membro}`)))
            }
            if (musculo != '') {
                setLista(lista.filter(exercicio => exercicio.muscle.includes(`${musculo}`)))
            }
            if (nome != '') {
                setLista(lista.filter(exercicio => exercicio.name.includes(`${nome}`)))
            }
        }
        if (filtro == 'Usuário') {
            setUsers(usuarios)
            setLista([])
            if (nome != '') {
                setUsers(users.filter(usuario => usuario.name.includes(`${nome}`)))
            }
        }
        setPesquisado(true)
    }

    async function pesquisar() {
        await filtrarListas();
        apertarBotao();
    }
    const minHeight = useSharedValue(0);
    const momentHeight = useSharedValue(0);
    const [estilo, setEstilo] = useState(styles.desaparece);

    async function apertarBotao() {
        if (momentHeight.value == minHeight.value) {
            momentHeight.value = 500
            setEstilo(styles.aparece)
            return
        } else {
            setEstilo(styles.desaparece)
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

    

    return (
        <ScrollView p={5}>
            <Botao onPress={() => apertarBotao()}
                width='auto' alignSelf='flex-end' mb={5}>Pesquisar</Botao>

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
                                onValueChange={(itemValue: string) => selecionarFiltro(itemValue)}
                            >
                                <Select.Item label="Exercícios" value="Exercício" />
                                <Select.Item label="Alongamentos" value="Alongamento" />
                                <Select.Item label="Usuários" value="Usuário" />
                            </Select>
                        </FormControl>
                    </VStack>
                    <VStack p={5}>
                        {(filtro == 'Alongamento' || filtro == 'Exercício') && <>
                            <InputTexto
                                placeholder={`Nome do membro corporal`}
                                label='Membro'
                                value={membro}
                                onChangeText={(text) => setMembro(text)}
                            />
                            <InputTexto
                                placeholder={`Nome músculo alvo`}
                                label='Músculo'
                                value={musculo}
                                onChangeText={(text) => setMusculo(text)}
                            />
                        </>
                        }
                        {
                            filtro == 'Usuário' && <>
                                <InputTexto
                                    placeholder={`Nome da Cidade`}
                                    label='Cidade'
                                    value={cidade}
                                    onChangeText={(text) => setCidade(text)}
                                />
                                <InputTexto
                                    placeholder={`Nome do Estado`}
                                    label='Estado'
                                    value={estado}
                                    onChangeText={(text) => setEstado(text)}
                                />
                            </>
                        }
                        {filtro != '' && <InputTexto
                            placeholder={`Nome do ${filtro}`}
                            label='Nome'
                            value={nome}
                            onChangeText={(text) => setNome(text)} />
                        }
                        <Botao onPress={() => pesquisar()}>Pesquisar</Botao>
                    </VStack>
                </VStack>
            </Animated.View>

            <VStack p={5}>
                {filtro != '' && <VStack>
                    {(lista.length == 0 && users.length == 0 && pesquisado == true) && <Titulo>Nada encontrado</Titulo>}

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
                }
            </VStack>
        </ScrollView>
    )
}