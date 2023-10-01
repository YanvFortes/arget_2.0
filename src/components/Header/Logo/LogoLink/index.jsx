import { Link } from "react-router-dom"
import styled from "styled-components"

const LogoStyled = styled.img`
    height: 60px;
`

const LogoLink = ({path, logo}) => {
    return(
        <Link to={path}>
            <LogoStyled src={logo} alt="Logo Arget"/>
        </Link>
    )
}

export default LogoLink