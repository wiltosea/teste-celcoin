import { Icon } from "@iconify/react";
import { Typography} from 'antd'
import { useState } from "react";
import ReactTooltip from "react-tooltip";
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
  negative?: boolean,
}

export const CardsPacientes = ({icon, title, desc, kpi, iconColor, titleToolTip,valueToolTip, negative }:CardsPacientesProps) => {
  

  const [show, setShow] = useState(false);
  
  return (
    <div data-tip={`${titleToolTip}<br>${valueToolTip}`}>
      <StyledCard
      title={<Icon icon={icon} width={40} color={iconColor}/> }
      extra={<Indicador>{kpi}</Indicador> }
      >
        
        <ReactTooltip
          effect="solid"
          multiline={true}
          offset={{top: -45, left: -75}}
          arrowColor={'transparent'}
          className={`tooltip ${negative ? "negative" : ""}`}
          />
        
        <p className="card-title">{title}</p>
        <p className="description">{desc}</p>
      </StyledCard>
      </div>
  );
  }

