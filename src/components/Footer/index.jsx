import styled from "styled-components"
import { IoLocationSharp } from "react-icons/io5"
import { AiFillClockCircle } from "react-icons/ai"
import { BsTelephoneFill } from "react-icons/bs"
import { RiWhatsappFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"

const Container = styled.footer`
    background-color: #4b5c7e;
    padding: 1.5em 2em;
`
const FooterDesktop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        align-items: start;
        gap: 2em;
    }

    @media (max-width: 616px) {
        display: none;
    }
`
const FooterMobile = styled.div`

    display: none;

    @media (max-width: 616px) {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: .75em;
    }
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media (max-width: 615px) {
        flex-direction: row;
        gap: 5em;
    }

    @media (max-width: 426px) {
        gap: 3em;
    }
`
const Logo = styled.img`
    width: 180px;
`
const Text = styled.p`
    align-items: center;
    color: #FFFFFF;
    display: flex;
    gap: .5em;

    @media (max-width: 768px) {
        font-size: .9rem;
    }

    @media (max-width: 616px) {
        font-size: 1.25rem;
    }

    @media (max-width: 420px) {
        font-size: .9rem;
    }
`
const Title = styled.h4`
    color: #FFFFFF;
    font-size: 1.1rem;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`
const Icons = styled.p`
    color: #FFFFFF;

    @media (max-width: 616px) {
        font-size: 3rem;
    }

    @media (max-width: 426px) {
        font-size: 2rem
    }
`
const Href = styled.a`
    align-items: center;
    color: #FFFFFF;
    display: flex;
    gap: .5em;
    text-decoration: none;

    @media (max-width: 768px) {
        font-size: .9rem;
    }

    @media (max-width: 616px) {
        font-size: 1.25rem;
    }

    @media (max-width: 428px) {
        font-size: .9rem;
    }
`
const LinkStyled = styled(Link)`
    align-items: center;
    color: #FFFFFF;
    display: flex;
    gap: .5em;
    text-decoration: none;

    @media (max-width: 768px) {
        font-size: .9rem;
    }

    @media (max-width: 426px) {
        font-size: 2rem;
    }
`


const Footer = () => {
    return(
        <Container>
            <FooterDesktop>
                <Box>
                    <Logo src="/assets/Arget.svg"/>
                    <Text>Todos os direitos reservados © Arget Ar Condicionado 2023</Text>
                    <Text>CNPJ: 04.559.631/0001-04</Text>
                    <Href target="_blank" href="https://www.linkedin.com/in/yan-fortes-546455170/">Desenvolvido por Yan Fortes</Href>
                </Box>
                <Box>
                    <Title>Contato:</Title>
                    <LinkStyled to="../contato">
                        <Icons>
                            <MdEmail/> 
                        </Icons>
                        forrogerio8@gmail.com
                    </LinkStyled>
                    <Href target="_blank" href="https://wa.me//555199751652?text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20de%20ar%20condicionado">
                        <Icons>
                            <RiWhatsappFill/>
                        </Icons>
                        (51) 99975-1652
                    </Href>
                    <Text>
                        <Icons>
                            <BsTelephoneFill/>
                        </Icons>
                        (51) 3374-2297
                    </Text>
                </Box>
                <Box>
                    <Title>Endereço:</Title>
                    <Text>
                        <Icons>
                            <IoLocationSharp/>     
                        </Icons>
                        R. Lauro Müller, 618 - Navegantes, Porto Alegre - RS, 90240-130 
                    </Text>
                    <Title>Horário de Funcionamento:</Title>
                    <Text>
                        <AiFillClockCircle/>
                        Seg. - Sab. das 9:00 às 20:00
                    </Text>
                </Box>
            </FooterDesktop>

            <FooterMobile>
                <Box>
                    <LinkStyled to="../contato">
                        <Icons>
                            <MdEmail/> 
                        </Icons>
                    </LinkStyled>
                    <Href target="_blank" href="https://wa.me//555199751652?text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20de%20ar%20condicionado">
                        <Icons>
                            <RiWhatsappFill/>
                        </Icons>
                    </Href>
                </Box>
                <Text>Arget Ar Condicionado 2023 &copy;</Text>
                <Href target="_blank" href="https://www.linkedin.com/in/yan-fortes-546455170/">Desenvolvido por Yan Fortes</Href>
            </FooterMobile>
        </Container>
    )
}

export default Footer