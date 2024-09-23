import * as React from 'react';
import useFetch from '../hooks/useFetch';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { apiLink } from '../constants/constants';
import Header from './Header';
import Footer from './Footer';
import loadingGif from '../assets/bb8-2.gif';
import { AiFillFilter } from 'react-icons/ai';

const StarWarsCharactersList = () => {

    const url = `${apiLink}all.json`;

    const { data: characters, loading, error, changePage } = useFetch(url);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [charactersPerPage] = React.useState(10);
    const [selectedSpecies, setSelectedSpecies] = React.useState('All Characters');

    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const filteredCharacters = selectedSpecies === 'All Characters' ? characters : characters.filter(character => character.species === selectedSpecies);
    const currentCharacters = filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const species = ['All Characters', ...new Set(characters.map(character => character.species))].sort();

    const changeSpecies = (e) => {
        setSelectedSpecies(e.target.value);
        setCurrentPage(1);
    }

    if (loading) {
        return <img className='loading-gif' src={loadingGif} alt="loading" />
    }

    if (error) {
        return <div><NavBar />Error: {error.message}</div>;
    }

    return (
        <>
            <NavBar />
            <Header />
            <div className='filter-wrapper'>
            <h1 className='page-title'>Characters</h1>
            <AiFillFilter />
            <select className='select' onChange={changeSpecies}>
                {species.map((species, id) => (
                    <option key={id} value={species}>{species}</option>
                ))}
            </select>
            </div>
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
            <Pagination dataPerPage={charactersPerPage} totalData={filteredCharacters.length} paginate={paginate} changePage={changePage} />
            <Footer />
        </>
    );
}

export default StarWarsCharactersList;