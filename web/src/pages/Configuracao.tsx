import { Camera, DotsThree, Image, Pen, X } from "@phosphor-icons/react";
import Nav from "../components/fragmentos/Nav";

export default function Configuracao(){
    return (
        <section className="flex flex-col items-center justify-center w-full bg-zinc-100 h-screen">
            <div className="w-[600px] mt-14 pb-10 bg-white py-2 px-4 rounded-lg h-fit shadow-xl ">
                <Nav/>
                <div>
                    <div className="flex items-center justify-between pb-2">
                        <h1 className="font-semibold ">
                            Editar Perfil
                        </h1>
                        <button>
                            <X size={25}/>
                        </button>
                    </div>
                    <div className="group relative w-full h-[200px]">
                        <img className="w-full h-[200px] rounded-md" src="https://i.pinimg.com/736x/16/7a/a4/167aa4636f547348cc44ca9b662f1c3b.jpg" alt="" />
                        <div className=" hover:flex hidden group-hover:flex justify-center items-center flex-col bg-black bg-opacity-40 w-full h-full  rounded-md absolute top-0">
                            <div className=" flex items-center flex-col justify-center p-2 rounded-full border-2 transition duration-300 border-white h-[125px] w-[125px] text-white">
                                <Image size={25}/>
                                <h3 className="font-semibold">
                                    Editar banner
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 py-2">
                        <div className="p-1 w-fit h-fit rounded-full  bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-blue-400">
                            <img className="w-[120px] h-[120px] rounded-full" src="" alt="" />
                        </div>
                        <form className="flex flex-col flex-1">
                            <label>Nome</label>
                            <input className="rounded-md border px-2 py-1" type="text" name="" id="" />
                            <label>1º Linha da bio</label>
                            <input className="rounded-md border px-2 py-1" type="text" name="" id="" />
                            <label>2º Linha da bio</label>
                            <input className="rounded-md border px-2 py-1" type="text" name="" id="" />
                            <label>Marca um usuário</label>
                            <input className="rounded-md border px-2 py-1" type="text" name="" id="" />
                        </form>
                    </div>
                    <div>
                        <h1 className="font-semibold">
                            GIF's ao cutucar
                        </h1>
                        <div className="flex gap-2 pt-2">
                            <img className="flex border-white w-full h-20 rounded-lg" 
                                src="https://i.pinimg.com/originals/57/61/5b/57615b8c0092a66c1d4058b1692955cc.gif" 
                                alt="" 
                            />
                            <img className="flex border-white w-full h-20 rounded-lg" 
                                src="https://i.pinimg.com/originals/b3/84/e6/b384e6b4872e1ce0773b47d5c3ce4a19.gif" 
                                alt="" 
                            />
                            <img className="flex border-white w-full h-20 rounded-lg" 
                                src="https://i.pinimg.com/originals/43/f9/32/43f932252dd3a97691bf754b989e2a77.gif" 
                                alt="" 
                            />
                            <img className="flex border-white w-full h-20 rounded-lg" 
                                src="https://i.pinimg.com/originals/06/da/9a/06da9a3eeec3782c882844c6fd89243f.gif" 
                                alt="" 
                            />
                            <img className="flex border-white w-full h-20 rounded-lg" 
                                src="https://i.pinimg.com/originals/27/12/22/27122204d43e88725018ff4ebec3e260.gif" 
                                alt="" 
                            />
                            <img className="flex border-white w-full h-20 rounded-lg" 
                                src="https://i.pinimg.com/originals/e2/ec/7e/e2ec7e18ae58c2a22955dca068346a62.gif" 
                                alt="" 
                            />
                            <img className="flex border-white w-full h-20 rounded-lg" 
                                src="https://i.pinimg.com/originals/d3/93/93/d39393aa598ec1545b8ecf32d8908871.gif" 
                                alt="" 
                            />
                        </div>
                        <div className="flex gap-2 w-fll justify-end items-center mt-5">
                            <button className="px-2 py-1 text-white bg-black rounded-md">
                                Cancelar
                            </button>
                            <button className="px-2 py-1 text-white bg-black rounded-md">
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}