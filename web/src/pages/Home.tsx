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
        <section className="w-full h-screen flex items-center justify-center bg-zinc-50">
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
        </section>
    )
}