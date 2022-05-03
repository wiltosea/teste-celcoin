import { Icon } from "@iconify/react";
import { Typography} from 'antd'
import { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Indicador, StyledCard } from "./styles";


interface CardsPacientesProps {
  icon:string, 
  title: string,
  desc: string,
  kpi?: string,
  iconColor?: string,
  titleToolTip: string,
  valueToolTip: string | number,
  negative?: boolean,
}

export const CardsPacientes = ({icon, title, desc, kpi, iconColor, titleToolTip,valueToolTip, negative }:CardsPacientesProps) => {
  
  return (
    
      <StyledCard
      title={<Icon icon={icon} width={40} color={iconColor}/> }
      extra={<Indicador>{kpi}</Indicador> }
      data-tip={`${titleToolTip}<br>${valueToolTip}`}
      >
        <p className="card-title">{title}</p>
        <p className="description">{desc}</p>
        <ReactTooltip
          effect="solid"
          multiline={true}
          offset={{top: -45, left: -75}}
          arrowColor={'transparent'}
          className={`tooltip ${negative ? "negative" : ""}`}
          />
      </StyledCard>
      
  );
  }

