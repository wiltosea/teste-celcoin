import { Container, StyledIcon, StyledIconNotification, UserContextMenu } from "./styles";
import { Icon } from "@iconify/react";


export const UserMenu = () => {
  return (
    <Container>
      <StyledIcon icon="ic-baseline-settings" width={20}/>
      <StyledIconNotification icon="ic-baseline-notifications" width={20}/>
      <UserContextMenu>
        <span>Olá, <strong>Wilson</strong></span>
        <img src="https://avatars.githubusercontent.com/u/8813872" alt=""/>
      </UserContextMenu>
      <StyledIcon icon="healthicons:ui-menu-grid" width={26}/>
  </Container>
  );
};

{/* TODO - colocar badge de notificação no icone abaixo  TODO - Criar menu de contexto vertical ao clicar no item abaixo */}
      