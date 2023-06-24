import { View } from 'react-native'
import Load from "../components/Load";
import { StyleSheet } from "react-native"

export default function Loading() {
    return (
        <View style={styles.geral}>
            <Load height={150} width={150} opacity={1} />
        </View>
    )
}
const styles = StyleSheet.create({
    geral: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
})