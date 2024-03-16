import { GithubLogo, Globe, ImagesSquare, LinkSimpleHorizontal, Trash, X } from "@phosphor-icons/react";
import Nav from "../components/fragmentos/Nav";
import Beijo from "../components/modal/Beijo";

import { useState } from "react"

export default function Home(){

    const [open, setOpen] = useState(false)
    const [publicando, setPublicando] = useState(false)

    function cutucar() {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 5000); // 10 segundos
    }

    return (
        <section className="w-full h-full flex items-center justify-center bg-zinc-100 flex-col gap-2 overflow-auto pb-10 py-16">
            <Nav/>
            {open ? <Beijo/> : null}
            <div className="bg-white drop-shadow-md rounded-md">
                <div className="w-fit rounded-md overflow-hidden h-fit">
                    <img className="h-[250px] w-[600px]" src="https://i.pinimg.com/originals/72/0c/c4/720cc43d757ee638ad5054a05220fafe.gif" alt="" />
                </div>
                <div className="flex items-center pb-4 px-4 gap-2 ">
                    <div className="p-1 w-fit h-fit rounded-full -mt-20 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-blue-400">
                        <img className="h-[100px] w-[100px] rounded-full" src="https://i.pinimg.com/564x/50/ac/10/50ac1048a6d58630e6147b026132a373.jpg" alt="" />
                    </div>
                    <div className="flex-1 flex justify-between p-2">
                        <div>
                            <h1 className="font-bold text-xl">
                                Olavo do FAX
                            </h1>
                            <ul className="flex flex-col -gap-0">
                                <li className="text-sm font-light text-zinc-600">
                                    Lindo e gostoso. 🤙
                                </li>
                                <li className="text-sm font-light text-zinc-600">
                                    Homem de uma mulher só! 👊
                                </li>
                                <li>
                                    <a className="text-sm font-light text-blue-800" href="/pixilinga">@pixilinga 💏</a>
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
                <div className="h-fit w-full p-2 overflow-hidden bg-white shadow-md rounded-tr-md">
                    <div>
                        <div className="relative h-fit w-fit">
                            <img src="https://i.pinimg.com/736x/28/72/72/2872722dfcf881ff5cc2cf210c462ff8.jpg" alt="" />
                            <div className="w-full items-center absolute bottom-5 ">
                                <div className="flex gap-1 justify-center">
                                    <button className="h-3 w-5 rounded-full shadow-lg bg-white bg-opacity-90"></button>
                                    <button className="h-3 w-3 rounded-full shadow-lg bg-white bg-opacity-50"></button>
                                    <button className="h-3 w-3 rounded-full shadow-lg bg-white bg-opacity-50"></button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 py-2">
                            <div className="p-[2px] bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-blue-400 rounded-full">
                                <img className="w-9 h-9 rounded-full border-2 border-white" src="https://i.pinimg.com/564x/50/ac/10/50ac1048a6d58630e6147b026132a373.jpg" alt="" />
                            </div>
                            <h1 className="text-base font-semibold">
                                Olavo do fax
                            </h1>
                            <span className="text-xs text-zinc-700 font-semibold mt-1">
                                • 15/03/2024
                            </span>
                        </div>
                        <div className="border-b ">
                            <h1>
                                Sistema de gestão
                            </h1>
                            <p>
                                Sistema desenvolvido para trabalhar meus conhecimentos
                                Achei muito dificil 
                            </p>
                        </div>
                        <div className="flex gap-1 py-2">
                            <div className="p-[2px] bg-gradient-to-r h-fit from-red-400 via-yellow-400 via-green-400 to-blue-400 rounded-full">
                                <img className="w-7 h-7 rounded-full border-2 border-white" src="https://i.pinimg.com/564x/eb/e6/63/ebe6631e86211b958755d41033b196ee.jpg" alt="" />
                            </div>
                            <div className="flex gap-1 flex-col mt-1">
                                <div className="flex items-center gap-1">
                                    <h1 className="text-sm font-semibold">
                                        Aristoteles
                                    </h1>
                                    <p className="text-xs text-zinc-700 font-semibold mt-[2px]">
                                        • 15/03/2024
                                    </p>
                                </div>
                                <p className="text-sm text-zinc-700 font-semibold -mt-1">
                                    Ficou muito bom meu amigo parabens
                                </p>
                            </div>
                        </div>
                        <input type="text" className="w-full border rounded-md px-2 py-1" placeholder="Deixe seu comentario!" />
                    </div>
                </div>
            </div>
        </section>
    )
}