import Cabecalho from "../../../../components/Cabecalho";

export default function User({ navigation, route}: any) {
    const item = route?.params?.usuario
    return (
        <>
            <Cabecalho texto={item.name} navigation={navigation} />
        </>
    )
}