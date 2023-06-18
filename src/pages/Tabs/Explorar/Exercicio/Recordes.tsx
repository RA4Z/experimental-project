import { VStack, useToast } from "native-base";
import { Alert } from 'react-native';
import { useState } from 'react';

import { InputTexto } from "../../../../components/InputTexto";
import Cabecalho from "../../../../components/Cabecalho";
import { Botao } from "../../../../components/Botao";

export default function Recordes({navigation, route}: any) {
    const [dataRegistro, setDataRegistro] = useState('')
    const [cargaRegistro, setCargaRegistro] = useState('')
    const toast = useToast()

    const item = route?.params?.params?.exercicio

    function registrarRecorde() {
        if(dataRegistro == '' || cargaRegistro == '')  {
            toast.show({
                title: 'Registro em branco', 
                description: 'Não é permitido criar um registro em branco!', 
                backgroundColor: 'red.500',
                marginRight: 5,
                marginLeft: 5
              })
              return
        }
        Alert.alert('Recorde Registrado com sucesso!')
        navigation.goBack()
    }
    return (
        <>
            <Cabecalho navigation={navigation} texto={`Registro de Recorde ${item.name}`} />
            <VStack p={10}>
                <InputTexto value={dataRegistro} onChangeText={setDataRegistro} placeholder='Escolha a data desejada' label='Data do Registro' />
                <InputTexto value={cargaRegistro} onChangeText={setCargaRegistro} placeholder='Insira a carga conquistada' label='Carga conquistada' />
                <Botao onPress={() => registrarRecorde()}>Registrar</Botao>
            </VStack>
        </>
    )
}