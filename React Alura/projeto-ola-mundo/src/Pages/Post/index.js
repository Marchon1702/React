import { Route, Routes, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import './Post.css'
import posts from 'assets/json/posts.json'
import PostModelo from 'components/PostModelo'
import NotFound from 'Pages/NotFound'
import PaginaPadrao from 'components/PaginaPadrao'

const Post = () => {

    const parametros = useParams()

    const post = posts.find(post => {
        return post.id === Number(parametros.id)
    })
    // useParams cria um valor par a chave de parametro que foi escolhida na rota (path="rota/:id") :id é a chave que receberá um valor string que será exatamente oq o houver escrito depois de rota/

    if (!post) return <NotFound />

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    // Post modelo foi feito para criar um modelo de post padrão sobre todos os assuntos do projeto. Onde sua props são foto capa, o titulo do json
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className='post-markdown-container'>
                            {/* ReactMarkdown é uma linguagem de marcação de texto semelhante ao HTML porem com suas particularidades, tivemso que usar esse Hook pois o Json do texto esya escrito em MarkDown*/}
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                    </PostModelo>
                    
                } />
            </Route>
        </Routes>

    )
}

export default Post