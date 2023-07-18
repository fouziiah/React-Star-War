import { useState } from 'react'
import Header from './Header'
import './App.css'
import Cards from './components/Cards'

function App() {
let data = [];
  return (
    <>
      <Header />
      <Cards data={data} />
    </>
  )
}

export default App
