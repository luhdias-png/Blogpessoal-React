import React, { useContext, useEffect, useState, type ChangeEvent} from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Tema from "../../../models/Tema";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { Bounce, toast } from "react-toastify";




function FormTema() {

    const navigate = useNavigate();

    const [tema, setTema] = useState<Tema>({}as Tema)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {usuario, handleLogout} = useContext(AuthContext)
    const token = usuario.token

    const {id} = useParams<{ id: string}>();

    async function buscarPorId(id:string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers:{Authorization: token}
            })
        }catch (error:any) {
            if(error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(()=>{
        if(token ===''){
            toast.error('Você precisa estar logado!', {
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
    },[token])

    useEffect(()=>{
        if (id !== undefined) {
            buscarPorId(id)
        }
    },[id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    function retornar(){
        navigate("/temas")
    }

    async function gerarNovoTema(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        setIsLoading(true)

        if(id !== undefined) {
            try{
                await atualizar(`temas`, tema, setTema,{
                    headers: {Authorization: token}
                })
                toast.success('Tema atualizado com sucesso!', {
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
            }catch (error:any){
                if(error.toString().includes('401')){
                    handleLogout();
                }else{
                    toast.error('Erro ao atualizar o tema!', {
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

            }
        }else{
            try{
                await cadastrar(`temas`, tema, setTema,{
                    headers: {'Authorization':token}
                })
                toast.success('Tema cadastrado com sucesso!', {
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
            }catch(error:any){
                if(error.toString().includes('401')){
                    handleLogout();
                }else{
                    toast.error('Erro ao cadastrar temas.', {
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
            }
        }
        setIsLoading(false)
        retornar()
    }


    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Tema' : 'Editar Tema'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4"
                onSubmit={gerarNovoTema}>
                
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descricao do Tema</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu tema"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={tema.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />                
                </div>
                <button className="rounded text-slate-100 bg-blue-400 hover:bg-blue-800 w-1/2 py-2 mx-auto flex justify-center" type="submit">
                    {isLoading? <ClipLoader color="#ffffff" size={24}/> : <span>{id === undefined ? 'Cadastrar' : 'atualizar'}</span>}
                </button>
            </form>
        </div>
    );
}

export default FormTema;