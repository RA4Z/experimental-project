import { VStack } from "native-base";
import Logo from "../../components/Logo";

export default function RecuperarSenha() {
    return (
        <VStack flex={1} alignItems="center" justifyContent='center' p={5}>
            <Logo height={150} width={150} />
        </VStack>
    )
}