import { View, Text } from "react-native";
import { useEffect, useState } from "react";

import IconeMulher from '../../../../assets/mulher.png';
import IconeHomem from '../../../../assets/homem.png';
import PremiumIMG from '../../../../assets/premium.png'

import Cabecalho from "../../../../components/Cabecalho";
import Loading from "../../../Loading";
import { Avatar, Divider, Image, ScrollView } from "native-base";
import { Botao } from "../../../../components/Botao";
import OpcoesMenu from "./components/OpcoesMenu";
import CardOpcoes from "./components/CardOpcoes";

export default function User({ navigation, route }: any) {
    const [carregandoTudo, setCarregandoTudo] = useState(true);
    const [aba, setAba] = useState('Perfil');

    const item = route?.params?.usuario

    const receberValorAba = (childdata: string) => {
        setAba(childdata);
    }

    useEffect(() => {
        setTimeout(() => {
            setCarregandoTudo(false);
        }, 500);
    }, [])

    return (
        <>
            {carregandoTudo ? <Loading /> :
                <ScrollView>
                    <Cabecalho texto={item.name} navigation={navigation} />

                    <View style={{ alignItems: 'center' }}>
                        {item.linkImagem != '' ?
                            <Avatar mt={5} w={120} h={120} source={{ uri: `${item.linkImagem}` }} />
                            :
                            <Image source={item.genero == 'Masculino' ? IconeHomem : IconeMulher} mt={5} w={120} h={120} alt="Usuário" />
                        }
                        <Image source={PremiumIMG} opacity={item.premium ? 1 : 0} mt={-5} w={35} h={35} alt="Premium" />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 16 }}>
                        <Text style={{ fontSize: 17, marginTop: 7, textAlign: 'center' }}>{item.seguindo}{'\n'}Seguindo</Text>
                        <Text style={{ fontSize: 17 }}>{item.cargo}</Text>
                        <Text style={{ fontSize: 17, marginTop: 7, textAlign: 'center' }}>{item.seguidores}{'\n'}Seguidores</Text>
                    </View>

                    <Botao color="black" width='auto' alignSelf='center' borderRadius={25} fontSize={20}>Seguir</Botao>
                    <Divider mt={5} />

                    <OpcoesMenu cargo={item.cargo} onEnviarValor={receberValorAba} />
                    
                    <CardOpcoes abaAtual={aba} route={route} />

                </ScrollView>
            }
        </>
    )
}
