import styled from "styled-components"
import { FaTools, FaHome } from "react-icons/fa"
import { BsFillChatDotsFill } from "react-icons/bs"

import { Link } from "react-router-dom"

const Aside = styled.aside`

    display: none;

    @media (max-width: 768px) {
        background-color: #FFFFFF;
        box-shadow: 1px 5px 10px 1px #222222;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 50vh;
        justify-content: space-between;
        left: ${props => props.$isOpen ? "0" : "-75vw"}; 
        margin-top: 80px;
        padding: 1em;
        position: fixed;
        transition: .4s left;
        width: 50vw;
        z-index: 999;
    }

    @media (max-width: 426px) {
        width: 70vw;
    }
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
const DarkOverlay = styled.div`
    display: ${props => props.$isDark ? "block" : "none"};
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998; 
`

const Sidebar = ( {isOpen, close} ) => {

    return(
        <>
            <Aside $isOpen={isOpen}>
                <Container>
                    <LinkStyled to="/" onClick={close}>
                        <FaHome/> 
                        Home
                    </LinkStyled>
                    <LinkStyled to="/servicos" onClick={close}>
                        <FaTools/> 
                        Serviços
                    </LinkStyled>
                    <LinkStyled to="/contato" onClick={close}>
                        <BsFillChatDotsFill/> 
                        Contato
                    </LinkStyled>
                </Container>
                <Copyright>Arget Ar Condicionado &copy;</Copyright>
            </Aside>
            <DarkOverlay $isDark={isOpen}/>
        </>
    )
}

export default Sidebar