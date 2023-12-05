import styled from "styled-components"

const Background = styled.div`
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
const Title = styled.h1`
    color: #FFFFFF;
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    text-shadow: 2px 2px #000000b2;

    @media (max-width: 426px) {
        font-size: 2.5rem;
    }
`

const Banner = () => {
    return (
        <Background>
                <Title> Serviços </Title>
        </Background>
    )
}

export default Banner