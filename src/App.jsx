import StarWarsCharactersList from './components/StarWarsCharctersList'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Character from './components/Character';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={
          <Home />}
           />
        <Route path="/characters" element={<StarWarsCharactersList />} />
        <Route path="/characters/:id" element={<Character />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
