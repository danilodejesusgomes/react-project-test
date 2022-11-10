import styled from 'styled-components';
import Logo from '../Logo';

const HeaderContainer = styled.header`
    background-color: #907771;
    
`

function Header() {
    return(
        <HeaderContainer>
            <Logo></Logo>
        </HeaderContainer>
    )
}

export default Header;