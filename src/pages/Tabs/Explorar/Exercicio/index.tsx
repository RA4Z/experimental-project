import { VStack } from "native-base";
import { Titulo } from "../../../../components/Titulo";

export default function Exercicio({ navigation, route }: any) {
    return (
        <VStack>
            <Titulo>{route?.params.filtro}</Titulo>
            <Titulo>{route?.params.nome}</Titulo>
        </VStack>
    )
}