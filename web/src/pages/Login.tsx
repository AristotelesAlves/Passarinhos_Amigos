export default function Login(){
    return (
        <div className="flex items-center justify-center w-full h-screen bg-zinc-50">
            <div className="px-8 py-4 h-fit w-fit gap-3 flex flex-col items-center justify-center bg-white drop-shadow-lg rounded-md">
                <img className="h-32 w-32"
                  src="https://img.freepik.com/vetores-premium/resumo-gradiente-de-ilustracao-de-passaro-colorido_343694-1740.jpg" 
                  alt="" 
                />
                <h1 className="-mt-8 font-bold">
                    Passarinhos Amigos
                </h1>
                <div className="flex flex-col gap-2">
                    <input className="border-2 border-zinc-600 w-[250px] px-2 py-1 rounded-md" type="text" placeholder="Insira seu e-mail"/>
                    <input className="border-2 border-zinc-600 w-[250px] px-2 py-1 rounded-md" type="text" placeholder="Insira sua senha"/>
                </div>
                <div className="w-full text-center">
                    <button className="bg-black text-white rounded-md w-full px-2 py-1">
                        Entrar
                    </button>
                    <a className="w-full mt-1 text-sm font-light text-blue-700" href="#">Esqueceu a senha ?</a>
                </div>
            </div>
        </div>
    )
}