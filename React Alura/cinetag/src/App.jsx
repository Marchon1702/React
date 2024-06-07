import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";
import PaginaBase from "./pages/PaginaBase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Home />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
