import { VscAccount } from "react-icons/vsc";
import {
  HeaderContainer,
  Logo,
  LogInButton,
  HeaderColor,
  LinkStyled,
} from "./style";
import LoginPage from "../loginpage";

const Header = () => {
  return (
    <>
      <LoginPage />
      <HeaderColor>
        <HeaderContainer>
          <Logo
            src="src\assets\logo_bookfy-removebg-preview.png"
            alt="logo bookfy"
          />
          <LinkStyled to="/novo-livro">Novo Livro</LinkStyled>
          <LinkStyled to="/minha-estante">Minha Estante</LinkStyled>
          <LogInButton>
            <div>
              <VscAccount />
              Log In
            </div>
          </LogInButton>
        </HeaderContainer>
      </HeaderColor>
    </>
  );
};
export default Header;
