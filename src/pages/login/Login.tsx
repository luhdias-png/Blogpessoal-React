import { useContext, useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import logo from "../../assets/L&L.png"

interface UsuarioLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    token: string;
}

function Login() {

    const navigate = useNavigate();

    const {usuario, handleLogin} = useContext(AuthContext);   

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    useEffect(() =>{
        if(usuario.token !==""){
            navigate('/home')
        }
    }, [usuario])

     function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }
 

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-white">
                <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col w-1/2 gap-4 rounded-2xl" >
                    <h2 className="text-slate-900 text-5xl ">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Email</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            value={usuarioLogin.usuario}
                            onChange={atualizarEstado}
                            placeholder="email@email.com"
                            className="border-2 border-slate-700 rounded p-2
                            focus:outline-none
                            focus:border-blue-400"
                            
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            value={usuarioLogin.senha}
                            onChange={atualizarEstado}
                            placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2
                            focus: outline-none
                            focus:border-blue-400"
                        />
                    </div>
                    <button 
                        type='submit' 
                        className="rounded bg-blue-400 flex justify-center
                                   hover:bg-blue-900 text-white w-1/2 py-2">
                        <span>Entrar</span>
                    </button>

                    <hr className="border-slate-800 w-full" />

                   <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-pink-500 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
                 <div className="lg:block hidden w-full min-h-screen bg-center bg-no-repeat bg-contain bg-blue-200"
                            style={{backgroundImage:`url(${logo})`}}
                >                    
                </div>
            </div>
        </>
    );
}

export default Login;