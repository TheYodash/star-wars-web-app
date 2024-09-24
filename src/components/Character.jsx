import * as React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { apiLink } from '../constants/constants';
import './Character.css';
import { usePagination } from '../Context/PaginationContext';
import loadingGif from '../assets/bb8-2.gif';
import { AiOutlineArrowLeft } from "react-icons/ai";

const Character = () => {
    const { id } = useParams();

    const url = `${apiLink}/id/${id}.json`;
    const { data: character, loading, error } = useFetch(url);

    if (loading) {
        return <img className='loading-gif'src={loadingGif} alt="loading" />
    }
    if (error) {
        return <h1>Error: {error.message}</h1>;
    }
    
    return (
        <>
            <div className='character-container'>
                <img src={character.image} alt={character.name} className='character-image'/>
                <div className='character-info'>
                    <h2>{character.name}</h2>
                    <p><strong>Height: </strong>{character.height}</p>
                    <p><strong>Mass: </strong>{character.mass}</p>
                    <p><strong>Gender: </strong>{character.gender ? character.gender : "Unknown"}</p>
                    <p><strong>Homeworld: </strong>{character.homeworld}</p>
                    <p><strong>Species: </strong>{character.species}</p>
                    <p><strong>Age: </strong>{
                    Math.abs(character.born) + character.died ? 
                    `${Math.abs(character.born - character.died)} Years` :
                    'Unknown'}</p>
                    <button className='back-button' onClick={() => window.history.back()}><AiOutlineArrowLeft className='back-arrow' /></button>
                 </div>
            </div>
        </>
    );
}

export default Character;