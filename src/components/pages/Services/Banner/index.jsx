import styled from "styled-components"
import Title from "../../../Title"

const Container = styled.div`
    position: relative;
    top: 80px;
`

const BannerStyled = styled.img`
    align-items: center;
    display: flex;
    height: 360px;
    filter: brightness(30%);
    object-fit: cover;
    position: relative;
    width: 100vw;
`
const TitleStyled = styled(Title)`
    align-items: center;
    display: flex;
    justify-content: center;
    position: absolute;
    float: left;

`

const Banner = () => {
    return (

        <BannerStyled src="assets/Carrocel-1.jpg">
            <TitleStyled 
                align="center"
                size="3rem"
                color="#FFFFFF"
                shadow="2px 2px #000000b2"
            >
                Serviços
            </TitleStyled>
        </BannerStyled>
    )
}

export default Banner