import styled from "styled-components"
import ServiceCard from "../ServiceCard"
import Line from "../../../Line"
import ContactBar from "../../../ContactBar"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    top: 80px;
    gap: 2em;
    padding: 9em 0 2em 0;
    overflow: hidden;
`

const Content = () => {
    return(
        <Container>
            <ServiceCard
                title="Instalação de Ar Condicionado"
                text="Proporcionando soluções eficientes para ambientes climatizados. Nossa equipe altamente qualificada realiza instalações precisas e sob medida, utilizando tecnologias de ponta para garantir o máximo desempenho. Priorizamos a qualidade em cada etapa do processo, desde o planejamento até a execução."
                img="/assets/Servicos-1.jpg"

            />
            <Line width="24em"/>
            <ServiceCard
                title="Manutenção de Ar Condicionado"
                text="Somos especializados em manutenção de ar-condicionado, realizando tanto manutenções preventivas quanto corretivas em sistemas de ar-condicionado, garantindo o máximo desempenho e eficiência dos equipamentos."
                img="/assets/Servicos-2.jpg"
                direction="row-reverse"
            />
            <ContactBar/>
            <ServiceCard
                title="Projetos de infraestrutura"
                text="Realizamos projetos de infraestrutura para instalação de ar condicionado. Desde a concepção até a execução, garantimos qualidade em todas as etapas. Criamos uma soluções personalizadas para seu projeto, proporcionando ambientes climatizados com eficiência e conforto garantidos."
                img="/assets/Servicos-4.jpg"
            />
            <Line width="24em"/>
            <ServiceCard
                title="Outros serviços"
                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate facere temporibus itaque, adipisci saepe odio nulla alias laudantium sunt est, cumque quam blanditiis dolor quasi minima! Minus molestias corrupti quae quisquam reiciendis!"
                img="/assets/Servicos-3.jpg"
                direction="row-reverse"
            />
        </Container>
    )
}

export default Content