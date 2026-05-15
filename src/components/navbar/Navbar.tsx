import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast, Bounce } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";
 
function Navbar() {
 
    const navigate = useNavigate();
 
    const { usuario, handleLogout } = useContext(AuthContext)
 
    function logout() {
 
        handleLogout()
        toast.success('Usuario foi desconectado com sucesso!', {
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
        navigate('/')
    }

    let component: ReactNode

    if(usuario.token !==""){

        component  = (

            <div className='w-full flex justify-center py-4
                           bg-gradient-to-t from-blue-400 to-blue-800 text-white'>
           
                <div className="container flex justify-between text-lg mx-8">
                    <Link to='/home' className="hover:underline text-2xl font-bold">Blog Pessoal</Link>
                    
 
                    <div className='flex gap-5'>
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastrartema' className="hover:underline">Cadastrar tema</Link>
                        <Link to='/perfil' className='hover:underline'>Perfil</Link>
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        )
    }

 
    return (
        <>
        {component}
        </>
    )
}
 
export default Navbar