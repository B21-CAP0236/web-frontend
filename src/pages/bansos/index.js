import {useEffect, useState} from 'react'
import { AiFillCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import {listBansos} from '../../services/API/ListBansos'
import moment from 'moment'
import 'moment/locale/id';

const Bansos = () => {

    const [daftarBansos, setDaftarBansos] = useState([])

    async function showListBansos() {
        await listBansos().then((value) => {
            setDaftarBansos(value)
        });
    }
    
    useEffect(() => {
        showListBansos()
        moment().locale("es")
    },[])

    return (
        <div>
            <div className="p-3 flex justify-center flex-col">
                <p>Bansos Page</p>
                <br />
                <table>
                    <tr>
                        <th>Status</th>
                        <th className=" hidden lg:table-cell">Tanggal</th>
                        <th>Daerah</th>
                        <th>Stok</th>
                        <th>Aksi</th>
                    </tr>
                    {
                        daftarBansos != [] && daftarBansos.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{item.is_active ? <AiFillCheckCircle /> : <AiOutlineCloseCircle />}</td>
                                    <td className=" hidden lg:table-cell">{moment(item.created_at).format('LLLL')}</td>
                                    <td>{item.location.nama}</td>
                                    <td>{item.stock}</td>
                                    <td><a className=" text-blue-500 underline">Details</a></td>
                                </tr>
                            )
                        })
                    }
                </table>
                <br/>
                <span className=" self-end">Jumlah: {daftarBansos != [] && daftarBansos.length} Bansos</span>
            </div>
        </div>
    )
}

export default Bansos
