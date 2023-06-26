import { ScrollView, VStack, Image, Divider } from "native-base";
import { useEffect, useState, useRef } from 'react';

import { InputTexto } from "../../../components/InputTexto";
import CardPesquisa from "../../../components/CardPesquisa";

import IconeHomem from '../../../assets/homem.png';
import IconeMulher from '../../../assets/mulher.png';

import LupaIMG from './assets/lupa.png';
import LimparFiltroIMG from './assets/filtro-limpo.png';

import { exercicios } from "../../../utils/Exercicios";
import { usuarios } from "../../../utils/Usuarios";
import { Titulo } from "../../../components/Titulo";

import { Text, TouchableOpacity, View } from "react-native";
import Loading from "../../Loading";

export default function Explorar({ navigation }: any) {
    const [filtro, setFiltro] = useState('Exercício')
    const [carregandoTudo, setCarregandoTudo] = useState(true);

    const [nome, setNome] = useState('')
    const [pesquisado, setPesquisado] = useState(false)

    const [lista, setLista] = useState(exercicios);
    const [users, setUsers] = useState(usuarios)

    useEffect(() => {
        filtrarListas();
        setTimeout(() => {
            setCarregandoTudo(false);
        }, 500);
    }, [])

    async function filtrarListas(corta = false, abaAtual?:string) {
        setLista(exercicios);
        setUsers(usuarios)
        if(abaAtual) {
            if (abaAtual != filtro) {setFiltro(abaAtual)}
        } else {
            abaAtual = filtro
        }
        if (corta) return

        if (abaAtual == 'Exercício') {
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
        } if (abaAtual == 'Usuário') {
            setLista([])
            if (nome != '') {
                setUsers(usuarios.filter(usuario => usuario.name.includes(`${nome}`)))
            }
        }
        setPesquisado(true)
    }

    function pesquisar(abaAtual?:string) {
        setCarregandoTudo(true);
        setTimeout(() => {
            if (filtro == '') return
            filtrarListas(false,abaAtual);
            setCarregandoTudo(false);
        }, 500);
    }

    function apagarVestigiosFiltro() {
        setNome('')
        setCarregandoTudo(true);
        setTimeout(() => {
            filtrarListas(true)
            setCarregandoTudo(false);
        }, 500);
    }

    function mudarAbaPesquisa(valorAba: string) {
        setFiltro(valorAba)
        pesquisar(valorAba)
    }

    return (
        <>
            {carregandoTudo ? <Loading /> :
                <ScrollView>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center', marginBottom: 10, gap: 15, padding: 15 }}>
                        <View style={{ width: '60%' }}>
                            <InputTexto
                                placeholder={`Digite a pesquisa`}
                                label='Pesquisar'
                                value={nome}
                                onChangeText={(text) => setNome(text.trim())} />
                        </View>
                        <TouchableOpacity onPress={() => pesquisar()} style={{ alignSelf: 'flex-end' }}>
                            <Image source={LupaIMG} w={50} h={50} alt="Pesquisar" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => apagarVestigiosFiltro()} style={{ alignSelf: 'flex-end' }}>
                            <Image source={LimparFiltroIMG} w={50} h={50} alt="Limpar Filtro" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, padding: 5 }}>
                        <TouchableOpacity onPress={() => mudarAbaPesquisa('Exercício')}><Text style={{ color: filtro == 'Exercício' ? '#00BCE5' : 'black' }}>Exercícios</Text></TouchableOpacity>
                        <Divider style={{ width: 1, height: 30 }} />
                        <TouchableOpacity onPress={() => mudarAbaPesquisa('Alongamento')}><Text style={{ color: filtro == 'Alongamento' ? '#00BCE5' : 'black' }}>Alongamentos</Text></TouchableOpacity>
                        <Divider style={{ width: 1, height: 30 }} />
                        <TouchableOpacity onPress={() => mudarAbaPesquisa('Usuário')}><Text style={{ color: filtro == 'Usuário' ? '#00BCE5' : 'black' }}>Usuários</Text></TouchableOpacity>
                    </View>

                    <Divider mt={5} />

                    <VStack p={5}>
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
                                    premium={usuario.premium}
                                    image={usuario.linkImagem == '' ? (usuario.genero == 'Masculino' ? IconeHomem : IconeMulher) : usuario.linkImagem}
                                    imageWeb={usuario.linkImagem == '' ? false : true}
                                    description={usuario.cargo}
                                    action={() => navigation.navigate('User', { usuario })} />
                            )
                        })}
                    </VStack>
                </ScrollView>}
        </>
    )
}