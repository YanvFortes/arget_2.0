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
    padding-top: 80px;
`
const Cards = styled.section`
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 4em;
    padding: 2em 12em;

    @media (max-width: 426px) {
        padding: 0em;
        flex-direction: column;
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