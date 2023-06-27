import { Image } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import {useEffect, useState} from 'react';

import { cards } from './Cards';

interface ICardOpcoes {
    abaAtual: string
}

export default function CardOpcoes({ abaAtual }: ICardOpcoes) {
    const [numeroAba, setNumeroAba] = useState(0);
    useEffect(() => {
        if(abaAtual == 'Perfil') {
            setNumeroAba(0)
        } else setNumeroAba(1)
    },[abaAtual])
    return (
        <View style={{ alignItems: 'center', padding: 20, rowGap:15 }}>
            
            {cards[numeroAba]?.info.map(card => (
                <View style={[styles.card]}>
                    <Image source={card.image} style={styles.imagemCard} alt={card.id.toString()} />
                    <Text style={styles.heading}>
                        {card.text}
                    </Text>
                    <Image source={card.image} style={[styles.imagemCard, {opacity:0}]} alt={card.id.toString()} />
                </View>
            ))}

        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 15,
        textAlign: 'center',
        maxWidth: 150
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        height: 65,
        padding:10,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagemCard: {
        height: 65,
        width: 65,
    }
});