import { BrowserRouter, Route, Routes } from "react-router-dom"

import GlobalStyles from "./components/GlobalStyles"
import Home from "./components/pages/Home"
import Servicos from "./components/pages/Services"
import Contato from "./components/pages/Contact"
import Header from "./components/Header"

const AppRoute = () => {
    return (  
        <BrowserRouter>
            <GlobalStyles/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="servicos" element={<Servicos/>}/>
                <Route path="contato" element={<Contato/>}/>
            </Routes>
        </BrowserRouter>

)
}

export default AppRoute
