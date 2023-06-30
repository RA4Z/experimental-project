import { ScrollView, Image, Divider } from "native-base";
import { useEffect, useState } from 'react';

import { InputTexto } from "../../../components/InputTexto";
import OpcoesMenu from "./components/OpcoesMenu";

import LupaIMG from './assets/lupa.png';
import LimparFiltroIMG from './assets/filtro-limpo.png';

import { exercicios } from "../../../utils/Exercicios";
import { usuarios } from "../../../utils/Usuarios";

import { TouchableOpacity, View } from "react-native";
import Loading from "../../Loading";
import Cards from "./components/Cards";

export default function Explorar({ navigation }: any) {
    const [filtro, setFiltro] = useState('Exercício')
    const [carregandoTudo, setCarregandoTudo] = useState(true);
    const [pesquisado, setPesquisado] = useState('')

    const receberValorAba = (childdata: string) => {
        setFiltro(childdata);
    }

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
        setUsers(usuarios);

        if (abaAtual) {
            if (abaAtual != filtro) { setFiltro(abaAtual) }
        } else {
            abaAtual = filtro
        }
        if (corta) return
        const procurado = pesquisado.toLowerCase()
        if (procurado !== '') {
            // Filtro para os usuários
            setUsers(usuarios.filter(usuario => usuario.name.toLowerCase().includes(procurado)))

            // Filtro para os exercícios
            if (exercicios.find(exercicio => exercicio.name.toLowerCase().includes(procurado)) !== undefined) {
                setLista(exercicios.filter(exercicio => exercicio.name.toLowerCase().includes(procurado)));

            } else if (exercicios.find(exercicio => exercicio.muscle.toLowerCase().includes(procurado)) !== undefined) {
                setLista(exercicios.filter(exercicio => exercicio.muscle.toLowerCase().includes(procurado)));

            } else if (exercicios.find(exercicio => exercicio.member.toLowerCase().includes(procurado)) !== undefined) {
                setLista(exercicios.filter(exercicio => exercicio.member.toLowerCase().includes(procurado)));
            } else setLista([])
        }
        console.log(usuarios)
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

                    <OpcoesMenu filtro={filtro} onEnviarValor={receberValorAba} />
                    <Divider mt={5} />
                    <Cards filtro={filtro} lista={lista} users={users} navigation={navigation} />

                </ScrollView>}
        </>
    )
}