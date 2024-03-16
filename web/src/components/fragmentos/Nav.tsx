import { Bell, House, User } from "@phosphor-icons/react";

export default function Nav(){
    return (
        <header className="fixed w-[600px] py-2 top-0 z-30 bg-zinc-100 bg-opacity-35 backdrop-blur-sm">
            <ul className="flex items-center justify-center">
                <li className="p-2 text-zinc-600 hover:bg-zinc-600 rounded-lg hover:text-zinc-50">
                    <House size={32} weight="fill" />

                </li>
                <li className="p-2 text-zinc-600 hover:bg-zinc-600 rounded-lg hover:text-zinc-50">
                    <Bell size={32} weight="regular" />
                </li>
                <li className="p-2 text-zinc-600 hover:bg-zinc-600 rounded-lg hover:text-zinc-50">
                    <User size={32} weight="regular" />
                </li>
            </ul>
        </header>
    )
}