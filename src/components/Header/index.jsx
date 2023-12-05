import React, { useState } from "react"
import styled from "styled-components"
import { HiMenu } from "react-icons/hi"

import Logo from "@Logo"
import NavBar from "@NavBar"
import Sidebar from "@Sidebar"

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
    width: 100%;
    z-index: 999;

    @media (max-width: 768px) {
        box-sizing: border-box;
        gap: 0;
        justify-content: space-between;
        padding: .5em;
    }
`
const MenuBtn = styled.button`
    display: none;

    @media (max-width: 768px) {
        align-items: center;
        border: none;
        background-color: transparent;
        color: #2d709e;
        display: flex;
        justify-content: center;
        font-size: 3rem;
    }

    @media (max-width: 426px) {
        font-size: 2.5rem;
    }
`

const Header = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeMenu = () => setSidebarOpen(false);
    const scroll = () => window.scrollTo(0, 0);

    return(
        <>
            <HeaderStyled>
                <Logo/>
                <NavBar/>
                <MenuBtn onClick={toggleSidebar}>
                    <HiMenu/>
                </MenuBtn>
            </HeaderStyled>
            <Sidebar 
                isOpen={sidebarOpen}
                close={() => {closeMenu(); scroll();}}
            />
        </>
    )
}

export default Header