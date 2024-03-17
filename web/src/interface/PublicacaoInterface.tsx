
export interface PublicacaoInterface{
    id: string;
    titulo: string;
    fotos: string[];
    descricao: string;
    dataPostagem: Date;
    repositorioLink: string;
    siteLink:string;
    nomeLink:string;
    comentarios: {
            usuarioComentario: string,
            nomeUsuarioComentario: string,
            comentario: string,
            dataComentario: Date,
            perfilImagemComentario: string
        }[]
    }