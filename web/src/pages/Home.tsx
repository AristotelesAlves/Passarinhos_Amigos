import Nav from "../components/fragmentos/Nav";
import Beijo from "../components/modal/Beijo";

import { useState } from "react"

export default function Home(){

    const [open, setOpen] = useState(false)

    function cutucar() {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 5000); // 10 segundos
    }

    return (
        <section className="w-full h-screen flex items-center justify-center bg-zinc-50 flex-col gap-2 overflow-auto pt-20">
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
            <div className="w-[600px]">
                <div className="w-full flex gap-3">
                    <button className="bg-black text-white rounded-t-md px-2 py-1">
                        Projetos
                    </button>
                    <button className="bg-white rounded-t-md px-2 py-1">
                        Recados
                    </button>
                </div>
                <div className="h-full w-full bg-white shadow-md rounded-tr-md">
                    <div>
                        <img src="https://i.pinimg.com/736x/28/72/72/2872722dfcf881ff5cc2cf210c462ff8.jpg" alt="" />
                        <h1>
                            Sistema de gestão
                        </h1>
                        <p>
                            Sistema desenvolvido para trabalhar meus conhecimentos
                            Achei muito dificil 
                        </p>
                        <input type="text" className="w-full border rounded-md px-2 py-1" placeholder="Deixe seu comentario!" />
                    </div>
                </div>
            </div>
            {/* <div className="w-[600px] flex gap-1 items-center">
                <input className="border-2 rounded-md bg-white drop-shadow-lg px-2 py-1 flex-1" type="text" placeholder="Deixe um recado...."/>
                <button className="px-2 py-1 bg-black text-white rounded-md">
                    Publicar
                </button>
            </div> */}
        </section>
    )
}