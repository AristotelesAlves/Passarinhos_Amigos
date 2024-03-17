import Nav from "../components/fragmentos/Nav";
import Post from "../components/fragmentos/Post";
import {PublicacaoInterface} from "../interface/PublicacaoInterface"

export default function Home(){
    
    const postagems: PublicacaoInterface = {
        id: 'bufbeu2',
        titulo: 'Primeira postagem',
        fotos: ['https://i.pinimg.com/564x/9d/21/ec/9d21eccdbd592755e66cb1b398b15ee1.jpg','https://i.pinimg.com/564x/19/48/e0/1948e0d493a0945020da622484b752ce.jpg', 'https://i.pinimg.com/564x/f4/34/19/f434198617b505887d949e52b0995f61.jpg'],
        descricao: 'Testando a descrição da publicação',
        dataPostagem: new Date(),
        repositorioLink: 'dssdsd',
        siteLink: 'dssfdwfwef',
        nomeLink: 'XVIDEOS',
        comentarios: [
          {
            usuarioComentario: 'id_do_usuario',
            nomeUsuarioComentario: 'Nome do Usuário',
            comentario: 'Conteúdo do Comentário',
            dataComentario: new Date(),
            perfilImagemComentario:"https://i.pinimg.com/564x/78/db/8c/78db8c2cf6f788c4a787bac0a8e8fbe1.jpg"
          },
          {
            usuarioComentario: 'id_do_usuario',
            nomeUsuarioComentario: 'Nome do Usuário',
            comentario: 'Conteúdo do Comentário',
            dataComentario: new Date(),
            perfilImagemComentario:"https://i.pinimg.com/564x/d5/0f/5d/d50f5d50972f6fbe074e4ea59d8c3026.jpg"
          },
        ],
      };
    
      const user = {
        nome:'Olavodofax',
        id: 'dnk2nk',
        perfilImagen:'https://i.pinimg.com/736x/7d/35/7b/7d357b3f878ea28d45531c5af91c8d4c.jpg'
      }
    return (
        <section className="flex flex-col items-center justify-center w-full bg-zinc-100 h-[100%]">
            <div className="w-[600px] h-full mt-14 pb-10">
                <Nav/>
                <div className="flex flex-col gap-4">
                    <Post publicacao={postagems} usuario={user}/>
                    <Post publicacao={postagems} usuario={user}/>
                    <Post publicacao={postagems} usuario={user}/>
                </div>
            </div>
        </section>
    )
}