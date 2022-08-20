import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth"

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext )
    const { pathname, search } = useLocation() // Obtener el path

    const lastPath = pathname + search  // * guardamos el ultimo path visitado
    localStorage.setItem('lastPath', lastPath)

    return ( logged )
        ? children
        : <Navigate to="/login" />
}
