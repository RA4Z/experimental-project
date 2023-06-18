import { VStack, Text, Divider, Image } from "native-base";
import { TouchableOpacity } from "react-native";

import { Titulo } from "../../../../components/Titulo";
import VoltarIMG from '../../../../assets/voltar.png';

export default function Exercicio({ navigation, route }: any) {
    const item = route?.params?.exercicio
    return (
        <>
            <VStack flexDir='row' p={5} justifyContent='space-around' alignItems='center'>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={VoltarIMG} mt={5} w={50} h={50} alt="Voltar" /></TouchableOpacity>
                <Titulo>{item.name}</Titulo>
                <Image opacity={0} source={VoltarIMG} mt={5} w={50} h={50} alt="Voltar" />
            </VStack>
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