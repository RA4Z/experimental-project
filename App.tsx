import { NativeBaseProvider, StatusBar } from 'native-base';
import Routes from './src/Routes';

import {TEMAS} from './src/styles/temas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Routes />
    </NativeBaseProvider>
  );
}
