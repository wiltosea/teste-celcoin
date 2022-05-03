import { Icon } from "@iconify/react";
import { Indicador, StyledCard, Container } from "./styles";
import Tippy from '@tippyjs/react';

interface CardsPacientesProps {
  icon:string, 
  title: string,
  desc: string,
  kpi?: string,
  iconColor?: string,
  titleToolTip: string,
  valueToolTip: string | number,
  canceled?: boolean,
  negative?: boolean,
}

export const CardsPacientes = ({icon, title, desc, kpi, iconColor, titleToolTip,valueToolTip, canceled, negative }:CardsPacientesProps) => {
  
  return (
      <Tippy content={<><div className='title-tooltip'>{titleToolTip}</div><div className="value-tooltip">{valueToolTip}</div></>} className={canceled?'canceled':''}>
          <Container>
            <StyledCard
              title={<Icon icon={icon} width={40} color={iconColor}/> }
              extra={<Indicador className={negative?'negative':''}>{kpi}</Indicador> }>
              <p className="card-title">{title}</p>
              <p className="description">{desc}</p>
            </StyledCard>
            <div className="box"></div>
        </Container>
      </Tippy>
  );
  }

