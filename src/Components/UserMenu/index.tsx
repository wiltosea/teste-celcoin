import { Container, StyledIcon, UserContextMenu } from "./styles";
import { Menu, Dropdown } from 'antd';
import {Icon} from '@iconify/react';

export const UserMenu = () => {

  
  return (
    <Container>
      <StyledIcon icon="ic-baseline-settings" width={20}/>
      <div className="notification"><StyledIcon icon="ic-baseline-notifications" width={20}/></div>
      <Dropdown overlay={
        <Menu>
          <Menu.Item key="minhaConta">
            Minha Conta
          </Menu.Item>
          <Menu.Item key="configuracoes">
            Configurações
          </Menu.Item>
          <Menu.Item key="sair">
            <div className="botao-sair"><Icon icon="heroicons-outline:logout" width={16}/>Sair</div>
          </Menu.Item>
        </Menu>}>
        <UserContextMenu>
          <span>Olá, <strong>Wilson</strong></span>
          <img src="https://avatars.githubusercontent.com/u/8813872" alt=""/>
        </UserContextMenu>
      </Dropdown>
      <StyledIcon icon="healthicons:ui-menu-grid" width={26}/>
  </Container>
  );
};

{/* TODO - colocar badge de notificação no icone abaixo  TODO - Criar menu de contexto vertical ao clicar no item abaixo */}
      