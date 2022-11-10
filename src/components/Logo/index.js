import imagelogo from '../../assets/adaptive-icon.png'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    background-color: #0B1B30;
    justfy-content: space-between;
    justify-items: center;

    height: 50px;
    width: 20%;
    
`

const TextContainer = styled.p`
    color: #907771;
`

function Logo() {
    return(
        <LogoContainer>
            <img
                src={imagelogo}
                alt='selfinanceiro'
            ></img>
            <TextContainer>Selfinanceiro</TextContainer>
        </LogoContainer>
    )
}

export default Logo;