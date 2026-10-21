import LabelHarga from './LabelHarga'
import { useState } from "react"

function KartuMenu ({nama, harga, kategori="Makanan"}) {
    const [jumlah, setJumlah] = useState(0);
    return (
        <>
        <div className='kartu'>
            <h3>{nama}</h3>
            <p>{kategori}</p>
            <LabelHarga nilai={harga}></LabelHarga>
            <div className='kontrol'>
                <button onClick={() => setJumlah(jumlah - 1)} disabled={jumlah<1}>-</button>
                <p>{jumlah}</p>
                <button onClick={() => setJumlah(jumlah + 1)}>+</button>
            </div>
            <p>Subtotal: Rp {jumlah*harga}</p>
            <p>Catatan pesanan<input type="text" /></p>
        </div>
        </>
    )
}

export default KartuMenu;