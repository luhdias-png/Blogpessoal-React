import { useContext } from "react"
import ListaPostagens from "../../components/postagem/listapostagens/Listapostagem"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"
import { AuthContext } from "../../contexts/AuthContext"

function Home() {

    const { usuario } = useContext(AuthContext)


    return (
        <>
            <div className="
                bg-blue-300
                flex justify-center
                min-h-[6vh] w-full py-10
            ">

                <div className="
                    container mx-auto px-4
                    flex flex-col md:flex-row
                    items-center justify-start
                    gap-50
                ">

                    <div className="flex justify-start">
                        <img
                            src={usuario.foto || "https://i.imgur.com/HeIi0wU.png"}
                            alt="Imagem usuario"
                            className="
                                w-40 sm:w-52 lg:w-72
                                opacity-80
                                drop-shadow-xl
                                rounded-2xl
                                border-r-b-5
                            "
                        />
                    </div>

                    <div className="
                        flex flex-col
                        items-center
                        justify-center
                        gap-5
                        text-center
                        text-white
                    ">


                        <h2 className="
                            text-3xl sm:text-4xl md:text-5xl
                            font-bold
                            drop-shadow-md
                        ">
                            Seja Bem Vindo! {usuario.nome.charAt(0).toUpperCase() + usuario.nome.slice(1)}
                        </h2>

                        <p className="
                            text-base sm:text-lg md:text-xl
                            text-white
                        ">
                            Expresse aqui seus pensamentos e opiniões
                        </p>

                        <div>
                            <ModalPostagem />
                        </div>

                    </div>

                </div>
            </div>

            <ListaPostagens />
        </>
    )
}

export default Home