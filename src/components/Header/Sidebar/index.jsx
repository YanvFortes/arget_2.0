import styled from "styled-components"
import { FaTools, FaHome } from "react-icons/fa"
import { BsFillChatDotsFill } from "react-icons/bs"

import { Link } from "react-router-dom"

const Aside = styled.aside`
    background-color: #FFFFFF;
    box-shadow: 1px 5px 10px 1px #222222;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50vh;
    margin-top: 100px;
    padding: 1em;
    transition: .4s left;
    width: 70vw;
`
const Container = styled.div`
    display: flex;
    gap: 2em;
    flex-direction: column;
`
const LinkStyled = styled(Link)`
    align-items: center;
    color: #2d709e;
    display: flex;
    font-size: 1.75rem;
    font-weight: 600;
    gap: 0.5em;
    text-decoration: none;
    text-transform: uppercase;
`
const Copyright = styled.p`
    color: #2d709e;
    font-size: .9rem;
    font-weight: 600;
    text-align: center;
`

const Sidebar = () => {
    return(
        <Aside>
            <Container>
                <LinkStyled to="/">
                    <FaHome/> 
                    Home
                </LinkStyled>
                <LinkStyled to="/servicos">
                    <FaTools/> 
                    Serviços
                </LinkStyled>
                <LinkStyled to="/contato">
                    <BsFillChatDotsFill/> 
                    Contato
                </LinkStyled>
            </Container>
            <Copyright>Arget Ar Condicionado &copy;</Copyright>
        </Aside>
    )
}

export default Sidebar