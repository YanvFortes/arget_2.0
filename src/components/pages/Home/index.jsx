import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide"

const Home = () => {
    const settings = {
        autoPlay: true,
        autoPlaySpeed: 7500,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <Slider {...settings}>
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
        </Slider>
    )
}

export default Home