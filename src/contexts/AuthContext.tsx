import { createContext, useState, type ReactNode } from "react"
import type UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import { Bounce, toast } from "react-toastify"


interface AuthContextData {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps{
    children: ReactNode
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
)


export function AuthProvider({children} : AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({

        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""

    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario)
            toast.success("Usuario logado com sucesso!",{
                position:"top-right",
                autoClose: 5000,
                theme:"colored",
                transition:Bounce
            }
                
            )
        } catch (error) {
           toast.error('Erro ao logar usuário!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
        }
        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

     return (
        <AuthContext.Provider value={{usuario, handleLogout, handleLogin, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
 
}