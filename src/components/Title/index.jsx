import styled from "styled-components"

const TitleStyled = styled.h2`
    color: ${props => props.$color ? props.$color : "#000000"};
    font-size: ${props => props.$size};
    font-weight: ${props => props.$weight};
    text-align: ${props => props.$align ? props.$align : "center"};
`

const Title = ( {align, children, color, size, weight} ) => {
    return (
        <TitleStyled
            $color={color}
            $size={size}
            $weight={weight}
            $align={align}
        >
            {children}
        </TitleStyled>
    )
}

export default Title