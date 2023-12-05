import { BsTelephoneFill } from "react-icons/bs"
import { RiWhatsappFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.section`
    align-items: center;
    background-color: #2d709e;
    display: flex;
    justify-content: space-between;
    padding: 2em 12em;

    @media (max-width: 1024px) {
        padding: 2em 8em;
    }

    @media (max-width: 768px){
        gap: 2em;
        padding: 2em 3em;
    }
    
    @media (max-width: 616px) {
        flex-direction: column;
        padding: 1em;
    }
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
const Button = styled.button`
    align-items: center;
    background-color: ${props => props.$color ? props.$color : "#000000"};
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 600;
    gap: .5em;
    padding: .5em;
    transition: .6s ease;
    width: 22vw;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 1024px) {
        width: 33vw;
    }

    @media (max-width: 768px) {
        width: 40vw;
        font-size: 1.1rem;
    }

    @media (max-width: 616px) {
        width: 60vw;
    }

    @media (max-width: 426px) {
        width: 90vw;

    }
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
                    <Button $color="#d51e17">
                        <MdEmail/> 
                        Solicite um orçamento agora
                    </Button>
                </LinkStyled>
                <Href target="_blank"  href="https://wa.me//555199751652?text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20para%20ar%20condicionado">
                    <Button $color="#00BB2D">
                        <RiWhatsappFill/> 
                        Chamar no WhatsApp agora
                    </Button>
                </Href>
            </Box>
        </Container>
    )
}

export default ContactBar