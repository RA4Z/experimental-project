import { Box, VStack, Divider, Image, ScrollView } from "native-base"
import { Titulo } from "../../components/Titulo"
import { TouchableOpacity } from "react-native"
import { CommonActions } from '@react-navigation/native';

import VoltarIMG from '../../assets/voltar.png'

export default function Configuracoes({navigation}: any) {
    function voltarTela() {
        navigation.goBack()
    }
    function deslogar() {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        );
      }
    return (
        <ScrollView flex={1}>
            <VStack flexDir='row' p={5} alignItems='center' justifyContent='space-around'>
                <TouchableOpacity onPress={() => voltarTela()}><Image source={VoltarIMG} mt={5} w={50} h={50} alt="Voltar" /></TouchableOpacity>
                <Titulo color='blue.500'>Configurações</Titulo>
                <Image opacity={0} source={VoltarIMG} mt={5} w={50} h={50} alt="Voltar" />
            </VStack>
            
            <Box>
                <TouchableOpacity><Titulo fontSize='md'>Sobre nós</Titulo></TouchableOpacity>
            </Box>
            <Divider mt={5} />

            <Box>
                <TouchableOpacity><Titulo fontSize='md'>Torne-se Premium</Titulo></TouchableOpacity>
            </Box>
            <Divider mt={5} />

            <Box>
                <TouchableOpacity><Titulo fontSize='md'>Torne-se Professor</Titulo></TouchableOpacity>
            </Box>
            <Divider mt={5} />

            <Box>
                <TouchableOpacity><Titulo fontSize='md'>Mudar Idioma</Titulo></TouchableOpacity>
            </Box>
            <Divider mt={5} />

            <Box>
                <TouchableOpacity onPress={() => deslogar()}><Titulo fontSize='md'>Sair</Titulo></TouchableOpacity>
            </Box>
            <Divider mt={5} />
            
        </ScrollView>
    )
}