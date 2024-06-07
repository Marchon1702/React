import { useContext } from "react"
import { FavoritosContext } from "../contexts/FavoritosContext"

export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext)

    const adicionarFavorito = (novoFavorito) => {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let listaNova = [...favorito]

        if (!favoritoRepetido) {
            listaNova.push(novoFavorito)
            return setFavorito(listaNova)
        }

        listaNova = listaNova.filter(item => item.id !== novoFavorito.id)
        return setFavorito(listaNova)
    }

    return {
        favorito,
        adicionarFavorito
    }
}

