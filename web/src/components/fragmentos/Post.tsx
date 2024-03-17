import { GithubLogo, Globe, PaperPlaneRight } from "@phosphor-icons/react";
import { PublicacaoInterface } from "../../interface/PublicacaoInterface";
import { UsuarioInterface } from "../../interface/UsuarioInterface";
import { useState } from "react";



interface Ipublicacao {
    publicacao: PublicacaoInterface;
    usuario: Pick<UsuarioInterface, "nome" | "id" | "perfilImagen">
}

export default function Post({publicacao,usuario}:Ipublicacao ){

    const [imagemSelecionada, setImagemSelecionada] = useState(0)

    return (
        <div className="h-fit w-full p-2 overflow-hidden bg-white shadow-md rounded-md">
            <div>
                <div className="relative h-fit flex items-center justify-center w-full">

                    <img className="rounded-md" src={publicacao.fotos[imagemSelecionada]} alt="" />

                    <div className="w-full items-center absolute bottom-5 ">
                        <div className="flex gap-1 justify-center">
                            {publicacao.fotos.map((_, index) => {
                                return (
                                    <button className={`h-3 ${index == imagemSelecionada ? 'w-5': 'w-3'} rounded-full shadow-lg bg-white bg-opacity-90 transition-all duration-300 hover:bg-opacity-100`}
                                    onClick={() => setImagemSelecionada(index)}
                                    >

                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-1 py-2">
                    <div className="p-[2px] bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-blue-400 rounded-full">
                        <img className="w-9 h-9 rounded-full border-2 border-white" src={usuario.perfilImagen} alt="" />
                    </div>
                    <h1 className="text-base font-semibold">
                        {usuario.nome}
                    </h1>
                    <span className="text-xs text-zinc-700 font-semibold mt-1">
                        • {publicacao.dataPostagem.getDay()}/{publicacao.dataPostagem.getMonth()}/{publicacao.dataPostagem.getFullYear()}
                    </span>
                </div>
                <div className="border-b px-2 -mt-1 pb-2">
                    <h1 className="font-semibold">
                        {publicacao.titulo}
                    </h1>
                    <p className="text-sm">
                        {publicacao.descricao} 
                    </p>
                    <div className="mt-1">
                        <ul className="flex items-center gap-2">
                            <li className="flex items-center rounded-lg bg-black text-white w-fit px-2 py-1">
                                <GithubLogo/>
                                <span className="text-xs">Repositorio</span>
                            </li>
                            <li className="flex items-center rounded-lg bg-black text-white w-fit px-2 py-1">
                                <Globe/>
                                <span className="text-xs">Demo</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-1 py-2">
                    {publicacao.comentarios.map((comentario) => {
                        return (
                            <div className="flex gap-1">
                                <div className="p-[2px] w-fit h-fit bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-blue-400 rounded-full">
                                    <img className="w-8 h-8 rounded-full" src={comentario.perfilImagemComentario} alt="" />
                                </div>
                                <div>
                                    <div className="flex gap-1 items-center">
                                        <h2 className="font-semibold">
                                            {comentario.nomeUsuarioComentario}
                                        </h2>
                                        <span className="text-xs text-zinc-700 font-semibold mt-1">
                                            • {publicacao.dataPostagem.getDay()}/{publicacao.dataPostagem.getMonth()}/{publicacao.dataPostagem.getFullYear()}
                                        </span>
                                    </div>
                                    <p className="text-sm">
                                        {comentario.nomeUsuarioComentario}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex items-center gap-1">
                    <input type="text" className="w-full border rounded-md px-2 py-1" placeholder="Deixe seu comentario!" />
                    <button className="bg-black p-2 rounded-lg shadow-md text-white">
                        <PaperPlaneRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}