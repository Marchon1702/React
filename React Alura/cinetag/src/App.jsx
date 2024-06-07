import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
