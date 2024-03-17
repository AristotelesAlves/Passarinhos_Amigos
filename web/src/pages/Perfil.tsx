import { GithubLogo, Globe, ImagesSquare, LinkSimpleHorizontal, Trash, X } from "@phosphor-icons/react";
import Nav from "../components/fragmentos/Nav";
import Cutuca from "../components/modal/Cutuca";

import { useEffect, useState } from "react"
import { UsuarioInterface } from "../interface/UsuarioInterface";

export default function Perfil(){

    const [open, setOpen] = useState(false)
    const [publicando, setPublicando] = useState(false)

    function cutucar() {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 5000); // 10 segundos
    }

    const [perfilConfig, setPerfilConfig] = useState<UsuarioInterface>({
        arroba: "",
        bio1: "",
        bio2: "",
        capaImagem:"",
        gifDocutuca: "",
        id:"",
        nome:"",
        perfilImagen:""
    })

    return (
        <section className="w-full h-full flex items-center justify-center bg-zinc-100 flex-col gap-2 overflow-auto pb-10 py-16">
            <Nav/>
            {open ? <Cutuca gif={'d'}/> : null}
            <div className="bg-white drop-shadow-md rounded-md">
                <div className="w-fit rounded-md overflow-hidden h-fit">
                    <img className="h-[250px] w-[600px]" src={perfilConfig.capaImagem} alt="" />
                </div>
                <div className="flex items-center pb-4 px-4 gap-2 ">
                    <div className="p-1 w-fit h-fit rounded-full -mt-20 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-blue-400">
                        <img className="h-[100px] w-[100px] rounded-full" src={perfilConfig.perfilImagen} alt="" />
                    </div>
                    <div className="flex-1 flex justify-between p-2">
                        <div>
                            <h1 className="font-bold text-xl">
                                {perfilConfig.nome}
                            </h1>
                            <ul className="flex flex-col -gap-0">
                                <li className="text-sm font-light text-zinc-600">
                                    {perfilConfig.bio1}
                                </li>
                                <li className="text-sm font-light text-zinc-600">
                                    {perfilConfig.bio2}
                                </li>
                                <li>
                                    <a className="text-sm font-light text-blue-800" href={`${perfilConfig.arroba}`}>{perfilConfig.arroba}</a>
                                </li>
                            </ul>
                        </div>
                        <button onClick={cutucar} className="text-white bg-black px-2 py-1 rounded-lg h-fit">
                            Cutuca
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-[600px] flex flex-col gap-2">
                <div className="bg-white rounded-lg p-2 flex flex-col gap-1">
                    <div className="w-full flex gap-1">
                        <input className="rounded-md  px-2 py-1 flex-1" type="text" placeholder={`${publicando ? 'Titulo da publicação':'Bora publicar alguma coisa? '}`} onClick={() => setPublicando(true)}/>
                        {publicando ? (
                            <button className="px-2 py-1 bg-black text-white rounded-md" onClick={() => setPublicando(false)}>
                                <X/>
                            </button>
                        ):(null)}
                    </div>
                    {publicando ? (
                        <>
                            <textarea className=" rounded-md px-2 py-1" placeholder="Descrição da sua publicação"></textarea>
                            <div className="w-full flex justify-between items-center">
                                <div>
                                    <ul className="flex gap-1 items-center">
                                        <li className="hover:text-zinc-600">
                                            <button className="w-fit h-fit relative">
                                                <ImagesSquare size={32}/>
                                                <div className="absolute -bottom-1 -right-1 bg-zinc-100 text-blue-600 px-1 rounded-md">
                                                    <LinkSimpleHorizontal/>
                                                </div>
                                            </button>
                                        </li>
                                        <li className="hover:text-zinc-600">
                                            <button className="w-fit h-fit relative">
                                                <GithubLogo size={32} />
                                                <div className="absolute -bottom-1 -right-1 bg-zinc-100 text-blue-600 px-1 rounded-md">
                                                    <LinkSimpleHorizontal/>
                                                </div>
                                            </button>
                                        </li>
                                        <li className="hover:text-zinc-600">
                                            <button className="w-fit h-fit relative">
                                                <Globe size={32} />                                              
                                                <div className="absolute hidden -bottom-1 -right-1 bg-zinc-100 text-blue-600 px-1 rounded-md">
                                                    <LinkSimpleHorizontal/>
                                                </div>
                                            </button>
                                        </li>
                                        <li className="flex gap-1">
                                            <button className="relative">
                                                <img className="w-8 h-8 rounded-sm " src="https://i.pinimg.com/564x/bb/f9/92/bbf99257cb0846046079912448142a6a.jpg" alt="" />
                                                <div className="absolute hover:bg-zinc-500 group hover:bg-opacity-20 text-white w-full h-full flex items-center top-0 justify-center">
                                                    <div className="hidden group-hover:block">
                                                        <Trash/>
                                                    </div>
                                                </div>
                                            </button>
                                            <button className="relative">
                                                <img className="w-8 h-8 rounded-sm " src="https://i.pinimg.com/564x/77/ca/0e/77ca0ebaa8759f4c00d4c571b948d843.jpg" alt="" />
                                                <div className="absolute hover:bg-zinc-500 group hover:bg-opacity-20 text-white w-full h-full flex items-center top-0 justify-center">
                                                    <div className="hidden group-hover:block">
                                                        <Trash/>
                                                    </div>
                                                </div>
                                            </button>
                                            <button className="relative">
                                                <img className="w-8 h-8 rounded-sm " src="https://i.pinimg.com/736x/44/78/40/4478406be8565d1eb248b62538eb2999.jpg" alt="" />
                                                <div className="absolute hover:bg-zinc-500 group hover:bg-opacity-20 text-white w-full h-full flex items-center top-0 justify-center">
                                                    <div className="hidden group-hover:block">
                                                        <Trash/>
                                                    </div>
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <button className="px-2 py-1 bg-black text-white rounded-md" onClick={() => setPublicando(false)}>
                                    Publicar
                                </button>
                            </div>

                        </>
                    ):(null)}
                </div>
                
            </div>
        </section>
    )
}