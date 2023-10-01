import { BrowserRouter, Route, Routes } from "react-router-dom"

import GlobalStyles from "./components/GlobalStyles"
import Home from "./components/pages/Home"
import Servicos from "./components/pages/Servicos"
import Contato from "./components/pages/Contato"
import Header from "./components/Header"
import Slide from "./components/pages/Home/Slide"

const AppRoute = () => {
    return (  
        <BrowserRouter>
            <GlobalStyles/>
            <Header/>
            {/* <Slide
                title="Instalação de ar-condicionado e splits"
                text="A Arget faz a sua Instalação de Ar Condicionado em Porto Alegre e toda região metropolitana"
                img="/assets/Carrocel-2.jpg"
            /> */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="servicos" element={<Servicos/>}/>
                <Route path="contato" element={<Contato/>}/>
            </Routes>
        </BrowserRouter>

)
}

export default AppRoute
