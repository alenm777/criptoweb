import React, { useEffect, useState } from 'react'
import { TemaProvider } from './Context/Tema'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Inicio from './routes/Inicio'
import Acceder from './routes/Acceder'
import Inscribirse  from './routes/Inscribirse'
import Cuenta from './routes/Cuenta'
import axios from 'axios'

function App() {
const [coins, setCoins] = useState([])

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en'


useEffect(() => {
  axios.get(url).then((response) => {
    setCoins(response.data)
    console.log(response.data)
  })
},[url])

  return (
    <TemaProvider>
   <NavBar />
   <Routes>
    <Route path='/' element={<Inicio coins={coins} />} />
    <Route path='/acceder' element={<Acceder />} />
    <Route path='/inscribirse' element={<Inscribirse />} />
    <Route path='/cuenta' element={<Cuenta/>} />
   </Routes>
    </TemaProvider>
  )
}

export default App
