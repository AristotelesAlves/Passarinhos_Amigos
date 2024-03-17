import { ChatsTeardrop, Gear, House, User } from "@phosphor-icons/react";
import Configuracao from "../../pages/Configuracao";
import { useState } from "react";

export default function Nav(){

    const [modalConfiguracao, setModalConfiguracao] = useState(false)
    return (
        <header className="fixed w-[600px] py-2 top-0 z-30 bg-zinc-100 bg-opacity-35 backdrop-blur-sm">
            <ul className="flex items-center justify-center">
                <li className="p-2 transition-all duration-300 text-zinc-600 hover:bg-zinc-600 rounded-lg hover:text-zinc-50">
                    <a href="/">
                        <House size={32} weight="fill" />
                    </a>
                </li>
                <li className="p-2 transition-all duration-300 text-zinc-600 hover:bg-zinc-600 rounded-lg hover:text-zinc-50">
                    <a href="/batebapo">
                        <ChatsTeardrop size={32} weight="regular" />
                    </a>
                </li>
                <li className="p-2 transition-all duration-300 text-zinc-600 hover:bg-zinc-600 rounded-lg hover:text-zinc-50">
                    <a href="/perfil/d">
                        <User size={32} weight="regular" />
                    </a>
                </li>
                <li className="p-2 transition-all duration-300 text-zinc-600 hover:bg-zinc-600 rounded-lg hover:text-zinc-50">
                    <a href="/configuracao">
                        <Gear size={32} weight="regular" />
                    </a>
                </li>
            </ul>
        </header>
    )
}