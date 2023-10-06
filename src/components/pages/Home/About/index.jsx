import styled from "styled-components"
import Line from "../../../Line"
import Title from "../../../Title"

const AboutContainer = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 3em;
    justify-content: center;
    padding: 3em 10em;
`
const AboutCard = styled.div`
    align-items: center;
    display: flex;
    gap: 2em;
    justify-content: center;
`
const Subtitle = styled.h3`
    color: #000000;
    font-size: 1.75rem;
    font-weight: 500;
    text-align: center;
`
const Paragraph = styled.p`
    color: #000000;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.25rem;
`
const Description = styled.div`
    align-items: start;
    display: flex;
    flex-direction: column;
    justify-content: start;
`
const Image = styled.img`
    border-radius: 10px;
    box-shadow: 0 4px 8px #000000b2;
    width: 560px;
`

const About = () => {
    return(
        <AboutContainer>
            <Title size="3rem" weight="700">
                Especialista em Instalação e Manutenção de Ar Condicionado e Split
            </Title>
            <Line margin="-2em 0 1em 0" width="24em"/>
            <AboutCard>
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
            </AboutCard>
        </AboutContainer>
    )
}

export default About 