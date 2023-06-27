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

    const [pesquisado, setPesquisado] = useState('')

    const [lista, setLista] = useState(exercicios);
    const [users, setUsers] = useState(usuarios)

    useEffect(() => {
        filtrarListas();
        setTimeout(() => {
            setCarregandoTudo(false);
        }, 100);
    }, [])

    async function filtrarListas(corta = false, abaAtual?: string) {
        setLista(exercicios);
        setUsers(usuarios)
        if (abaAtual) {
            if (abaAtual != filtro) { setFiltro(abaAtual) }
        } else {
            abaAtual = filtro
        }
        if (corta) return

        if (pesquisado !== '') {
            // Filtro para os usuários
            setUsers(usuarios.filter(usuario => usuario.name.includes(pesquisado)))

            // Filtro para os exercícios
            if (exercicios.find(exercicio => exercicio.name.includes(pesquisado)) !== undefined) {
                setLista(exercicios.filter(exercicio => exercicio.name.includes(pesquisado)));
            } else if (exercicios.find(exercicio => exercicio.muscle.includes(pesquisado)) !== undefined) {
                setLista(exercicios.filter(exercicio => exercicio.muscle.includes(pesquisado)));
            } else if (exercicios.find(exercicio => exercicio.member.includes(pesquisado)) !== undefined) {
                setLista(exercicios.filter(exercicio => exercicio.member.includes(pesquisado)));
            } else setLista([])
        }
    }

    function pesquisar(abaAtual?: string) {
        setCarregandoTudo(true);
        setTimeout(() => {
            if (filtro == '') return
            filtrarListas(false, abaAtual);
            setCarregandoTudo(false);
        }, 100);
    }

    function apagarVestigiosFiltro() {
        setPesquisado('')
        setCarregandoTudo(true);
        setTimeout(() => {
            filtrarListas(true)
            setCarregandoTudo(false);
        }, 100);
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
                                value={pesquisado}
                                onChangeText={(text) => setPesquisado(text.trim())} />
                        </View>
                        <TouchableOpacity onPress={() => pesquisar()} style={{ alignSelf: 'flex-end' }}>
                            <Image source={LupaIMG} w={50} h={50} alt="Pesquisar" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => apagarVestigiosFiltro()} style={{ alignSelf: 'flex-end' }}>
                            <Image source={LimparFiltroIMG} w={50} h={50} alt="Limpar Filtro" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, padding: 5 }}>
                        <TouchableOpacity onPress={() => setFiltro('Exercício')}><Text style={{ color: filtro == 'Exercício' ? '#00BCE5' : 'black' }}>Exercícios</Text></TouchableOpacity>
                        <Divider style={{ width: 1, height: 30 }} />
                        <TouchableOpacity onPress={() => setFiltro('Alongamento')}><Text style={{ color: filtro == 'Alongamento' ? '#00BCE5' : 'black' }}>Alongamentos</Text></TouchableOpacity>
                        <Divider style={{ width: 1, height: 30 }} />
                        <TouchableOpacity onPress={() => setFiltro('Usuário')}><Text style={{ color: filtro == 'Usuário' ? '#00BCE5' : 'black' }}>Usuários</Text></TouchableOpacity>
                    </View>

                    <Divider mt={5} />

                    <VStack p={5}>
                        {(lista.length == 0 && filtro == 'Exercício') && <Titulo>Nada encontrado</Titulo>}
                        {(users.length == 0 && filtro == 'Usuário') && <Titulo>Nada encontrado</Titulo>}

                        {(filtro == 'Exercício') && lista?.map(exercicio => {
                            return (
                                <CardPesquisa
                                    name={exercicio.name}
                                    key={exercicio.id}
                                    image={exercicio.image}
                                    description={exercicio.description}
                                    action={() => navigation.navigate('Exercicio', { exercicio })} />
                            )
                        })}

                        {(filtro == 'Usuário') && users?.map(usuario => {
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