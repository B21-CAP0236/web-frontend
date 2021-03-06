import { useState } from "react";
import {Link} from 'react-router-dom';
import {addAdmin} from '../../services/API/AddAdmin'

const Profile = () => {

    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [access, setAccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    async function tambahAdmin() {
        setSuccess(false)
        setLoading(true)
        setError(false)
        if(nama != "" && email != "" && password != ""){
            await addAdmin(nama, email, password, access).then((value) => {
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
                <p>Admin Page</p>
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
                        placeholder="Hello World"/>
                    </div>
                    <div className=" mt-3">
                        <p>
                            Email
                        </p>
                        <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="border border-black p-1" 
                        placeholder="hello@world.com"/>
                    </div>
                    <div className=" mt-3">
                        <p>
                            Password
                        </p>
                        <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="text"
                        className="border border-black p-1" 
                        placeholder="password"/>
                    </div>
                    <div className=" mt-3">
                        <p>
                            Write Access
                        </p>
                        <input
                        value={access}
                        onChange={() => setAccess(!access)}
                        type="checkbox"
                        className="border border-black p-1" />
                    </div>
                    {error ? 
                        <div className=" flex flex-row justify-center mt-3">
                            <p className="text-red-500">
                                Fields cannot be empty!
                            </p>
                        </div> : success ? 
                        <div className=" flex flex-row justify-center mt-3">
                            <p className=" text-green-500">
                                Admin added!
                            </p>
                        </div> 
                    : ""}
                    <div className=" w-full flex flex-row justify-around my-3">
                        {loading ? <p>Loading...</p> : <button onClick={tambahAdmin} className=" border w-40 border-black p-2 rounded-md">
                            Tambah Admin
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
