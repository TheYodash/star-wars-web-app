import * as React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {apiLinks}  from '../constants/apiLinks';
import NavBar from './NavBar';

const Planet = () => {
    const { id } = useParams();
    const { data: planet, loading, error } = useFetch(`${apiLinks.planets}${id}`);
    console.log(planet);

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
                <h1>{planet.name}</h1>
                <p><strong>Climate: </strong>{planet.climate}</p>
                <p><strong>Population: </strong>{planet.population}</p>
                <p><strong>Orbital Period: </strong>{planet.orbital_period}</p>
                <p><strong>Rotation Period: </strong>{planet.rotation_period}</p>
                <p><strong>Diameter: </strong>{planet.diameter}</p>
            </div>
        </>
    );
}

export default Planet;