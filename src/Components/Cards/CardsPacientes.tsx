import { Icon } from "@iconify/react";
import {Typography} from 'antd'
import { Indicador, StyledCard } from "./styles";


const {Title} = Typography;

interface CardsPacientesProps {
  icon:string, 
  title: string,
  desc: string,
  kpi?: string,
  iconColor?: string,
}

export const CardsPacientes = ({icon, title, desc, kpi, iconColor }:CardsPacientesProps) => {
  return (
    <StyledCard title={<Icon icon={icon} width={40} color={iconColor}/> } extra={<Indicador>{kpi}</Indicador> } >
      <Title level={2}>{title}</Title>
      <p className="descricao">{desc}</p>
    </StyledCard>
  );
  }

