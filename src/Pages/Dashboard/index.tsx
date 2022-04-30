import {Container, HeaderContainer, SearchBox} from './styles';
import { Icon } from '@iconify/react';

const Dashboard = () => {
  return (
    <Container>
      <HeaderContainer>
        <SearchBox>
          <Icon icon="ic-baseline-search" width={20}/>
          <input type="text" placeholder="Busca..." />
        </SearchBox>
      </HeaderContainer>
    </Container>
  );
}

export default Dashboard;