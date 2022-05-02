import { Search } from "../SearchBox"
import { UserMenu } from "../UserMenu"
import { StyledHeaderContainer } from "./styles"

export const HeaderContainer = () => {
  return(
    <StyledHeaderContainer>
      <Search />
      <UserMenu />
    </StyledHeaderContainer>
  )
}