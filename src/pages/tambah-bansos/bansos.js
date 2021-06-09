import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {listLocation} from '../../services/API/ListLocation'
import {listRecipients} from '../../services/API/ListRecipients'
import {addBansos} from '../../services/API/AddBansos'
import {addRecipientsMapping} from '../../services/API/AddRecipientsMapping'

const BansosPage = () => {
    
    const [active, setActive] = useState(false)
    const [stock, setStock] = useState(0)
    const [penerima, setPenerima] = useState([
        ""
    ])
    const [lokasi, setLokasi] = useState(null)
    const [listLokasi, setListLokasi] = useState(null)
    const [listPenerima, setListPenerima] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const tambahPenerima = () => {
        setPenerima( arr => [...arr, 1]);
    };

    const pilihPenerima = index => e => {
        let newArr = [...penerima];
        newArr[index] = e.target.value;
    
        setPenerima(newArr);
    }

    async function showListLocations() {
        await listLocation().then((value) => {
            setListLokasi(value)
        });
    }

    async function showListRecipients() {
        await listRecipients().then((value) => {
            setListPenerima(value)
        });
    }

    async function inputRecipients(id){
        
    }

    async function tambahBansos() {
        setLoading(true)
        setError(false)
        setSuccess(false)
        await addBansos(active, stock, lokasi).then((value) => {
            inputRecipients(value.id)
        }).finally(() => {
            setLoading(false)
        })
    }
    
    useEffect(() => {
        showListLocations()
        showListRecipients()
    },[])

    return (
        <div>
            <div className="p-3 flex justify-center flex-col items-center">
                <p>Bansos Page</p>
                <div>
                    <div className=" mt-3">
                        <p>
                            Aktif
                        </p>
                        <input
                        value={active}
                        onChange={() => setActive(!active)}
                        type="checkbox"
                        className="border border-black p-1" />
                    </div>
                    <div className=" mt-3">
                        <p>
                            Stok
                        </p>
                        <input
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        type="text"
                        className="border border-black p-1" 
                        placeholder="20"/>
                    </div>
                    {
                        penerima.map((penerimaBansos, index) => {
                            return(
                                <div key={index} className=" mt-3">
                                    <p>
                                        Penerima {index + 1}
                                    </p>
                                    <select
                                    className=" p-1 rounded-md w-full border border-black"
                                    value={penerimaBansos}
                                    onChange={pilihPenerima(index)}
                                    >
                                        <option value="">Pilih Penerima</option>
                                        {listPenerima != null ? listPenerima.map((item, index) => {
                                            return(
                                                <option value={item.id}>{item.nama}</option>
                                            )
                                        }): ""}
                                    </select>
                                </div>
                            )
                        })
                    }
                    <div className=" mt-3">
                        <button onClick={tambahPenerima}
                        className=" border w-20 border-black p-2 rounded-md">
                            Tambah
                        </button> 
                    </div>
                    <div className=" mt-3">
                        <p>
                            Lokasi
                        </p>
                         <select
                        className=" p-1 rounded-md w-full border border-black"
                        value={lokasi}
                        onChange={(e) => setLokasi(e.target.value)}
                        >
                            <option value="">Pilih Lokasi</option>
                            {listLokasi != null ? listLokasi.map((item, index) => {
                                return(
                                    <option value={item.id}>{item.nama}</option>
                                )
                            }) : ""}
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
                                Bansos added!
                            </p>
                        </div> 
                    : ""}
                    <div className=" w-full flex flex-row justify-around mt-3">
                        <Link to="/tambah-bansos/penerima">
                            <button className=" border w-20 border-black p-2 rounded-md">
                                Kembali
                            </button> 
                        </Link>
                        {loading ? <p className=" mx-3">Loading...</p> : <button onClick={tambahBansos} className=" border w-20 border-black mx-3 p-2 rounded-md">
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

export default BansosPage