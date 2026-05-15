import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import CardPostagem from "../../components/postagem/cardpostagem/CardPostagem"
import { AuthContext } from "../../contexts/AuthContext"
import type Postagem from "../../models/Postagem"
import { buscar } from "../../services/Service"

function Perfil() {
	const navigate = useNavigate()

	const [postagens, setPostagens] = useState<Postagem[]>([])

	const { usuario } = useContext(AuthContext)

	useEffect(() => {
		if (usuario.token === "") {
			alert("Você precisa estar logado")
			navigate("/")
		}
	}, [usuario.token])


	async function buscarPostagem() {
		try {
			await buscar('/postagens', setPostagens, {
				headers: {
					Authorization: usuario.token
				}
			})
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		buscarPostagem()
	}, [])


	return (
		<div className="flex justify-center mx-4">
			<div className="container mx-auto my-4 rounded-2xl overflow-hidden">
				<img
					className="w-full h-72 object-cover border-b-8 border-white"
					src="https://cdn.discordapp.com/attachments/1478006777130909758/1504660506697400511/image.png?ex=6a07cbcc&is=6a067a4c&hm=4b178579fad4e5ae136d41808d35793df1eca7ab6990f26b3e6ca5a624ce80a2&"
					alt="Capa do Perfil"
				/>

				<img
					className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10"
					src={usuario.foto || "https://i.imgur.com/HeIi0wU.png"}
					alt={`Foto de perfil de ${usuario.nome}`}
				/>

				<div
					className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-sky-500 rounded-b-2xl text-white text-2xl items-center justify-center"
				>
					<p>Nome: {usuario.nome} </p>
					<p>Email: {usuario.usuario}</p>
				</div>
				<div className="mt-10 px-4">

					<h2 className="bg-blue-500 text-3xl font-bold mb-6 text-center text-white w-full rounded">
						Minhas Postagens
					</h2>

					<div className="flex gap-6 w-full">

						{postagens
							.filter(
								(postagem) =>
									postagem.usuario?.id === usuario.id
							)
							.map((postagem) => (
								<CardPostagem
									key={postagem.id}
									postagem={postagem}
								/>
							))
						}

					</div>

				</div>
			</div>

		</div>
	)
}

export default Perfil
