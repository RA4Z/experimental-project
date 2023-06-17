import { Button, IButtonProps  } from "native-base";
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps {
    children: ReactNode;
    autoSize?: boolean;
    color?: string;
    marginTop?: number
  }

  export function Botao({ children, autoSize = false, color, marginTop, ...rest }: ButtonProps){

    return (
      <Button
        w={autoSize ? 'auto' : '100%'}
        bg={color || 'blue.800'}
        mt={marginTop || 10}
        borderRadius="lg"
        _text={{ color: 'white' }}
        {...rest}
      >
        {children}
      </Button>
    );
  };