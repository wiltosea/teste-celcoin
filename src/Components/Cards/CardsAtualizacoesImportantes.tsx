import { Col, Row } from "antd";
import { Name, StyledCardsAtualizacoesImportantes, SubTitle, TestComplete } from "./styles";

interface CardsHistoricoProps {
  nome: string,
  exame: string,
  dataRealizado: string,
  foto: string,
}

export const CardsAtualizacoesImportantes = ({nome, exame, dataRealizado, foto }:CardsHistoricoProps) => {

  return (
    <StyledCardsAtualizacoesImportantes>
      <Row gutter={16}>
        <Col span={8}>
          <img alt='foto-paciente' src={foto}/>
        </Col>
        <Col span={16}>
          <SubTitle>Paciente</SubTitle>
          <span className="nome">{nome}</span>
          <TestComplete>Completou o teste:<span>&nbsp;{exame}</span></TestComplete>
          <SubTitle>Realizado em: {dataRealizado}</SubTitle>
          
        </Col>
      </Row>
        

        
    </StyledCardsAtualizacoesImportantes>
  );
}