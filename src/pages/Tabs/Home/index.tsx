import { View } from "react-native";
import { useState, useEffect } from 'react';

import { Titulo } from "../../../components/Titulo";
import Loading from "../../Loading";

export default function Home() {
    const [carregandoTudo, setCarregandoTudo] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setCarregandoTudo(false)
        },500)
    },[])

    return (
        <>
           {carregandoTudo ? <Loading /> : <View>
                <Titulo>Página Principal</Titulo>
            </View>}
        </>
    )
}