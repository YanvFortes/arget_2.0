import styled from "styled-components"
import { IoLocationSharp } from "react-icons/io5"
import { AiFillClockCircle } from "react-icons/ai"
import { BsTelephoneFill } from "react-icons/bs"
import { RiWhatsappFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"

const FooterStyled = styled.footer`
    background-color: #4b5c7e;
    padding: 1.5em 2em;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`
const Logo = styled.img`
    width: 180px;
`
const Text = styled.p`
    align-items: center;
    color: #FFFFFF;
    display: flex;
    gap: .5em;

`
const Title = styled.h4`
    color: #FFFFFF;
    font-size: 1.1rem;
    font-weight: 700;
`


const Footer = () => {
    return(
        <FooterStyled>
            <Container>
                <Box>
                    <Logo src="/assets/Arget.svg"/>
                    <Text>Todos os direitos reservados © Arget Ar Condicionado 2023</Text>
                    <Text>CNPJ: 04.559.631/0001-04</Text>
                    <Text>Desenvolvido por Yan Fortes</Text>
                </Box>
                <Box>
                    <Title>Contato:</Title>
                    <Text>
                        <MdEmail/> 
                        forrogerio8@gmail.com
                    </Text>
                    <Text>
                        <RiWhatsappFill/>
                        (51) 99975-1652
                    </Text>
                    <Text>
                        <BsTelephoneFill/>
                        (51) 3374-2297
                    </Text>
                </Box>
                <Box>
                    <Title>Endereço:</Title>
                    <Text>
                        <IoLocationSharp/>
                        R. Lauro Müller, 618 - Navegantes, Porto Alegre - RS, 90240-130 
                    </Text>
                    <Title>Horário de Funcionamento:</Title>
                    <Text>
                        <AiFillClockCircle/>
                        Seg. - Sab. das 9:00 às 20:00
                    </Text>
                </Box>
            </Container>
        </FooterStyled>
    )
}

export default Footer