import { Button } from "../Button";
import { StyledCardMaisRealizado, SubTitle } from "./styles";

interface CardsTesteMaisRealizadoProps {
  nomeDoExame: string,
  disponiveis: number,
  tipo: string,
}

export const CardTesteMaisRealizado = ({nomeDoExame, disponiveis, tipo }:CardsTesteMaisRealizadoProps) => {

  return (
    <StyledCardMaisRealizado
      cover={
        <img alt='icon-tipo-exame'
          src={tipo === 'autismo' ? './images/icone-autismo.png' : './images/icone-tdah.png'}
        />
      }>
        <h3>{nomeDoExame}</h3>
        <SubTitle>Licenças disponíveis</SubTitle>
        <div className="footer"><span className='quantidade-disponivel'>{disponiveis}</span>
        <Button href="/pacientes" textTitle="Comprar mais" typeButton="primary"/></div>
        
    </StyledCardMaisRealizado>
  );
}