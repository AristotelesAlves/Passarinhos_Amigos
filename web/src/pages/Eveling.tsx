import { useState } from "react"
import Peido from "../components/modal/Peido";

export default function Evelig(){

    const [open, setOpen] = useState(false)

    function cutucar() {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 5000); // 10 segundos
    }

    return (
        <section className="w-full h-screen flex items-center justify-center bg-zinc-50">
            {open ? <Peido/> : null}
            <div className="bg-white drop-shadow-md rounded-md">
                <div className="w-fit rounded-md overflow-hidden h-fit">
                    <img className="h-[250px] w-[600px]" src="https://i.pinimg.com/originals/65/78/d0/6578d09eeb6c8663a05d4f9114afb10d.gif" alt="" />
                </div>
                <div className="flex items-center pb-4 px-4 gap-2 ">
                    <div className="p-1 w-fit h-fit rounded-full -mt-20 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-blue-400">
                        <img className="h-[100px] w-[100px] rounded-full" src="https://i.pinimg.com/564x/c4/f0/6f/c4f06f417f80d2db02b534a2b6e9599f.jpg" alt="" />
                    </div>
                    <div className="flex-1 flex justify-between p-2">
                        <div>
                            <h1 className="font-bold text-xl">
                                Pixilinga
                            </h1>
                            <ul className="flex flex-col -gap-0">
                                <li className="text-sm font-light text-zinc-600">
                                    Medo de altura. 🤙
                                </li>
                                <li className="text-sm font-light text-zinc-600">
                                    Faze de crescimento! 👊
                                </li>
                                <li>
                                    <a className="text-sm font-light text-blue-800" href="/">@OlavoFax 💏</a>
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