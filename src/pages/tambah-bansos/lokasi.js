import { useState } from "react";
import {Link} from 'react-router-dom';
import {addLocation} from '../../services/API/AddLocation'

const Lokasi = () => {

    const [nama, setNama] = useState("")
    const [provinsi, setProvinsi] = useState("")
    const [kota, setKota] = useState("")
    const [alamat, setAlamat] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    async function addLokasi() {
        setSuccess(false)
        setLoading(true)
        setError(false)
        if(nama != "" && kota != "" && provinsi != "" && alamat !=""){
            await addLocation(nama, kota, kota, provinsi, alamat).then((value) => {
                setSuccess(true)
            }).finally(() => {
                setLoading(false)
            })
        }
        else {
            setLoading(false)
            setError(true)
        }
    }

    return (
        <div>
            <div className="p-3 flex justify-center flex-col items-center">
                <p>Lokasi Page</p>
                <div>
                    <div className=" mt-3">
                        <p>
                            Nama
                        </p>
                        <input
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        type="text"
                        className="border border-black p-1" 
                        placeholder="Gedung Sate"/>
                    </div>
                    <div className=" mt-3">
                        <p>
                            Provinsi
                        </p>
                        <input
                        value={provinsi}
                        onChange={(e) => setProvinsi(e.target.value)}
                        type="text"
                        className="border border-black p-1" 
                        placeholder="Jawa Barat"/>
                    </div>
                    <div className=" mt-3">
                        <p>
                            Kota
                        </p>
                        <input
                        value={kota}
                        onChange={(e) => setKota(e.target.value)}
                        type="text"
                        className="border border-black p-1" 
                        placeholder="Kota Bandung"/>
                    </div>
                    <div className=" mt-3">
                        <p>
                            Alamat
                        </p>
                        <textarea
                        value={alamat}
                        maxLength="300"
                        onChange={(e) => setAlamat(e.target.value)}
                        type="text"
                        className="border border-black p-1" 
                        placeholder="Jl. Telekomunikasi, Kota Bandung"/>
                    </div>
                    {error ? 
                        <div className=" flex flex-row justify-center mt-3">
                            <p className="text-red-500">
                                Fields cannot be empty!
                            </p>
                        </div> : success ? 
                        <div className=" flex flex-row justify-center mt-3">
                            <p className=" text-green-500">
                                Location added!
                            </p>
                        </div> 
                    : ""}
                    <div className=" w-full flex flex-row justify-around my-3">
                        {loading ? <p> Loading... </p> : <button onClick={addLokasi} className=" border w-20 border-black p-2 rounded-md">
                            Tambah
                        </button> }
                        <Link to="/tambah-bansos/penerima">
                            <button className=" border w-20 border-black p-2 rounded-md">
                                Lanjut
                            </button> 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lokasi