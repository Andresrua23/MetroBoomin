import { Route, Routes } from "react-router-dom"
import {Home} from "../Home/Home"
import {Members} from "../Members/Members"
import{Menu} from "../shared/Menu/Menu"
import { Carrusel } from "../Carrusel/Carrusel"
import { Shop } from "../Shop/Shop"
import { Fans } from "../Fans/Fans"
import { Hook } from "../Hook/Hook"
import { Carga } from "../Hook/carga"
import { Music } from "../Music/Music"
import { Footer } from "../Footer/Footer"

export function Rutas(){
    return(
        <>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/integrantes" element={<Members />} />
            <Route path="/tienda" element={<Shop />} />
            <Route path="/fans" element={<Fans />} />
            <Route path="/hook" element={<Carga />} />
            <Route path="/musica" element={<Music />} />

        </Routes>
        <Footer/>
        
        </>

       
        
        
    )
}