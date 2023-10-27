import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Slide from "@Slide"
import Line from "@Line"
import About from "@About"
import Title from "@Title"
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
            <Title size="3rem" weight="700">
                Especialista em Instalação e Manutenção de Ar Condicionado e Split
            </Title>
            <Line margin="1em 0 0 0" width="24em"/>
            <About/>
            <ContactBar/>
            <Clients photos={client}/>
        </>
    )
}

export default Home