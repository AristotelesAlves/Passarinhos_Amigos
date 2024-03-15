export default function Nav(){
    return (
        <header className="fixed w-screen top-2 z-50 bg-white bg-opacity-35 backdrop-blur-sm">
            <ul className="flex items-center justify-center">
                <li className="p-2 text-zinc-800 hover:bg-black rounded-lg hover:text-zinc-50">
                    HOME
                </li>
                <li className="p-2 text-zinc-800 hover:bg-black rounded-lg hover:text-zinc-50">
                    PERFIL
                </li>
                <li className="p-2 text-zinc-800 hover:bg-black rounded-lg hover:text-zinc-50">
                    NOTIFICAÇÃO
                </li>
            </ul>
        </header>
    )
}