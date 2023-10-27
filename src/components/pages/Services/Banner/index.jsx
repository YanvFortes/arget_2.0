import styled from "styled-components"
import Title from "@Title"

const BannerStyled = styled.div`
    top: 80px;
    align-items: center;
    background: url('assets/banner-servicos.png') no-repeat 75% 25%; 
    display: flex;
    justify-content: center;
    padding: 8em;
    position: relative;

    @media (max-width: 426px) {
        background-size: cover;
        padding: 6em;
    }
`

const Banner = () => {
    return (
        <BannerStyled>
                <Title 
                    align="center"
                    size="3rem"
                    color="#FFFFFF"
                    shadow="2px 2px #000000b2"
                >
                    Serviços
                </Title>
        </BannerStyled>
    )
}

export default Banner