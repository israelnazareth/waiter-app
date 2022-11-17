import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Main } from './src/Main';

export default function App() {
  useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  return (
    <>
      <StatusBar style='dark' backgroundColor='#fafafa'/>
      <Main />
    </>
  );
}
