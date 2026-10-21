import { useState } from 'react'
import './App.css'

function App() {
  const kantin = "Reynard";
  const N = 25;
  const jam = 9;
  const color = {
    color: '#cc4545'
  };

  return (
    <>
      <h1 className='Judul' style={color}>Kantin {kantin}</h1>
      <p>Saldo awal kartu kantin: Rp.{N* 1000}</p>
      
      {jam < 12 ? <p>Selamat pagi</p> : <p>Selamat pagi</p>}
      <button disabled="disabled">Bayar</button>
    </>
  )
}

export default App
