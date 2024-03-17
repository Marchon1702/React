import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao () {
    return (
        <main>
            <Banner/>

            <Outlet/>
            {/* Outlet é um recurso do rect-router-dom para que possamos importar componentes iguais em rotas diferentes... continua em routes*/}
        </main>
    )
}