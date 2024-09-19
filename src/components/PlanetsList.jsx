import * as React from 'react';
import NavBar from './NavBar';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import {apiLinks} from '../constants/apiLinks';

const PlanetsList = () => {
    const { data: planets, loading, error } = useFetch(apiLinks.planets);
    console.log(planets);
    if (loading) {
        return <div><NavBar></NavBar>Loading...</div>;
    }

    if (error) {
        return <div><NavBar></NavBar>Error: {error.message}</div>;
    }

    return (
        <>
            <NavBar />
            <h1 className='page-title'>Planets</h1>
            <ul className='card-wrapper'>
                {planets.results.map((planet, id) => (
                    <li key={id} className='card-view'>
                        <Link to={`/planets/${id + 1}`}>
                        <h2>{planet.name}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default PlanetsList;