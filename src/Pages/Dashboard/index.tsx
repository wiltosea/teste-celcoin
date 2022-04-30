import { Search } from '../../Components/SearchBox';
import { UserMenu } from '../../Components/UserMenu';
import {Container, HeaderContainer } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <HeaderContainer>
        <Search />
        <UserMenu />

      </HeaderContainer>
    </Container>
  );
}

export default Dashboard;