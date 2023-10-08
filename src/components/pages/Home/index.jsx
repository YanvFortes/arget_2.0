import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./Slide"
import styled from "styled-components";
import {Dots, DotContainer} from "./Slide/Dots"
import About from "./About"
import ContactBar from "../../ContactBar"
import Clients from "./Clients";

import pictures from "../Home/Clients/clients.json"
import React, { useState } from "react"


const SliderStyled = styled(Slider)`
    display: block;
    padding: 0;
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
            <SliderStyled {...settings}>
                <Slide
                    title="Manutenção preventiva de ar-condicionado"
                    text="Realizamos a manutenção e concerto do seu Ar Condicionado e Split"
                    img="/assets/Carrocel-1.jpg"
                />
                <Slide
                    title="Instalação de ar-condicionado e splits"
                    text="A Arget faz a sua Instalação de Ar Condicionado em Porto Alegre e toda região metropolitana"
                    img="/assets/Carrocel-2.png"
                />
                <Slide
                    title="Faça seu orçamento conosco"
                    text="Entre em contato no e-mail ou whatsapp para realizarmos um orçamento do seu desejo!"
                    img="/assets/Carrocel-3.png"
                />
            </SliderStyled>
            <About/>
            <ContactBar/>
            <Clients photos={client}/>
        </>
    )
}

export default Home