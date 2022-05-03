import { Name, StyledCardsHistorico, SubTitle, TextResult } from "./styles";

interface CardsHistoricoProps {
  nome: string,
  exame: string,
  dataRealizado: string,
  tipo: string,
}

export const CardsHistorico = ({nome, exame, dataRealizado, tipo }:CardsHistoricoProps) => {

  return (
    <StyledCardsHistorico
      cover={
        <img alt='icon-tipo-exame'
          src={tipo === 'autismo' ? './images/icone-autismo.png' : './images/icone-tdah.png'}
        />
      }>
        <Name>{nome}</Name>
        <SubTitle>Teste Realizado</SubTitle>
        <TextResult>{exame}</TextResult>
        <SubTitle>Realizado em:</SubTitle>
        <TextResult>{dataRealizado}</TextResult>
        
    </StyledCardsHistorico>
  );
}