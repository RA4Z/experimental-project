import { VStack, useToast } from "native-base";
import { Alert } from "react-native";
import { useEffect, useState } from 'react';

import Logo from "../../components/Logo";
import { Titulo } from "../../components/Titulo";
import { InputTexto } from "../../components/InputTexto";
import { Botao } from "../../components/Botao";
import Loading from "../Loading";

export default function RecuperarSenha({ navigation }: any) {
    const [carregandoDados, setCarregandoDados] = useState(true);
    const [email, setEmail] = useState('')
    const toast = useToast()

    useEffect(() => {
        setTimeout(() => {
            setCarregandoDados(false)
        }, 100)
    }, [])

    function enviarEmail() {
        if (email == '') {
            toast.show({
                title: 'Endereço de E-mail em branco',
                description: 'Insira um endereço de E-mail válido!',
                backgroundColor: 'red.500'
            })
            return
        }
        Alert.alert('Enviaremos um E-mail com sua senha atual!')
        navigation.goBack()
    }
    return (
        <>{carregandoDados ? <Loading /> :
            <VStack flex={1} alignItems="center" justifyContent='flex-start' p={5}>
                <Logo height={150} width={150} />
                <Titulo>Insira seu E-mail para enviarmos sua senha</Titulo>
                <InputTexto placeholder="Endereço de E-mail" value={email} onChangeText={setEmail} />
                <Botao onPress={enviarEmail}>Enviar</Botao>
            </VStack>}
        </>
    )
}