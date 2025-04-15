import React from 'react'
import "./css/App.css"
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Favorite from './pages/Favorite'
import {MovieProvider} from "./contexts/MovieContext"
import Navbar from './components/Navbar'

const App = () => {
  return (
    <MovieProvider>
      <Navbar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorite' element={<Favorite/>}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App