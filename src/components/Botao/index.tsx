import { Button, IButtonProps  } from "native-base";
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps {
    children: ReactNode;
    autoSize?: boolean;
    color?: string;
    marginTop?: number
    fontSize?: number
  }

  export function Botao({ children, autoSize = false, color, fontSize, marginTop, ...rest }: ButtonProps){

    return (
      <Button
        w={autoSize ? 'auto' : '100%'}
        bg={color || 'blue.800'}
        mt={marginTop || 10}
        borderRadius="lg"
        _text={{ color: 'white', fontSize: fontSize  }}
        {...rest}
      >
        {children}
      </Button>
    );
  };