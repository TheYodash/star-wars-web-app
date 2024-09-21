import StarWarsCharactersList from './components/StarWarsCharctersList'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Character from './components/Character';
import { PaginationContextProvider } from './components/PaginationContext';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <>
    <Router>
      <PaginationContextProvider>
      <Routes>
        <Route path="/" element={
          <>
          <NavBar />
          <Header />
          <Home />
          </>}
           />
        <Route path="/characters" element={<StarWarsCharactersList />} />
        <Route path="/characters/:id" element={<Character />} />
      </Routes>
      </PaginationContextProvider>
    </Router>
    </>
  )
}

export default App
