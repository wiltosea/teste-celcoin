import { PageContainer } from '../../Components/Layout/PageContainer';
import {ContentContainer} from '../../Components/Layout/ContentContainer';
import {ContentContainerHistorico} from '../../Components/Layout/ContentContainerHistorico';
import {ContainerMaisRealizados } from '../../Components/Layout/ContainerMaisRealizados';
import {Row, Col, Typography } from 'antd'
import { CardsPacientes } from '../../Components/Cards/CardsPacientes';
import { CardsHistorico } from '../../Components/Cards/CardsHistorico';
import { CardTesteMaisRealizado } from '../../Components/Cards/CardMaisRealizado';
import { CardsAtualizacoesImportantes } from '../../Components/Cards/CardsAtualizacoesImportantes';
import Button from '../../Components/Button';
import { HeaderContainer } from '../../Components/HeaderContainer';

const {Title} = Typography;

const Dashboard = () => {
  return (
    <PageContainer>
      <HeaderContainer />
      <ContentContainer>
        <Title level={4}>Informações gerais</Title>
          <Row gutter={16}>
            <Col flex={3}>
              <CardsPacientes icon={"ic:baseline-person-outline"} iconColor='blue' title='26' desc='Pacientes ativos' kpi='+30%' titleToolTip={'Pacientes totais'} valueToolTip='268' />
            </Col>
            <Col flex={3}>
              <CardsPacientes icon={"bx:bx-test-tube"} iconColor='blue' title='306' desc='Testes realizados' kpi='-10%' titleToolTip={'Testes totais'} valueToolTip='1.265' negative/>
            </Col>
            <Col flex={3}>
              <CardsPacientes icon={"bx:bx-test-tube"} iconColor='green' title='139' desc='Testes concluídos' kpi='+30%'titleToolTip={'Testes totais concluídos'} valueToolTip='10.550'/>
            </Col>
            <Col flex={3}>
              <CardsPacientes icon={"bx:bx-test-tube"} title='11' desc='Testes cancelados' kpi='-3%'titleToolTip={'Testes totais cancelados'} valueToolTip='618' canceled negative iconColor='red'/>
            </Col>
          </Row>
      </ContentContainer>
      <ContentContainer>
      <Row gutter={16}>
        <Col span={18}>
            <Title level={4}>Histórico de atendimentos <Button href="/pacientes" textTitle="Ver todos" typeButton="primary"/></Title>
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
            <CardTesteMaisRealizado
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
            <Col span={8}>
              <CardsAtualizacoesImportantes
                nome={'Renata Augusto Ferreira'}
                exame={'TDAH CAB ADHD'}
                dataRealizado={'20/10/2023'}
                foto={"./images/foto-renata.png"}
                completo
              />
            </Col>
            <Col span={8}>
              <CardsAtualizacoesImportantes
                nome={'Carlos Nobrega Baccio'}
                exame={'TDAH CAB ADHD'}
                dataRealizado={'20/10/2023'}
                foto={"./images/foto-carlos-nobrega.png"}
              />
            </Col>
            <Col span={8}>
              <CardsAtualizacoesImportantes
                nome={'Suelton A. Mellis'}
                exame={'TDAH CAB ADHD'}
                dataRealizado={'20/10/2023'}
                foto={"./images/foto-suelton-mellis.png"}
              />
            </Col>
          </Row>
      </ContentContainer>
    </PageContainer>
  );
}

export default Dashboard;