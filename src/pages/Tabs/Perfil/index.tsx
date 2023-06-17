import { VStack, Avatar, Box, Text, ScrollView, Divider, Image } from "native-base";
import { Titulo } from "../../../components/Titulo";
import { TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";


import ExerciciosMascIMG from './assets/ginasticaMasc.png'
import ExerciciosFemiIMG from './assets/ginasticaFemi.png'

import SetaDireitaIMG from './assets/seta-direita.png'
import AlunosIMG from './assets/alunos.png'
import CalendarioIMG from './assets/calendario.png'
import HistoricoIMG from './assets/historico.png'
import ConfiguracoesIMG from './assets/configuracoes.png'
import LojaIMG from './assets/loja.png'
import PremiumIMG from '../../../assets/premium.png'

export default function Perfil({ navigation }: any) {
    const [role, setRole] = useState('Professor')
    const [genero, setGenero] = useState('Masculino')
    const [premium, setPremium] = useState(true)
    const [cargo, setCargo] = useState(role)

    useEffect(() => {
        if (genero != 'Masculino' && genero != 'Outro') {
            if (role == 'Professor') setCargo('Professora')
            if (role == 'Aluno') setCargo('Aluna')
        }
    }, [genero])

    function abrirConfiguracoes() {
        navigation.navigate('Configuracoes')
    }

    return (
        <VStack flex={1} justifyContent='flex-start' alignItems='center'>
            <Titulo fontSize='lg'>Robert Aron Zimmermann</Titulo>

            <Avatar size={150} source={{ uri: 'https://github.com/RA4Z.png' }} mt={5} />
            {premium == true && <Image source={PremiumIMG} mt={-5} w={35} h={35} alt="Premium" />}

            <Box flexDirection='row' backgroundColor='blue.800' mt={5} w='100%' h={50} justifyContent='space-around' alignItems='center' >
                <TouchableOpacity><Image opacity={0} source={LojaIMG} w={35} h={35} alt="Loja" /></TouchableOpacity>
                <Text color="white" fontWeight="bold" fontSize='md'>{cargo}</Text>
                <TouchableOpacity onPress={() => abrirConfiguracoes()}><Image source={ConfiguracoesIMG} w={35} h={35} alt="Configurações" /></TouchableOpacity>
            </Box>
            <ScrollView backgroundColor='#05668d' height='100%' w='100%'>
                <Box flex={1} p={5}>

                    <TouchableOpacity>
                        <VStack alignItems='center' justifyContent='space-around' flexDirection='row'>
                            <Image source={CalendarioIMG} mt={5} w={50} h={50} alt="Exercícios" />
                            <Titulo color='white'>Treinos</Titulo>
                            <Image source={SetaDireitaIMG} mt={5} w={50} h={50} alt="Seta Direita" />
                        </VStack>
                    </TouchableOpacity>
                    <Divider mt={5} />

                    <TouchableOpacity>
                        <VStack alignItems='center' justifyContent='space-around' flexDirection='row'>
                            <Image source={HistoricoIMG} mt={5} w={50} h={50} alt="Exercícios" />
                            <Titulo color='white'>IMC</Titulo>
                            <Image source={SetaDireitaIMG} mt={5} w={50} h={50} alt="Seta Direita" />
                        </VStack>
                    </TouchableOpacity>
                    <Divider mt={5} />

                    <TouchableOpacity>
                        <VStack alignItems='center' justifyContent='space-around' flexDirection='row'>
                            {genero == 'Masculino' ? <Image source={ExerciciosMascIMG} mt={5} w={50} h={50} alt="Exercícios" /> :
                                <Image source={ExerciciosFemiIMG} mt={5} w={50} h={50} alt="Exercícios" />}
                            <Titulo color='white'>Evolução</Titulo>
                            <Image source={SetaDireitaIMG} mt={5} w={50} h={50} alt="Seta Direita" />
                        </VStack>
                    </TouchableOpacity>
                    <Divider mt={5} />

                    {role == 'Professor' &&
                        <TouchableOpacity>
                            <VStack alignItems='center' justifyContent='space-around' flexDirection='row'>
                                <Image source={AlunosIMG} mt={5} w={50} h={50} alt="Exercícios" />
                                <Titulo color='white'>Alunos</Titulo>
                                <Image source={SetaDireitaIMG} mt={5} w={50} h={50} alt="Seta Direita" />
                            </VStack>
                        </TouchableOpacity>
                    }
                </Box>
            </ScrollView>
        </VStack>
    )
}