import { Col, Row } from "antd";
import { Name, StyledCardsAtualizacoesImportantes, SubTitle, TestComplete } from "./styles";

interface CardsHistoricoProps {
  nome: string,
  exame: string,
  dataRealizado: string,
  foto: string,
  completo?: boolean,
}

export const CardsAtualizacoesImportantes = ({nome, exame, dataRealizado, foto, completo }:CardsHistoricoProps) => {

  return (
    <StyledCardsAtualizacoesImportantes>
      <Row gutter={16}>
        <Col span={6}>
          <img alt='foto-paciente' src={foto}/>
        </Col>
        <Col span={18}>
          <SubTitle>Paciente</SubTitle>
          <span className="nome">{nome}</span>
          <TestComplete className={completo?'completo':'cancelado'}>
            {completo?'Completou o teste: ':'Cancelou o teste: '}<span>&nbsp;{exame}</span>
          </TestComplete>
          <SubTitle>Realizado em: {dataRealizado}</SubTitle>
          
        </Col>
      </Row>
        

        
    </StyledCardsAtualizacoesImportantes>
  );
}