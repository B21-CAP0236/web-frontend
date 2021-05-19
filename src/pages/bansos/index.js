import { AiFillCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const DummyData = [
    {
        isActive: true,
        tanggal: "20-01-1999",
        daerah: "Jakarta",
        stok: "55",
        penerima: "https://google.com"
    },
    {
        isActive: false,
        tanggal: "20-01-1999",
        daerah: "Jakarta",
        stok: "55",
        penerima: "https://google.com"
    },
    {
        isActive: true,
        tanggal: "20-01-1999",
        daerah: "Jakarta",
        stok: "55",
        penerima: "https://google.com"
    },
    {
        isActive: true,
        tanggal: "20-01-1999",
        daerah: "Jakarta",
        stok: "55",
        penerima: "https://google.com"
    },
    {
        isActive: false,
        tanggal: "20-01-1999",
        daerah: "Jakarta",
        stok: "55",
        penerima: "https://google.com"
    },
    {
        isActive: true,
        tanggal: "20-01-1999",
        daerah: "Jakarta",
        stok: "55",
        penerima: "https://google.com"
    },
    {
        isActive: false,
        tanggal: "20-01-1999",
        daerah: "Jakarta",
        stok: "55",
        penerima: "https://google.com"
    },
    {
        isActive: true,
        tanggal: "20-01-1999",
        daerah: "Jakarta",
        stok: "55",
        penerima: "https://google.com"
    },
    {
        isActive: false,
        tanggal: "20-01-1999",
        daerah: "Jakarta",
        stok: "55",
        penerima: "https://google.com"
    },
    {
        isActive: true,
        tanggal: "20-01-1999",
        daerah: "Jakarta",
        stok: "55",
        penerima: "https://google.com"
    },
]

const Bansos = () => {
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
                        DummyData.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{item.isActive ? <AiFillCheckCircle /> : <AiOutlineCloseCircle />}</td>
                                    <td className=" hidden lg:table-cell">{item.tanggal}</td>
                                    <td>{item.daerah}</td>
                                    <td>{item.stok}</td>
                                    <td><a className=" text-blue-500 underline" href={item.penerima} target="_blank">Details</a></td>
                                </tr>
                            )
                        })
                    }
                </table>
                <br/>
                <span className=" self-end">Jumlah: {DummyData.length} Bansos</span>
            </div>
        </div>
    )
}

export default Bansos
