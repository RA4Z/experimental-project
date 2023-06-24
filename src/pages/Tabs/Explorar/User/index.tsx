import { View } from "native-base";
import Cabecalho from "../../../../components/Cabecalho";
import { useEffect, useState } from "react";
import Loading from "../../../Loading";

export default function User({ navigation, route }: any) {
    const [tempo, setTempo] = useState(false);
    const item = route?.params?.usuario

    useEffect(() => {
        setTimeout(() => {
            setTempo(true);
        }, 500);
    }, [])

    return (
        <View style={{ flex: 1 }}>
            { tempo? <>
                <Cabecalho texto={item.name} navigation={navigation} />
            </> : <Loading />}
        </View>
    )
}