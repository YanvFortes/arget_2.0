import styled from "styled-components"

const ParagraphStyled = styled.p`
    color: ${props => props.$color ? props.$color : "#000000"};
    text-shadow: ${props => props.$shadow ? props.$shadow : "none"};
    font-size: ${props => props.$size};
    font-weight: 400;
    /* line-height: ${props => props.$lineHeight ? props.$lineHeight : ".15em"}; */
`

const Paragraph = ( {children, color, shadow, size} ) => {
    return (
        <ParagraphStyled
            $color={color}
            $shadow={shadow}
            $size={size}
        >
            {children}
        </ParagraphStyled>
    )
}

export default Paragraph