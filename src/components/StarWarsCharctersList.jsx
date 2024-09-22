import * as React from 'react';
import useFetch from '../hooks/useFetch';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { apiLink } from '../constants/constants';
import Header from './Header';
import Footer from './Footer';


const StarWarsCharactersList = () => {

    const url = `${apiLink}all.json`;

    const { data: characters, loading, error, page, changePage } = useFetch(url);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [charactersPerPage] = React.useState(10);
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    if (loading) {
        return <div><NavBar />Loading...</div>;
    }

    if (error) {
        return <div><NavBar />Error: {error.message}</div>;
    }

    return (
        <>
            <NavBar />
            <Header />
            <h1 className='page-title'>Characters</h1>
            <ul className='card-wrapper'>
                {currentCharacters.map((character, id) => (
                    <li key={id} className='card-view'>
                        <Link className="card-view-link"to={`/characters/${id + 1}`} >
                            <img src={character.image} alt={character.name} />
                            <h2>{character.name}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
            <Pagination dataPerPage={charactersPerPage} totalData={characters.length} paginate={paginate} changePage={changePage} />
            <Footer />
        </>
    );
}

export default StarWarsCharactersList;