import styled from "styled-components"
import Line from "@Line"

const AboutContainer = styled.section`
    align-items: center;
    display: flex;
    gap: 2em;
    justify-content: center;
    padding: 6em 12em;

    @media (max-width: 1024px) {
        padding: 2em 8em;
    }

    @media (max-width: 768px) {
        box-sizing: border-box;
        flex-direction: column-reverse;
        padding: 2em 4em;
    }
     
    @media (max-width: 426px) {
        padding: 2em 1em;
    }
`
const Subtitle = styled.h3`
    color: #000000;
    font-size: 1.75rem;
    font-weight: 500;
    text-align: center;

    @media (max-width: 1024px) {
        text-align: start;
        font-size: 1.5rem;
    }
    
    @media (max-width: 426px) {
        font-size: 1.25rem;
        text-align: center;
    }
`
const Paragraph = styled.p`
    color: #000000;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.25rem;

    @media (max-width: 1024px) {
        font-size: 1rem;
    }

    @media (max-width: 426px) {
        text-align: center;
    }
`
const Description = styled.div`
    align-items: start;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1em;

    @media (max-width: 426px) {
        align-items: center;
    }
`
const Image = styled.img`
    border-radius: 10px;
    box-shadow: 0 4px 8px #000000b2;
    width: 560px;

    @media (max-width: 1024px) {
        width: 420px;
    }

    @media (max-width: 768px) {
        width: 80vw;
    }

    @media (max-width: 426px) {
        width: 90vw;
    }
`

const About = () => {
    return(
        <AboutContainer>
            <Description>
                <Subtitle>Sobre a Arget Ar Condicionado</Subtitle>
                <Line margin="0.5em 0 1.5em 0" marginSide="0" width="6em"/>
                <Paragraph>
                    A mais de 20 anos a Arget Ar Condicionado vem proporcinando o melhor da climatização, 
                    visando sempre suprir as necessidades de seus clientes com excelência e maestria em 
                    nossos serviços de Projetos, Instalação de Ar Condicionado e Manutenção de sistema 
                    de ar condicionado.
                </Paragraph>
            </Description>
            <Image src="assets/Sobre.jpeg" alt="Imagem sobre"/>
        </AboutContainer>
    )
}

export default About 