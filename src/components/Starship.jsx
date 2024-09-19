import * as React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import {apiLinks} from '../constants/apiLinks'
import NavBar from './NavBar'

const Starship = () => {
    const { id } = useParams()
    const { data: starship, loading, error } = useFetch(`${apiLinks.starships}${id}`)
    console.log(starship)

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Error: {error.message}</h1>
    }

    return (
        <>
            <NavBar />
            <div>
                <h1>{starship.name}</h1>
                <p><strong>Model: </strong>{starship.model}</p>
                <p><strong>Manufacturer: </strong>{starship.manufacturer}</p>
                <p><strong>Cost in Credits: </strong>{starship.cost_in_credits}</p>
                <p><strong>Length: </strong>{starship.length}</p>
                <p><strong>Max Atmosphering Speed: </strong>{starship.max_atmosphering_speed}</p>
                <p><strong>Crew: </strong>{starship.crew}</p>
                <p><strong>Passengers: </strong>{starship.passengers}</p>
                <p><strong>Cargo Capacity: </strong>{starship.cargo_capacity}</p>
                <p><strong>Consumables: </strong>{starship.consumables}</p>
                <p><strong>Hyperdrive Rating: </strong>{starship.hyperdrive_rating}</p>
                <p><strong>MGLT: </strong>{starship.MGLT}</p>
                <p><strong>Starship Class: </strong>{starship.starship_class}</p>
            </div>
        </>
    )
}

export default Starship;