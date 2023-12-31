import { Input, FormControl } from "native-base";

interface InputProps {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
}

export function InputTexto({
  label,
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText
}: InputProps): JSX.Element {
  return (
    <FormControl>
      {label && <FormControl.Label>{label}</FormControl.Label>}
        <Input
          placeholder={placeholder}
          size="lg"
          w="100%"
          borderRadius="lg"
          bgColor="gray.100"
          secureTextEntry={secureTextEntry}
          shadow={3}
          value={value}
          onChangeText={onChangeText}
        />
    </FormControl>
  );
};