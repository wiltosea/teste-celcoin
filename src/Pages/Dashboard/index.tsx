import { Search } from '../../Components/SearchBox';
import { UserMenu } from '../../Components/UserMenu';
import {Container, ContainerMaisRealizados, ContentContainer, ContentContainerHistorico, HeaderContainer } from './styles';
import {Row, Col, Typography } from 'antd'
import { CardsPacientes } from '../../Components/Cards/CardsPacientes';
import { CardsHistorico } from '../../Components/Cards/CardsHistorico';
import { TesteMaisRealizado } from '../../Components/Cards/CardMaisRealizado';
import { CardsAtualizacoesImportantes } from '../../Components/Cards/CardsAtualizacoesImportantes';
const {Title} = Typography;

const Dashboard = () => {
  return (
    <Container>
      <HeaderContainer>
        <Search />
        <UserMenu />
      </HeaderContainer>

      <ContentContainer>
        <Title level={4}>Informações gerais</Title>
          <Row gutter={16}>
            <Col flex={3}>
              <CardsPacientes icon={"ic:baseline-person-outline"} title='26' desc='Pacientes ativos' kpi='+30%' titleToolTip={'Pacientes totais'} valueToolTip='268'/>
            </Col>
            <Col flex={3}>
              <CardsPacientes icon={"ic:baseline-person-outline"} title='306' desc='Testes realizados' kpi='-10%'titleToolTip={'Pacientes totais'} valueToolTip='268'/>
            </Col>
            <Col flex={3}>
              <CardsPacientes icon={"ic:baseline-person-outline"} title='139' desc='Testes concluídos' kpi='+30%'titleToolTip={'Pacientes totais'} valueToolTip='268'/>
            </Col>
            <Col flex={3}>
              <CardsPacientes icon={"ic:baseline-person-outline"} title='11' desc='Testes cancelados' kpi='-3%'titleToolTip={'Pacientes totais'} valueToolTip='268'/>
            </Col>
          </Row>
      </ContentContainer>
      <ContentContainer>
      <Row gutter={16}>
        <Col span={18}>
            <Title level={4}>Histórico de atendimentos</Title>
            <ContentContainerHistorico>
              <Row gutter={10}>
                <Col span={8}>
                  <CardsHistorico
                    nome={'Renata Augusto Ferreira'}
                    exame={'TDAH CAB ADHD'}
                    dataRealizado={'2020-05-05'}
                    tipo={'tdah'}
                  />
                </Col>
                <Col span={8}>
                  <CardsHistorico
                    nome={'Renata Augusto Ferreira'}
                    exame={'Autismo'}
                    dataRealizado={'2020-05-05'}
                    tipo={'autismo'}
                  />
                </Col>
                <Col span={8}>
                  <CardsHistorico
                    nome={'Renata Augusto Ferreira'}
                    exame={'TDAH CAB ADHD'}
                    dataRealizado={'2020-05-05'}
                    tipo={'tdah'}
                  />
                </Col>
              </Row>
            </ContentContainerHistorico>
        </Col>
        <Col span={6}>
            <Title level={4}>Teste mais realizado</Title>
          <ContainerMaisRealizados>
            <Row gutter={10}>
              <Col span={24}>
            <TesteMaisRealizado
              nomeDoExame={'Autismo'}
              disponiveis={3}
              tipo={'autismo'}
            />
            </Col>
            </Row>
          </ContainerMaisRealizados>
        </Col>
      </Row>


    </ContentContainer>
    <ContentContainer>
        <Title level={4}>Atualizações Importantes</Title>
          <Row gutter={10}>
            <Col span={6}>
              <CardsAtualizacoesImportantes
                nome={'Nome do paciente'}
                exame={'Teste realizado'}
                dataRealizado={'2020-05-05'}
                foto={"./images/foto-renata.png"}
              />
            </Col>
            <Col span={6}>
              <CardsAtualizacoesImportantes
                nome={'Nome do paciente'}
                exame={'Teste realizado'}
                dataRealizado={'2020-05-05'}
                foto={"./images/foto-renata.png"}
              />
            </Col>
            <Col span={6}>
              <CardsAtualizacoesImportantes
                nome={'Nome do paciente'}
                exame={'Teste realizado'}
                dataRealizado={'2020-05-05'}
                foto={"./images/foto-renata.png"}
              />
            </Col>
            <Col span={6}>
              <CardsAtualizacoesImportantes
                nome={'Nome do paciente'}
                exame={'Teste realizado'}
                dataRealizado={'2020-05-05'}
                foto={"./images/foto-renata.png"}
              />
            </Col>
          </Row>
      </ContentContainer>
    </Container>
  );
}

export default Dashboard;