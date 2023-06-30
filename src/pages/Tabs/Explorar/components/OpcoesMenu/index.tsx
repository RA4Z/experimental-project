import { useState } from 'react';
import { Divider } from "native-base";
import { TouchableOpacity, View, Text } from "react-native";

interface IOpcoesMenu {
    filtro: string;
    onEnviarValor: any;
}

export default function OpcoesMenu({ filtro='Exercício', onEnviarValor }: IOpcoesMenu) {
    const [aba, setAba] = useState(filtro)

    function mudarFiltro(abaSelecionada: string) {
        onEnviarValor(abaSelecionada);
        setAba(abaSelecionada)
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, padding: 5 }}>

            <TouchableOpacity onPress={() => mudarFiltro('Exercício')}>
                <Text style={{ color: aba == 'Exercício' ? '#00BCE5' : 'black' }}>Exercícios</Text>
            </TouchableOpacity>

            <Divider style={{ width: 1, height: 30 }} />

            <TouchableOpacity onPress={() => mudarFiltro('Alongamento')}>
                <Text style={{ color: aba == 'Alongamento' ? '#00BCE5' : 'black' }}>Alongamentos</Text>
            </TouchableOpacity>

            <Divider style={{ width: 1, height: 30 }} />

            <TouchableOpacity onPress={() => mudarFiltro('Usuário')}>
                <Text style={{ color: aba == 'Usuário' ? '#00BCE5' : 'black' }}>Usuários</Text>
            </TouchableOpacity>

        </View>
    )
}