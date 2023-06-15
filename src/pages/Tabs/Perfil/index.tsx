import { VStack, Avatar } from "native-base";
import { Titulo } from "../../../components/Titulo";

export default function Perfil() {
    return (
        <VStack p={5} justifyContent='center' alignItems='center'>
            <Titulo fontSize='lg'>Robert Aron Zimmermann</Titulo>
            <Avatar size={150} source={{ uri: 'https://github.com/RA4Z.png' }} mt={5} />
                
        </VStack>
    )
}