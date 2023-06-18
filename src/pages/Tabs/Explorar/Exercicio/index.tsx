import { VStack, Text, Divider } from "native-base";

import { Titulo } from "../../../../components/Titulo";
import Cabecalho from "../../../../components/Cabecalho";

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
                <Text>{item.details}</Text>
            </VStack>
        </>
    )
}