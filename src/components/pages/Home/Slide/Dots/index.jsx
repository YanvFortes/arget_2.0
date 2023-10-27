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
        padding: 0 0 4.5em 0;
        
    }
`
const Dots = styled.div`
    background-color: #2d709e;
    border-radius: 64px;
    height: 20px;
    opacity: .8;
    transition: all .3s;
    width: 20px;

    .slick-dots .slick-active & {
        background-color: #d51e17;
    }

    &:hover {
        background-color: #d51e17;
    }
`

export {Dots, DotContainer} 