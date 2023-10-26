import styled from "styled-components"

const DotContainer = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    gap: 1em;
    justify-content: center;
    padding: 1em;

    @media (max-width: 426px) {
        display: none;
    }

    ul{
        align-items: center;
        display: flex;
        gap: .25em;
        justify-content: center;
        padding: 0 0 2.5em 0;
        
    }
`
const Dots = styled.div`
    background-color: #2d709e;
    height: 20px;
    width: 20px;
    border-radius: 64px;
    transition: all .3s;

    .slick-dots .slick-active & {
        background-color: #d51e17;
    }

    &:hover {
        background-color: #d51e17;
    }
`

export {Dots, DotContainer} 