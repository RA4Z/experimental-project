import { VStack, Text } from "native-base";
import React, { useState } from "react";
import { Titulo } from "../../components/Titulo";
import { InputTexto } from "../../components/InputTexto";
import Logo from "../../components/Logo";
import { Botao } from "../../components/Botao";

import { secoes } from '../../utils/CadastroInputs';

export default function Cadastro() {
    const [username, setUsername] = useState('')
    const [dados, setDados] = useState({} as any)
    const [secao, setSecao] = useState(0)

    function avancarSecao() {
        setSecao(secao + 1)
    }

    function atualizarDados(id: string, valor: string) {
        setDados({...dados, [id]: valor})
      }

    return (
        <VStack flex={1} alignItems="center" justifyContent='flex-start' p={5}>
            {secao == 0 && <>
                <Logo height={200} width={200} />
                <Titulo>Por favor, nos diga como podemos lhe chamar...</Titulo>
                <InputTexto placeholder='Nome de usuário' value={username} onChangeText={setUsername}  /> 
            </>}
            {secao == 1 && <>
                <Titulo>Olá {username}, pedimos que insira alguns dados sobre você</Titulo>
                {secoes[0]?.entradaTexto.map(entrada => {
                    return (
                        <InputTexto 
                            key={entrada.id} 
                            placeholder={entrada.placeholder}
                            label={entrada.label}
                            value={dados[entrada.name]}
                            secureTextEntry={entrada.secureTextEntry}
                            onChangeText={(text) => atualizarDados(entrada.name, text)}
                        />
                    )
                })}
            </>}
            <Botao onPress={avancarSecao}>Avançar</Botao>
        </VStack>
    )
}