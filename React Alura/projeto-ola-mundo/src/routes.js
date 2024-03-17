import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Pages/Inicio"
import SobreMim from "./Pages/SobreMim"
import Menu from "./components/Menu"
import Footer from "components/Footer"
import PaginaPadrao from "components/PaginaPadrao"
import Post from "Pages/Post"
import NotFound from "Pages/NotFound"

function AppRoutes() {
  // Esta era a pasta app, porém como uma boa prativa do mercado em trabalhar com rotas está pasta se tornou rputes.js importand o componente AppRoutes
  return (
    <BrowserRouter>
      <Menu />

      {/* Browser Router é uma importação padrão de React-Router-Dom*/}
      <Routes> {/* É o roteador que mostra a rota na tela*/}

        {/*Pagina padrao é um componente q esta sendo renderizado em mais de uma rota então usando o Outlet no component PaginaPadrao tornamos oque esta dentro dele seus filhos. Obs: Quando criamos o component pai onde neste caso por padrão ele tem a rota "/" e o Inicio tem o mesmo caminho, então adicionamos o atributo index para adicionar isso. */}
        <Route path="/" element={<PaginaPadrao />}>
          {/* Route é cada rota que criamos, designando o caminho e outros atributos*/}
          <Route index element={<Inicio />} />
          {/*Não precisamos adicionar mais o /sobremim pois ele esta dentro da rota pai que ja é / */}
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        {/*Este * foi colocado para evitar problema futuros de rotas alinhadas. */}
        <Route path="post/:id*" element={<Post/>}/>
        {/*Criando renderização para páginas não encontradas*/}
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default AppRoutes
