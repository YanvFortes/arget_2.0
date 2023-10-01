import { Link } from "react-router-dom"
import styled from "styled-components"

const LinkStyled = styled.span`
    background-color: #FFFFFF;
    border: none;
    color: #2d709e;
    cursor: pointer;
    display: inline-block;
    font-size: 1.25rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: 1px 1px 3px #00000030;
    transition: .5s all;

    &:hover {
        transform: scale(1.1);

    }
`

const NavLink = ( {path, children} ) => {
    return(
        <Link to={path}>
            <LinkStyled>
                {children}
            </LinkStyled>
        </Link>
    )
}

export default NavLink