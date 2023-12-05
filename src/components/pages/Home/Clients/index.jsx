import styled from "styled-components"


const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 3em 11em;
    align-items: center;
 
    @media (max-width: 768px) {
        padding: 2em;
    }

    @media (max-width: 426px) {
        padding: 1em 0;
        gap: 1em;
    }
`
const Title = styled.h3`
    font-size: 3rem;
    font-weight: 700;
    text-align: center; 

    @media (max-width: 1024px) {
        font-size: 2.5rem;
        padding: 0 2.5em;
    }
    
    @media (max-width: 768px) {
        font-size: 2.25rem;
        padding: 0 1em;
    }

    @media (max-width: 616px) {
        font-size: 2rem;
    }
    
    @media (max-width: 426px) {
        font-size: 1.75rem;
    }
`
const Paragraph = styled.p`
    align-items: center;
    display: flex;
    font-size: 1.1rem;
    justify-content: center;
    line-height: 1.5rem;
    text-align: center;
    width: 75vw;

    @media (max-width: 426px) {
        font-size: 1rem;
        line-height: 1.25rem;
        width: 80vw;
    }
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

    @media (max-width: 425px) {
        max-height: 120px;
        max-width: 120px;
    }
`

const Clients = ( {photos} ) => {

    return (
        <Container>
            <Title>Clientes</Title>
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