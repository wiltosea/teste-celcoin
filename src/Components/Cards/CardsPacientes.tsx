import { Icon } from "@iconify/react";
import {Tooltip, Typography} from 'antd'
import { Indicador, StyledCard } from "./styles";


const {Title} = Typography;

interface CardsPacientesProps {
  icon:string, 
  title: string,
  desc: string,
  kpi?: string,
  iconColor?: string,
  titleToolTip: string,
  valueToolTip: string | number,
}

export const CardsPacientes = ({icon, title, desc, kpi, iconColor, titleToolTip,valueToolTip }:CardsPacientesProps) => {
  
  return (
    <Tooltip placement="topLeft" title={() => {
      return <div>
          <p>{titleToolTip}</p>
          <span>{valueToolTip}</span>
      </div>
    }}>
      <StyledCard title={<Icon icon={icon} width={40} color={iconColor}/> } extra={<Indicador>{kpi}</Indicador> } >
        <Title level={2}>{title}</Title>
        <p className="descricao">{desc}</p>
      </StyledCard>
    </Tooltip>
  );
  }

