import KartuMenu from './components/KartuMenu'
import Panel from './components/Panel'
import './App.css'

function App() {
  const kantin = "Reynard";
  const N = 25;
  const jam = 9;
  const gayaJudul = {
    color: '#cc4545',
    FontSize: '20px'
  };

  return (
    <>
      <h1 className='Judul' style={gayaJudul  }>Kantin {kantin}</h1>
      <p>Saldo awal kartu kantin: Rp.{N* 1000}</p>
      
      {jam < 12 ? <p>Selamat pagi</p> : <p>Selamat pagi</p>}
      <button disabled="disabled">Bayar</button>

      <Panel judul="Menu Hari Ini">
        {/* {"makanan"} */}
        <KartuMenu nama="Nasi Ayam Geprek" harga={10000 + (N*100)}></KartuMenu>
        <KartuMenu nama="Es Teh Lemon" harga={10000 + (N*100)} kategori="Minuman"></KartuMenu>
        <KartuMenu nama="Mie Goreng Telur" harga={10000 + (N*100)}></KartuMenu>
      </Panel>
      {/* <Panel judul={`Menu Hari Ini`} children=>
        <KartuMenu nama="item 1" harga={10000 + (N*100)} kategori="makanan"></KartuMenu>
      </Panel> */}
    </>
  )
}

export default App
