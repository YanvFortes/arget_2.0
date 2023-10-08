import styled from "styled-components"
import Button from "../Button"
import { BsTelephoneFill } from "react-icons/bs"
import { RiWhatsappFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"


const Container = styled.section`
    align-items: center;
    background-color: #2d709e;
    display: flex;
    justify-content: space-between;
    padding: 2em 10em;
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`
const Subtitle = styled.h4`
    color: #FFFFFF;
    font-size: 1.75rem;
    font-weight: 600;
    text-shadow: 2px 2px #000000b2;
`
const PhoneNumber = styled.p`
    align-items: center;
    color: #FFFFFF;
    display: flex;
    font-size: 1.25rem;
    gap: .5em;
    text-shadow: 2px 2px #000000b2;
`

const ContactBar = () => {
    return (
        <Container>
            <Box>
                <Subtitle>Entre em contato conosco</Subtitle>
                <PhoneNumber>
                    <BsTelephoneFill/>
                    (51) 3374-2297
                </PhoneNumber>
                <PhoneNumber>
                    <RiWhatsappFill/>
                    (51) 99975-1652
                </PhoneNumber>
            </Box>
            <Box>
                <Button color="#d51e17">
                    <MdEmail/> 
                    Solicite um orçamento agora
                </Button>
                <Button color="#00BB2D">
                    <RiWhatsappFill/> 
                    Chamar no WhatsApp agora
                </Button>
            </Box>
        </Container>
    )
}

export default ContactBar