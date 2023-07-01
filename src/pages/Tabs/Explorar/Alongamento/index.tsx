import { VStack, Text, Divider, ScrollView, View } from "native-base";

import { Titulo } from "../../../../components/Titulo";
import Cabecalho from "../../../../components/Cabecalho";
import { useEffect, useState } from "react";
import Loading from "../../../Loading";

export default function Alongamento({ navigation, route }: any) {
    const [carregandoTudo, setCarregandoTudo] = useState(true);
    const item = route?.params?.alongamento

    useEffect(() => {
        setTimeout(() => {
            setCarregandoTudo(false);
        }, 100);
    }, [])

    return (
        <View style={{ flex: 1 }}>
            {carregandoTudo ? <Loading /> :
                <ScrollView>
                    <Cabecalho texto={item.name} navigation={navigation} />
                    <VStack alignItems='center' p={5}>
                        <Titulo fontSize='md'>{item.description}</Titulo>
                        <Divider mt={5} />
                        <Titulo>Colocar vídeo/GIF aqui</Titulo>
                        <Divider mt={5} />
                        <Text mt={5}>{item.details}</Text>
                    </VStack>
                </ScrollView>}
        </View>
    )
}