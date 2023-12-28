import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Slide from "@Slide"
import About from "@About"
import Clients from "@Clients";
import ContactBar from "@ContactBar";
import ScrollToTop from "@ScrollToTop";
import {Dots, DotContainer} from "@Dots";

import pictures from "../Home/Clients/clients.json";

const SliderStyled = styled(Slider)`
    display: block;
    padding: 0 0 3em 0;
    margin: 0;
    box-sizing: border-box;

    @media (max-width: 426px) {
         padding: 1em 0;
    }
`
const Title = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    text-align: center; 

    @media (max-width: 1024px) {
        font-size: 2.5rem;
        padding: 0 2.5em;
    }
    
    @media (max-width: 768px) {
        font-size: 2.25rem;
        padding: 0 1em;
    }

    @media (max-width: 616px) {
        font-size: 2rem;
    }
    
    @media (max-width: 426px) {
        font-size: 1.5rem;
        padding: 0 1em;
    }
`
const Line = styled.div`
    background: #4b5c7e;
    height: 0.25rem;
    margin: 1em 0 0 0;
    margin-left: auto;
    margin-right: auto;
    width: 24em;

    @media (max-width: 426px) {
        height: 0.25rem;
        margin: .5em auto 0 auto;
        width: 10em;
    }
    `

const Home = () => {

    const [client, setClient] = useState(pictures) 
    
    const settings = {
        autoplay: true,
        autoplaySpeed: 7500,
        dots: true,
        infinite: true,
        pauseOnHover: false,
        nextArrow: <></>,
        prevArrow: <></>,
        appendDots: dots => (
            <DotContainer>
                <ul>{dots}</ul>
            </DotContainer>
        ),
        customPaging: () => (
            <Dots/>
          )
      };

    return (
        <>  
            <ScrollToTop/>
            <SliderStyled {...settings}>
                <Slide
                    title="Manutenção preventiva de ar-condicionado"
                    text="Realizamos a manutenção e concerto do seu Ar Condicionado e Split"
                    img="/assets/Carrocel-1.jpg"
                    path="servicos"
                />
                <Slide
                    title="Instalação de ar-condicionado e splits"
                    text="A Arget faz a sua Instalação de Ar Condicionado em Porto Alegre e toda região metropolitana"
                    img="/assets/Carrocel-2.png"
                    path="servicos"
                />
                <Slide
                    title="Faça seu orçamento conosco"
                    text="Entre em contato no e-mail ou whatsapp para realizarmos um orçamento do seu desejo!"
                    img="/assets/Carrocel-3.png"
                    path="contato"
                />
            </SliderStyled>
            <Title>
                Especialista em Instalação e Manutenção de Ar Condicionado e Split
            </Title>
            <Line/>
            <About/>
            <ContactBar/>
            <Clients photos={client}/>
        </>
    )
}

export default Home