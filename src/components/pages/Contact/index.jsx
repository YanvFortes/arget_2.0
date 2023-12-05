import styled from 'styled-components';
import { BsTelephoneFill } from "react-icons/bs"
import { RiWhatsappFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"

import ScrollToTop from "@ScrollToTop"
import Form from '@Form';
import Card from '@Card';

const ContactStyled = styled.main`
    align-items: center;
    background-color: #e6e6e6;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5em 0 0 0;

    @media (max-width: 426px) {
        gap: 2em;
        padding: 5em 0 2em 0;
    }
`
const Cards = styled.section`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    gap: 3.75em;
    padding: 2em 10em;

    @media (max-width: 1024px) {
        padding: 2em;
        gap: 2em;
    }

    @media (max-width: 768px) {
        gap: 2em;
        padding: 2em 0;
    }

    @media (max-width: 616px) {
        flex-direction: column;
    }

    @media (max-width: 426px) {
        padding: 0em;
    }
`

const Contact = () => {

    return (
        <ContactStyled>
            <ScrollToTop/>
            <Form/>
            <Cards>
                <Card
                    icon={<BsTelephoneFill/>}
                    title="Ligue para nós:"
                    contact="(51) 99975-1652"
                />
                <Card
                    icon={<RiWhatsappFill/>}
                    title="Chamar pelo WhatsApp:"
                    contact="(51) 9975-1652"
                />
                <Card
                    icon={<MdEmail/>}
                    title="Envie um e-mail para:"
                    contact="forrogerio8@gmail.com"
                />
            </Cards>
        </ContactStyled>
    )
}

export default Contact