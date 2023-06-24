import { VStack, Text, Divider, ScrollView, View } from "native-base";

import { Titulo } from "../../../../components/Titulo";
import Cabecalho from "../../../../components/Cabecalho";
import { Botao } from "../../../../components/Botao";
import { useEffect, useState } from "react";
import Loading from "../../../Loading";

export default function Exercicio({ navigation, route }: any) {
    const [tempo, setTempo] = useState(false);
    const item = route?.params?.exercicio

    useEffect(() => {
        setTimeout(() => {
            setTempo(true);
        }, 500);
    }, [])

    return (
        <View style={{flex:1, justifyContent:'center'}}>
            {tempo ? <ScrollView>
                <Cabecalho texto={item.name} navigation={navigation} />
                <VStack alignItems='center' p={5}>
                    <Titulo fontSize='md'>{item.description}</Titulo>
                    <Divider mt={5} />
                    <Titulo>Colocar vídeo/GIF aqui</Titulo>
                    <Divider mt={5} />
                    <Text mt={5}>{item.details}</Text>
                    <Divider mt={5} />
                    <Botao onPress={() => navigation.navigate('Recordes', { ...route })} mb={5}>Registrar Recorde</Botao>
                    <Text>Gráfico mostrando evolução de carga registrada pelo usuário</Text>
                </VStack>
            </ScrollView> : <Loading />}
        </View>
    )
}