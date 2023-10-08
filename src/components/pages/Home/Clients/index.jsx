import Title from "../../../Title"
import styled from "styled-components"


const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 3em 11em;
`
const Paragraph = styled.p`
    align-items: center;
    display: flex;
    font-size: 1.1rem;
    justify-content: center;
    line-height: 1.5rem;
    text-align: center;
    width: 75vw;
`
const PicturesBox = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    justify-content: space-around;
`
const Picture = styled.img`
    max-height: 170px;
    max-width: 170px;
`

const Clients = ( {photos} ) => {

    return (
        <Container>
            <Title size="3rem">Clientes</Title>
            <Paragraph>
                A Arget ao longo dos anos já atendeu diversos de clientes, desde pequenas instalações e 
                manutenção a domicilio quanto a grandes projetos de infraestrutura para grandes empresas, 
                confira alguns dos clientes que já confiaram em nosso trabalho.
            </Paragraph>
            <PicturesBox>
                {photos.map(photo => (
                    <Picture 
                        key={photo.id} 
                        src={photo.path} 
                        alt={photo.name}
                    />
                ))}
            </PicturesBox>
        </Container>
    )
}

export default Clients