import { Box, VStack, Select, FormControl } from "native-base";
import { useState } from 'react';

import { Titulo } from "../../../components/Titulo";
import { Botao } from "../../../components/Botao";

export default function Explorar() {
    const [filtro, setFiltro] = useState('')

    return (
        <VStack>
            <FormControl alignItems='center' mt={5}>
                <FormControl.Label>Selecione Filtro</FormControl.Label>
                <Select
                    placeholder='Selecionar Filtro'
                    selectedValue={filtro}
                    width={200}
                    onValueChange={(itemValue: string) => setFiltro(itemValue)}
                >
                    <Select.Item label="Exercícios" value="Exercícios" />
                    <Select.Item label="Professores" value="Professores" />
                    <Select.Item label="Alunos" value="Alunos" />
                </Select>
            </FormControl>
            {
                filtro == 'Exercícios' && <Titulo>Exercícios</Titulo>
            }
            {
                filtro == 'Professores' && <Titulo>Professores</Titulo>
            }
            {
                filtro == 'Alunos' && <Titulo>Alunos</Titulo>
            }
        </VStack>
    )
}