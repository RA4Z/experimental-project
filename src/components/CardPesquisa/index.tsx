import { Box, Divider, Image, Text, Avatar } from "native-base";
import { TouchableOpacity } from "react-native";
import Animated, {
    FadeInDown
  } from 'react-native-reanimated';
import { Titulo } from "../Titulo";
import { useState } from 'react';

interface CardProps {
    name: string;
    description: string,
    imageWeb?: boolean;
    image?: any;
    action?: () => void
  }

export default function CardPesquisa({action, ...rest}: CardProps) {
    const [mostrarDescricao, setMostrarDescricao] = useState(false);
    return (
        <Animated.View entering={FadeInDown}>
            <TouchableOpacity
                onPress={() => setMostrarDescricao(!mostrarDescricao)}
                onLongPress={action}>
                <Box alignItems='center'>
                    {rest.imageWeb == true ? 
                    <Avatar mt={5} w={100} h={100} source={{ uri: `${rest.image}` }} /> :
                    <Image source={rest.image} mt={5} w={100} h={100} alt="Exercícios" /> 
                    }
                    

                    <Titulo mt={0}>{rest.name}</Titulo>
                    {mostrarDescricao && <Text>{rest.description}</Text>}
                </Box>
            </TouchableOpacity>
            <Divider mt={5} />
        </Animated.View>
    )
}