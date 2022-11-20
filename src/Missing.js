import { Link } from 'react-router-dom';

const Missing = () => {
    return (
        <main className='Missing'>
            <h2>Página não encontrada</h2>
            <p>Que pena :/</p>
            <p>
                <Link to='/'>Visite nossa Página Inicial.</Link>
            </p>
        </main>
    )
}

export default Missing
