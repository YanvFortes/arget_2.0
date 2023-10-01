import styled from "styled-components"
import { BiSolidRightArrow } from "react-icons/bi"
import Button from "../../../Button"

const Container = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    position: relative;
    transition: transform .5s;
    top: 80px;
    width: 100vw;
`
const BackgroundImage = styled.img`
    height: 100%;
    object-fit: cover;
    filter: brightness(30%);
    width: 100%;
`
const Description = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2em;
    height: 100%;
    justify-content: center;
    position: absolute;
    text-align: center;
    width: 35vw;
`
const Title = styled.h2`
    color: #FFFFFF;
    font-size: 2rem;
    text-shadow: 2px 2px #000000b2;
    text-transform: uppercase;
`
const Text = styled.p`
    color: #FFFFFF;
    font-size: 1.25rem;
    text-shadow: 2px 2px #000000b2;
`

const Slide = ( {title, text, img, } ) => {
    return(
        <Container>
            <BackgroundImage src={img}/>
            <Description>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <Button
                    color="#2d709e"
                    hover="#d51e17"
                >
                    Sabia Mais <BiSolidRightArrow/>
                </Button>
            </Description>
        </Container>
    )
}

export default Slide