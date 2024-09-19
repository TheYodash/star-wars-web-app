import StarWarsCharactersList from './components/StarWarsCharctersList'
import StarshipsList from './components/StarshipsList';
import PlanetsList from './components/PlanetsList';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Character from './components/Character';
import Planet from './components/Planet';
import Starship from './components/Starship';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/characters" element={<StarWarsCharactersList />} />
        <Route path="/planets" element={<PlanetsList />} />
        <Route path="/starships" element={<StarshipsList />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/planets/:id" element={<Planet />} />
        <Route path="/starships/:id" element={<Starship />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
