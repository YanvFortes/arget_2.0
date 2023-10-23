import styled from "styled-components"
import Line from "@Line"

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${props => props.$direction ? props.$direction : 'row'};
    gap: 3em;
    padding: 0 12em;
    `

const Box = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`

const Title = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
`

const Text = styled.p`
    line-height: 1.25rem;
`

const Image = styled.img`
    border-radius: 16px;
    width: 640px;
    box-shadow: 0 4px 8px #000000b2;;
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