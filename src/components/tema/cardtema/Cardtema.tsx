import { Link } from 'react-router-dom';
import type Tema from '../../../models/Tema';


interface CardTemaProps{
    tema: Tema
}

function CardTema({ tema }: CardTemaProps){
    return(
        <div className='bordwe flex flex-col rounded-2xl overflow-hidden justify-between border-1'>
            <header className="py-2 px-6 bg-gradient-to-t from-blue-400 to-blue-800 text-white font-bold text-2xl">Tema</header>
            <p className="p-8 text-3xl h-full">{tema.descricao}</p>

            <div className="flex">
                <Link to={`/editartema/${tema.id}`}
                className='w-full text-slate-100 bg-blue-400 hover:bg-blue-800 flex items-center justify-center py-2'>
                <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center py-2'>
                <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTema