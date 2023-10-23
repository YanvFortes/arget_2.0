import styled from "styled-components"

import Logo from "@Logo"
import NavBar from "@NavBar"

const HeaderStyled = styled.header`
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 1px 1px 10px 1px #00000090;
    display: flex;
    gap: 12em;
    height: 80px;
    justify-content: space-around;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 999;
`

const Header = () => {
    return(
        <HeaderStyled>
            <Logo/>
            <NavBar/>
        </HeaderStyled>
    )
}

export default Header