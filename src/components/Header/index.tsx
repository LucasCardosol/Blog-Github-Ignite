import { HeaderContainer } from "../../components/Header/styled";
import logo from "../../assets/images/structure/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
    </HeaderContainer>
  );
}
