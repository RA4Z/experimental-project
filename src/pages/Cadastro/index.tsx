import { VStack, Text } from "native-base";
import React, { useState } from "react";
import { Titulo } from "../../components/Titulo";
import { InputTexto } from "../../components/InputTexto";
import Logo from "../../components/Logo";
import { Botao } from "../../components/Botao";

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [secao, setSecao] = useState(0)

    function avancarSecao() {
        setSecao(secao + 1)
    }

    return (
        <VStack flex={1} alignItems="center" justifyContent='flex-start' p={5}>
            {secao == 0 && <>
                <Logo height={200} width={200} />
                <Titulo>Por favor, nos diga como podemos lhe chamar...</Titulo>
                <InputTexto placeholder='Nome de usuário' value={nome} onChangeText={setNome}  /> 
            </>}
            {secao == 1 && <>
                <Titulo>Olá {nome}, tudo certo?</Titulo>
            </>}
            <Botao onPress={avancarSecao}>Avançar</Botao>
        </VStack>
    )
}