import styled from "styled-components" 

import NavLink from "@NavLink"

const Nav = styled.nav`
    display: flex;
    gap: 2em;
`

const NavBar = () => {
    return(
        <Nav>
            <NavLink path={"/"}>Home</NavLink>
            <NavLink path={"/servicos"}>Serviços</NavLink>
            <NavLink path={"/contato"}>Contato</NavLink>
        </Nav>
    )
}

export default NavBar