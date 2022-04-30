import { Search } from '../../Components/SearchBox';
import { UserMenu } from '../../Components/UserMenu';
import {Container, ContentContainer, HeaderContainer } from './styles';
import {Row, Col, Typography } from 'antd'
import { CardsPacientes } from '../../Components/Cards';
const {Title} = Typography;

const Dashboard = () => {
  return (
    <Container>
      <HeaderContainer>
        <Search />
        <UserMenu />
      </HeaderContainer>
      <ContentContainer>
        <Title level={4}>Atualizações de pacientes</Title>
          <Row gutter={16}>
            <Col flex={3}>
              <CardsPacientes icon={"ic:baseline-person-outline"} title='26' desc='Pacientes ativos' kpi='+30%'/>
            </Col>
            <Col flex={3}>
              <CardsPacientes icon={"ic:baseline-person-outline"} title='306' desc='Testes realizados' kpi='-10%'/>
            </Col>
            <Col flex={3}>
              <CardsPacientes icon={"ic:baseline-person-outline"} title='139' desc='Testes concluídos' kpi='+30%'/>
            </Col>
            <Col flex={3}>
              <CardsPacientes icon={"ic:baseline-person-outline"} title='11' desc='Testes cancelados' kpi='-3%'/>
            </Col>
          </Row>
        </ContentContainer>
        <ContentContainer>
        <Title level={4}>Todos os pacientes</Title>
          <Row gutter={16}>
            <Col flex={3}>
              <CardsPacientes icon={"ic:baseline-person-outline"} title='26' desc='Pacientes ativos' kpi='+30%'/>
            </Col>
            <Col flex={3}>
              <CardsPacientes icon={"ic:baseline-person-outline"} title='306' desc='Testes realizados' kpi='-10%'/>
            </Col>
            <Col flex={3}>
              <CardsPacientes icon={"ic:baseline-person-outline"} title='139' desc='Testes concluídos' kpi='+30%'/>
            </Col>
            <Col flex={3}>
              <CardsPacientes icon={"ic:baseline-person-outline"} title='11' desc='Testes cancelados' kpi='-3%'/>
            </Col>
          </Row>
        </ContentContainer>
    </Container>

  );
}

export default Dashboard;