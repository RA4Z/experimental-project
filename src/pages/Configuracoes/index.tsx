import { Box, Divider, ScrollView } from "native-base"
import { Titulo } from "../../components/Titulo"
import { TouchableOpacity } from "react-native"
import { CommonActions } from '@react-navigation/native';

import Cabecalho from "../../components/Cabecalho";

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
            <Cabecalho texto='Configurações' navigation={navigation} />
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