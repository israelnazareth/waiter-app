import { Container } from './styles';
import { OrdersBoard } from '../OrdersBoard';

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕑" title="Fila de espera" />
      <OrdersBoard icon="👩🏻‍🍳" title="Em preparação" />
      <OrdersBoard icon="✅" title="Pronto!" />
    </Container>
  );
}
