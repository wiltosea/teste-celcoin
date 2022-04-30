import { Container, StyledIcon, StyledIconNotification, UserContextMenu } from "./styles";

export const UserMenu = () => {
  return (
    <Container>
      <StyledIcon icon="ic-baseline-settings" width={20}/>
      {/* TODO - colocar badge de notificação no icone abaixo  */}
      <StyledIconNotification icon="ic-baseline-notifications" width={20}/>
      {/* TODO - Criar menu de contexto vertical ao clicar no item abaixo */}
      <UserContextMenu>
        <span>Olá, <strong>Wilson</strong></span>
        <img src="https://avatars.githubusercontent.com/u/8813872" alt=""/>
      </UserContextMenu>
      <StyledIcon icon="healthicons:ui-menu-grid" width={26}/>
  </Container>
  );
};