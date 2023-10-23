import { BsTelephoneFill } from "react-icons/bs"
import { RiWhatsappFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"
import styled from "styled-components"

import Button from "../Button"

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
const Href = styled.a`
    text-decoration: none;
`
const LinkStyled = styled(Link)`
    text-decoration: none;
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
                <LinkStyled to="../contato">
                    <Button color="#d51e17">
                        <MdEmail/> 
                        Solicite um orçamento agora
                    </Button>
                </LinkStyled>
                <Href target="_blank"  href="https://wa.me//555199751652?text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20para%20ar%20condicionado">
                    <Button color="#00BB2D">
                        <RiWhatsappFill/> 
                        Chamar no WhatsApp agora
                    </Button>
                </Href>
            </Box>
        </Container>
    )
}

export default ContactBar