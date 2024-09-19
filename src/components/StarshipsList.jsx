import * as React from 'react';
import useFetch from '../hooks/useFetch';
import NavBar from './NavBar';
import { apiLinks } from '../constants/apiLinks';
import { Link } from 'react-router-dom';

const StarshipsList = () => {

    const { data: starships, loading, error } = useFetch(apiLinks.starships);
    if (loading) {
        return <div><NavBar></NavBar>Loading...</div>;
    }

    if (error) {
        return <div><NavBar></NavBar>Error: {error.message}</div>;
    }

    return (
        <>
            <NavBar />
            <h1 className='page-title'>Starships</h1>
            <ul className='card-wrapper'>
                {starships.results.map((starship, id) => (
                    <li key={id} className='card-view'>
                        <Link to={`/starships/${id + 1}`}>
                        <h2>{starship.name}</h2>
                        </Link>
                    </li>
                ))}
            </ul>

        </>
    );
}

export default StarshipsList;