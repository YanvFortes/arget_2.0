import styled from "styled-components"

const CardStyled = styled.div`
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 16px 16px 16px 64px;
    box-shadow: 0 4px 8px #000000b2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5em;
    padding: 3em 0;
    width: 22vw;
`
const Icon = styled.p`
    color: #d51e17;
    font-size: 3rem;
`
const Title = styled.h4`
    color: #000000;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5em 0;
`
const Contact = styled.p`
    align-items: center;
    color: #d51e17;
    display: flex;
    flex-wrap: nowrap;
    font-size: 1.1rem;
    font-weight: 700;
`

const Card = ( {icon, title, contact} ) => {
    return(
        <CardStyled>
            <Icon>{icon}</Icon>
            <Title>{title}</Title>
            <Contact>{contact}</Contact>
        </CardStyled>
    )
}

export default Card