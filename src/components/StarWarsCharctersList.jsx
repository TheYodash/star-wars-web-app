import * as React from 'react';
import useFetch from '../hooks/useFetch';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { apiLinks, pageNumbers } from '../constants/apiLinks';


const StarWarsCharactersList = () => {

    const [page, setPage] = React.useState(1);
    const { data: characters, loading, error } = useFetch(apiLinks.characters, page);

    const changePage = (num) => {
        setPage(num);
    }

    React.useEffect(() => {
        changePage(page);
    }, [characters]);


    if (loading) {
        return <div><NavBar></NavBar>Loading...</div>;
    }

    if (error) {
        return <div><NavBar></NavBar>Error: {error.message}</div>;
    }

    return (
        <>
            <NavBar />
            <h1 className='page-title'>Characters</h1>
            <ul className='card-wrapper'>
                {characters.results.map((character, id) => (
                    <li key={id} className='card-view'>
                        <Link to={`/characters/${id + 1}`}>
                        <h2>{character.name}</h2>
                        {/* <img src={character.image} alt={character.name} /> */}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='pagination'>
            <Pagination page = {page} setPage = {setPage} category = 'characters'/>
            </div>
        </>
    );
}

export default StarWarsCharactersList;