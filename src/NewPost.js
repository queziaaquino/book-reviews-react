const NewPost = ({
    handleSubmit, postTitle, setPostTitle, postBody, setPostBody
}) => {
    return (
        <main className="NewPost">
            <h2>Nova Publicação</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Título:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Resenha:</label>
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </main>
    )
}

export default NewPost
