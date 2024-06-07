import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { FavoritosProvider } from "../../contexts/FavoritosContext";

export default function PaginaBase() {
  return (
    <FavoritosProvider>
      <Header />
      <Outlet />
      <Footer />
    </FavoritosProvider>
  );
}
