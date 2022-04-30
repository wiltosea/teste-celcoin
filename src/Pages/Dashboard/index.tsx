import {Container, HeaderContainer, SearchBox} from './styles';

const Dashboard = () => {
  return (
    <Container>
      <HeaderContainer>
        <SearchBox>
          <i className="fas fa-search" />
          <input type="text" placeholder="Busca..." />
        </SearchBox>
      </HeaderContainer>
    </Container>
  );
}

export default Dashboard;