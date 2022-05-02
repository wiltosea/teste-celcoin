import { PageContainer } from '../../Components/Layout/PageContainer';
import {ContentContainer} from '../../Components/Layout/ContentContainer';
import {ContentContainerHistorico} from '../../Components/Layout/ContentContainerHistorico';
import {ContainerMaisRealizados } from '../../Components/Layout/ContainerMaisRealizados';
import {Row, Col, Typography, Table } from 'antd'
import { CardsPacientes } from '../../Components/Cards/CardsPacientes';
import { CardsHistorico } from '../../Components/Cards/CardsHistorico';
import { CardTesteMaisRealizado } from '../../Components/Cards/CardMaisRealizado';
import { CardsAtualizacoesImportantes } from '../../Components/Cards/CardsAtualizacoesImportantes';
import Button from '../../Components/Button';
import { HeaderContainer } from '../../Components/HeaderContainer';
import { Icon } from '@iconify/react';
import { PacientesTable } from '../../Components/PacientesTable';

const {Title} = Typography;

const Pacientes = () => {
  return (
    <PageContainer>
      <HeaderContainer />
      
      <ContentContainer>
        <Title level={4}>Atualizações de pacientes</Title>
          <ContentContainerHistorico>
              <Row gutter={10} className='scrollable-area'>
                <Col span={5}>
                  <CardsHistorico
                    nome={'Renata Augusto Ferreira'}
                    exame={'TDAH CAB ADHD'}
                    dataRealizado={'2020-05-05'}
                    tipo={'tdah'}
                  />
                </Col>
                <Col span={5}>
                  <CardsHistorico
                    nome={'Renata Augusto Ferreira'}
                    exame={'Autismo'}
                    dataRealizado={'2020-05-05'}
                    tipo={'autismo'}
                  />
                </Col>
                <Col span={5}>
                  <CardsHistorico
                    nome={'Renata Augusto Ferreira'}
                    exame={'TDAH CAB ADHD'}
                    dataRealizado={'2020-05-05'}
                    tipo={'tdah'}
                  />
                </Col>
                <Col span={5}>
                  <CardsHistorico
                    nome={'Renata Augusto Ferreira'}
                    exame={'TDAH CAB ADHD'}
                    dataRealizado={'2020-05-05'}
                    tipo={'tdah'}
                  />
                </Col>
                <Col span={5}>
                  <CardsHistorico
                    nome={'Renata Augusto Ferreira'}
                    exame={'TDAH CAB ADHD'}
                    dataRealizado={'2020-05-05'}
                    tipo={'tdah'}
                  />
                </Col>
                <Col span={5}>
                  <CardsHistorico
                    nome={'Renata Augusto Ferreira'}
                    exame={'TDAH CAB ADHD'}
                    dataRealizado={'2020-05-05'}
                    tipo={'tdah'}
                  />
                </Col>
                <Col span={5}>
                  <CardsHistorico
                    nome={'Renata Augusto Ferreira'}
                    exame={'TDAH CAB ADHD'}
                    dataRealizado={'2020-05-05'}
                    tipo={'tdah'}
                  />
                </Col>
              </Row>
          </ContentContainerHistorico>

      </ContentContainer>
      <ContentContainer>
        <Title level={4}>Todos os pacientes</Title>
        <PacientesTable />
      </ContentContainer>
    </PageContainer>
  );
}

export default Pacientes;