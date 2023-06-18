import { VStack, Image } from "native-base";
import { TouchableOpacity } from "react-native";

import { Titulo } from "../Titulo";

import VoltarIMG from '../../assets/voltar.png';

export default function Cabecalho({navigation, texto}:any) {
    return (
        <VStack flexDir='row' p={5} justifyContent='space-around' alignItems='center'>
            <TouchableOpacity onPress={() => navigation.goBack()}><Image source={VoltarIMG} mt={5} w={50} h={50} alt="Voltar" /></TouchableOpacity>
            <Titulo maxWidth='70%'>{texto}</Titulo>
            <Image opacity={0} source={VoltarIMG} mt={5} w={50} h={50} alt="Voltar" />
        </VStack>
    )
}