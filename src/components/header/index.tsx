import { VscAccount } from "react-icons/vsc";
import { HeaderContainer, Logo, Link, LogInButton, HeaderColor } from "./style";

const Header = () =>{
  return(
    <HeaderColor>
      <HeaderContainer>      
        <Logo src="src\assets\logo_bookfy-removebg-preview.png" alt="logo bookfy" />
        <Link href="#">Novo Livro</Link>
        <Link href="#">Minha Estante</Link>
        <LogInButton>
          <div>
            <VscAccount style={{backgroundColor: '#F6D133'}} />Log In
        </div>
        </LogInButton>
      </HeaderContainer>

    </HeaderColor>
  )
}
export default Header