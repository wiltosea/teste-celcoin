import { useLocation } from "react-router-dom";
import { ItemMenu } from "./ItemMenu";
import { Container, MenuList } from "./styles";


export const MenuMain = () => {
  const location = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split("/");

  return (
    <Container>
          <MenuList>
            <ItemMenu
              className={splitLocation[1] === "" ? "active" : ""}
              icon="ant-design:home-outlined"
              url="/"
              title="Dashboard"
            />
            <ItemMenu
              className={splitLocation[1] === "pacientes" ? "active" : ""}
              icon="gridicons:product-downloadable"
              url="/pacientes"
              title="Pacientes"
            />
            <ItemMenu
              className={splitLocation[1] === "testes" ? "active" : ""}
              icon="gridicons:product-downloadable"
              url="/testes"
              title="Testes"
            />
            <ItemMenu
              className={splitLocation[1] === "configuracoes" ? "active" : ""}
              icon="gridicons:product-downloadable"
              url="/configuracoes"
              title="Configurações"
            />
{/* 
            <ItemMenu icon="fa fa-home" url="/" title="Home"/>
            <ItemMenu icon="fa fa-box" url="/pacientes" title="Pacientes"/>
            <ItemMenu icon="" url="/" title="Testes"/>
            <ItemMenu icon="" url="/" title="Configurações"/> */}
          </MenuList>
    </Container>
  );
};
