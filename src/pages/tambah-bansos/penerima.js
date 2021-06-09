import { useState } from "react";
import {Link} from 'react-router-dom';
import {addRecipients} from '../../services/API/AddRecipients'

const Penerima = () => {

    const [NIK, setNIK] = useState("")
    const [nama, setNama] = useState("")
    const [ttl, setTTL] = useState("")
    const [gender, setGender] = useState("")
    const [alamat, setAlamat] = useState("")
    const [agama, setAgama] = useState("")
    const [status, setStatus] = useState("")
    const [pekerjaan, setPekerjaan] = useState("")
    const [kewarganegaraan, setKewarganegaraan] = useState("")
    const [goldar, setGoldar] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    async function addPenerima() {
        setSuccess(false)
        setLoading(true)
        setError(false)
        if(NIK != "" && nama != "" && pekerjaan != "" && status !="" && ttl != "" && kewarganegaraan != "" && gender != "" && goldar != "" && alamat != "" && agama != ""){
            await addRecipients(NIK, nama, pekerjaan, status, ttl, kewarganegaraan, gender, goldar, alamat, agama).then((value) => {
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
                <p>Penerima Page</p>
                <div>
                    <div className=" mt-3">
                        <p>
                            NIK
                        </p>
                        <input
                        value={NIK}
                        onChange={(e) => setNIK(e.target.value)}
                        type="text"
                        className="border border-black p-1" 
                        placeholder="3306124403910302"
                        maxLength="16"/>
                    </div>
                    <div className=" mt-3">
                        <p>
                            Nama
                        </p>
                        <input
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        type="text"
                        className="border border-black p-1" 
                        placeholder="Tirto Hadian Rachman"/>
                    </div>
                    <div className=" mt-3">
                        <p>
                            Tempat Tanggal Lahir
                        </p>
                        <input
                        value={ttl}
                        onChange={(e) => setTTL(e.target.value)}
                        type="date"
                        className="border w-full border-black p-1"/>
                    </div>
                    <div className=" mt-3">
                        <p>
                            Jenis Kelamin
                        </p>
                         <select
                        className=" p-1 rounded-md w-full border border-black"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="">Pilih salah satu</option>
                            <option value="Pria">Pria</option>
                            <option value="Wanita">Wanita</option>
                        </select>
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
                        placeholder="Jl. Raya Hankam - Cilangkap No.3, Jakarta Timur"/>
                    </div>
                    <div className=" mt-3">
                        <p>
                            Agama
                        </p>
                        <input
                        value={agama}
                        onChange={(e) => setAgama(e.target.value)}
                        type="text"
                        className="border border-black p-1" 
                        placeholder="Islam"/>
                    </div>
                    <div className=" mt-3">
                        <p>
                            Status Perkawinan
                        </p>
                         <select
                        className=" p-1 rounded-md w-full border border-black"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="">Pilih salah satu</option>
                            <option value="Kawin">Kawin</option>
                            <option value="Belum Kawin">Belum Kawin</option>
                        </select>
                    </div>
                    <div className=" mt-3">
                        <p>
                            Pekerjaan
                        </p>
                        <input
                        value={pekerjaan}
                        onChange={(e) => setPekerjaan(e.target.value)}
                        type="text"
                        className="border border-black p-1" 
                        placeholder="Teknisi Elektronik"/>
                    </div>
                    <div className=" mt-3">
                        <p>
                            Kewarganegaraan
                        </p>
                        <input
                        value={kewarganegaraan}
                        onChange={(e) => setKewarganegaraan(e.target.value)}
                        type="text"
                        className="border border-black p-1" 
                        placeholder="WNI"/>
                    </div>
                    <div className=" my-3">
                        <p>
                            Golongan Darah
                        </p>
                         <select
                        className=" p-1 rounded-md w-full border border-black"
                        value={goldar}
                        onChange={(e) => setGoldar(e.target.value)}
                        >
                            <option value="">Pilih salah satu</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="AB">AB</option>
                            <option value="O">O</option>
                        </select>
                    </div>
                    {error ? 
                        <div className=" flex flex-row justify-center my-3">
                            <p className="text-red-500">
                                Fields cannot be empty!
                            </p>
                        </div> : success ? 
                        <div className=" flex flex-row justify-center my-3">
                            <p className=" text-green-500">
                                Recipient added!
                            </p>
                        </div> 
                    : ""}
                    <div className=" w-full flex flex-row justify-around mb-3">
                        <Link to="/tambah-bansos/lokasi">
                            <button className=" border w-20 border-black p-2 rounded-md">
                                Kembali
                            </button> 
                        </Link>
                        {loading ? <p className=" mx-3">Loading...</p> : <button onClick={addPenerima} className=" border w-20 border-black mx-3 p-2 rounded-md">
                            Tambah
                        </button> }
                        <Link to="/tambah-bansos/bansos">
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

export default Penerima