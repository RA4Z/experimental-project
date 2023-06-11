import React from "react";
import { VStack, Text } from "native-base";
import LottieView from 'lottie-react-native'

export default function Login() {

    return (
        <VStack flex={1} alignItems="center" p={5}>
            <LottieView 
                source={require('../../assets/dog-academy.json')}
                autoPlay={true}
                style={{
                    width: 200,
                    height: 200,
                }}
                loop={true}
            />
            <Text>Esta é a tela de Login</Text>
        </VStack>
    )
}