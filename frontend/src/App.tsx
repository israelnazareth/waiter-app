import { GlobalStyles } from './styles/GlobasStyles';
import { Header } from './components/Header';
import { Orders } from './components/Orders';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
}
