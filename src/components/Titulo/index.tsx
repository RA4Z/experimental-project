import { Text, ITextProps } from 'native-base';
import { ReactNode } from 'react';

interface TituloProps extends ITextProps {
    children: ReactNode;
    marginTop?: number
}

export function Titulo({ children, marginTop, ...rest }: TituloProps) {
    return (
        <Text
            fontSize="2xl"
            fontWeight="bold"
            color="gray.500"
            textAlign="center"
            mt={marginTop || 5} 
            {...rest}
        >
            {children}
       </Text>
    )
}