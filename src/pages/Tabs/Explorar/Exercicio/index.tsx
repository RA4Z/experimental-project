import { VStack, Text, Divider } from "native-base";

import { Titulo } from "../../../../components/Titulo";
import Cabecalho from "../../../../components/Cabecalho";
import { Botao } from "../../../../components/Botao";

export default function Exercicio({ navigation, route }: any) {
    const item = route?.params?.exercicio
    return (
        <>
            <Cabecalho texto={item.name} navigation={navigation} />
            <VStack alignItems='center' p={5}>
                <Titulo fontSize='md'>{item.description}</Titulo>
                <Divider mt={5} />
                <Titulo>Colocar vídeo/GIF aqui</Titulo>
                <Divider mt={5} />
                <Text mt={5}>{item.details}</Text>
                <Divider mt={5} />
                <Botao onPress={() => navigation.navigate('Recordes', {...route})} mb={5}>Registrar Recorde</Botao>
                <Text>Gráfico mostrando evolução de carga registrada pelo usuário</Text>
            </VStack>
        </>
    )
}