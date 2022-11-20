import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    return (
        <main className="PostPage">
            <article className="post">
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <button onClick={() => handleDelete(post.id)}>
                            Deletar
                        </button>
                    </>
                }
                {!post &&
                    <>
                        <h2>Publicação não encontrada</h2>
                        <p>Que pena :/</p>
                        <p>
                            <Link to='/'>Visite Nossa Página Inicial</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage
