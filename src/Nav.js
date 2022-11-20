import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Procurar Publicação</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Procurar Publicação"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/post">Publicar</Link></li>
                <li><Link to="/about">Sobre</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
