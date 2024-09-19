import * as React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {apiLinks}  from '../constants/apiLinks';
import NavBar from './NavBar';

const Character = () => {
    const { id } = useParams();
    const { data: character, loading, error } = useFetch(`${apiLinks.characters}${id}`);
    console.log(character);

    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>Error: {error.message}</h1>;
    }
    
    return (
        <>
            <NavBar />
            <div>
                <h1>{character.name}</h1>
                <p><strong>Birth Year: </strong>{character.birth_year}</p>

                {character.films.length > 0 && <p><strong>Films: </strong></p>}
                <ul>
                    {character.films.map((film, id) => (
                        <li key={id}>
                            <p>{film}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Character;