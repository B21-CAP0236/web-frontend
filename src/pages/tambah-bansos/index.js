import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getCookie} from '../../config/cookie'
import {jwtParser} from '../../services/API/JWTParser'
import {useHistory} from 'react-router-dom'

const TambahBansos = () => {
    let history = useHistory();

    async function checkJWT(jwt) {
        await jwtParser(jwt).then((value) => {
            return value
        });
    }

    useEffect(() => {
        if(getCookie("loginToken") != ""){
            if(checkJWT(getCookie("loginToken")) == "Error happened"){
                history.push("/")
            }
        } else {history.push("/")}
    },[])

    return (
        <div>
            <div className="p-3 flex justify-center flex-col items-center">
                <p>Tambah Bansos</p>
                <div className=" mt-10 flex flex-col lg:flex-row">
                    <Link to= "/tambah-bansos/lokasi">
                        <button className=" border border-black p-3 w-40 rounded-lg">
                            Tambah Lokasi
                        </button>
                    </Link>
                    <Link to="/tambah-bansos/penerima">
                        <button className=" border border-black my-10 p-3 w-40 rounded-lg lg:my-0 lg:mx-10">
                            Tambah Penerima
                        </button>
                    </Link>
                    <Link to="/tambah-bansos/bansos">
                        <button className=" border border-black p-3 w-40 rounded-lg">
                            Tambah Bansos
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TambahBansos
