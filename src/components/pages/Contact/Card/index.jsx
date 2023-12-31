import styled from "styled-components"

const CardStyled = styled.div`
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 16px 16px 16px 64px;
    box-shadow: 0 4px 8px #000000b2;
    display: flex;
    flex-direction: column;
    height: 160px;
    justify-content: center;
    gap: 0.5em;
    padding: 3em 0;
    width: 22vw;

    @media (max-width: 1024px) {
        height: 120px;
        width: 25vw;
    }
    
    @media (max-width: 768px) {
        width: 28vw;
        height: 100px;
    }
    
    @media (max-width: 615px) {
        width: 80vw;
    }
    
    @media (max-width: 426px) {
        width: 80vw;
        height: auto;
    }
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
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 1.1rem;
    }

    @media (max-width: 768px) {
        font-size: .9rem;
        text-align: center;
    }

    @media (max-width: 426px) {
        font-size: 1.2rem;
    }
`
const Contact = styled.p`
    align-items: center;
    color: #d51e17;
    display: flex;
    flex-wrap: nowrap;
    font-size: 1.1rem;
    font-weight: 700;

    @media (max-width: 1024px) {
        font-size: .9rem;
    }

    @media (max-width: 768px) {
        font-size: .8rem;
    }

    @media (max-width: 426px) {
        font-size: 1.1rem;
    }
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