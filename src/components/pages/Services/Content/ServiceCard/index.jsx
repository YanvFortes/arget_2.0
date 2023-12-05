import styled from "styled-components"
import Line from "@Line"

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${props => props.$direction ? props.$direction : 'row'};
    gap: 3em;
    padding: 0 12em;

    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 0 8em;
        text-align: center;
    }

    @media (max-width: 768px) {
        padding: 0 6em;
    }

    @media (max-width: 616px) {
        padding: 0 4em;
    }

    @media (max-width: 426px) {
        padding: 0 2em;
        gap: 2em;
    }
`
const Box = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    @media (max-width: 426px) {
        gap: 1em;
    }
`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.75rem;
    }
`
const Text = styled.p`
    line-height: 1.25rem;
`
const Image = styled.img`
    border-radius: 16px;
    width: 640px;
    height: 320px;
    box-shadow: 0 4px 8px #000000b2;

    @media (max-width: 1024px) {
        height: auto;
        width: 50vw;
    }

    @media (max-width: 768px) {
        width: 60vw;
    }

    @media (max-width: 616px) {
        width: 75vw;
    }

    @media (max-width: 426px) {
        width: 90vw;
    }
`

const ServiceCard = ( {title, text, img, direction} ) => {
    return (
        <Container $direction={direction}>
            <Box>
                <Title>{title}</Title>
                <Line width="10em"/>
                <Text>{text}</Text>
            </Box>
            <Box>
                <Image src={img}/>
            </Box>
        </Container>
    )
}

export default ServiceCard