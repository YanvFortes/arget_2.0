import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@local": "./",
            "@oneBack": "../",
            "@twoBack": "../../",
            "@threeBack": "../../../",
            "@GlobalStyles": "/src/components/GlobalStyles",
            "@ScrollToTop": "/src/components/ScrollToTop",
            "@ContactBar": "/src/components/ContactBar",
            "@Footer:": "/src/components/Footer",
            "@Header": "/src/components/Header",
            "@Logo": "/src/components/Header/Logo",
            "@LogoLink": "/src/components/Header/Logo/LogoLink",
            "@NavBar": "/src/components/Header/NavBar",
            "@NavLink": "/src/components/Header/NavBar/NavLink",
            "@Sidebar": "/src/components/Header/Sidebar",
            "@Button": "/src/components/Button",
            "@Title": "/src/components/Title",
            "@Line": "/src/components/Line",
            "@Home": "/src/components/pages/Home",
            "@Slide": "/src/components/pages/Home/Slide",
            "@Dots": "/src/components/pages/Home/Slide/Dots",
            "@About": "/src/components/pages/Home/About",
            "@Clients": "/src/components/pages/Home/Clients",
            "@Card": "/src/components/pages/Contact/Card",
            "@Form": "/src/components/pages/Contact/Form",
            "@Contact": "/src/components/pages/Contact",
            "@Services:": "/src/components/pages/Services",
            "@Banner": "/src/components/pages/Services/Banner",
            "@Content": "/src/components/pages/Services/Content",
            "@ServiceCard": "/src/components/pages/Services/ServiceCard",

        }
    }
})
