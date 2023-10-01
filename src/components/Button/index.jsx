import styled from "styled-components"

const ButtonStyled = styled.button`
    align-items: center;
    background-color: ${props => props.$backgroundColor ? props.$backgroundColor : `#2d709e`};
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    gap: .5em;
    padding: .5em .75em;
    transition: .7s ease;

    &:hover {
        background-color: ${props => props.$backgroundHover ? props.$backgroundHover : `#2d709e`};
        transform: scale(1.1);
    }
`

const Button = ({children, color, hover}) => {
    return (
        <ButtonStyled 
            $backgroundColor={color}
            $backgroundHover={hover}
        >
            {children}
        </ButtonStyled>
    )
}

export default Button 