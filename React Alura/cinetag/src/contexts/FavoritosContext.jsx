import { useState, createContext } from "react";

export const FavoritosContext = createContext()
FavoritosContext.displayName= 'Favoritos'

export const FavoritosProvider = ({children}) => {

    const [favorito, setFavorito] = useState([])

    return (
        <FavoritosContext.Provider value={{favorito, setFavorito}}>
            {children}
        </FavoritosContext.Provider>
    )
 }