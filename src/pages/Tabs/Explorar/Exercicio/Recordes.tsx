import { VStack, useToast, Text, ScrollView } from "native-base";
import { Alert } from 'react-native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { InputTexto } from "../../../../components/InputTexto";
import Cabecalho from "../../../../components/Cabecalho";
import { Botao } from "../../../../components/Botao";

export default function Recordes({navigation, route}: any) {
    const [dataRegistro, setDataRegistro] = useState(new Date())
    const [cargaRegistro, setCargaRegistro] = useState('')
    const [show, setShow] = useState(false)
    
    const toast = useToast()
    const item = route?.params?.params?.exercicio

    function registrarRecorde() {
        if(cargaRegistro == '')  {
            toast.show({
                title: 'Carga em branco', 
                description: 'Não é permitido registrar um Recorde sem carga!', 
                backgroundColor: 'red.500',
                marginRight: 5,
                marginLeft: 5
              })
              return
        }
        if(parseInt(cargaRegistro) - parseInt(cargaRegistro) != 0) {
            toast.show({
                title: 'Carga como texto', 
                description: 'Só é permitido cadastrar números como carga!', 
                backgroundColor: 'red.500',
                marginRight: 5,
                marginLeft: 5
              })
            return
        }
        Alert.alert('Recorde Registrado com sucesso!')
        navigation.goBack()
    }

    const onChange = (event:any) => {
        const timestamp = event.nativeEvent.timestamp;
        const currentDate = new Date(timestamp);
        setShow(false);
        setDataRegistro(currentDate)
    };
    return (
        <ScrollView>
            <Cabecalho navigation={navigation} texto={`Recorde ${item.name}`} />
            <VStack p={10}>
                <Botao onPress={() => setShow(true)} backgroundColor='blue.500'>Selecionar Data</Botao>
                <Text mb={5}>Selecionado: {dataRegistro.toLocaleString()}</Text>
                <InputTexto value={cargaRegistro} onChangeText={setCargaRegistro} placeholder='Insira a carga conquistada' label='Carga conquistada' />
                <Botao onPress={() => registrarRecorde()}>Registrar</Botao>
                {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={dataRegistro}
                    onChange={onChange}
                />
            )}
            </VStack>
        </ScrollView>
    )
}