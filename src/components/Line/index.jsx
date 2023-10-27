import styled from "styled-components"

const LineStyled = styled.div`
    width: ${props => props.$width};
    height: 0.25rem;
    background: #4b5c7e;
    margin: ${props => props.$margin ? props.$margin : "1em 0"};
    margin-left: ${props => props.$marginSide ? props.$marginSide : "auto"};
    margin-right: ${props => props.$marginSide ? props.$marginSide : "auto"}; 

    @media (max-width: 426px) {
        display: ${props => props.$mobile ? props.$mobile : "inline"};
        width: 8em;
        margin: auto;
    }
`

const Line = ( {margin, marginSide, width, mobile} ) => {
    return <LineStyled 
        $width={width}
        $margin={margin}
        $marginSide={marginSide}
        $mobile={mobile}
    />
}

export default Line