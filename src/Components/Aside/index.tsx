import { MenuMain } from '../MenuMain';
import {Container} from './styles';

export const Aside = () => {
  return (
    <Container>
        <img src="./images/logo.png" alt="Logo" />
        <hr />
        <MenuMain />
    </Container>
  );
}