import { useState } from "react"
import { useHistory } from "react-router-dom";
import {loginAPI} from '../../services/API/Login'
import {setCookie} from '../../config/cookie'

const Login = () => {
    let history = useHistory();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    
    async function handleSubmit() {
        setError(false)
        setLoading(true)
        await loginAPI(username, password).then((value) => {
            console.log(value)
            if(value != "User not found" && value != "Pass is wrong"){
                setCookie("loginToken", value, 1)
                history.push("/tambah-bansos")
            }
            else{
              setError(true)  
            } 
        }).then(() => {
            setLoading(false)
        })
      }

    return (
        <div>
            <div className="p-3 flex flex-col items-center justify-center">
                <p>Login Page</p>
                <div className=" mt-3">
                    <p>
                        Username
                    </p>
                    <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className="border border-black p-1" 
                    placeholder="username"/>
                </div>
                <div className=" mt-3">
                    <p>
                        Password
                    </p>
                    <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="border border-black p-1" 
                    placeholder="password"/>
                </div>
                <div className=" w-full flex flex-col items-center justify-around mt-3">
                    {error ? <p className=" text-red-500 mb-3">
                        Username or password is incorrect, please try again!
                    </p> : ""}
                    {loading ? 
                    <p className="">
                        Loading...
                    </p> : 
                    <button onClick={handleSubmit} className=" border w-20 border-black p-2 rounded-md">
                        Login
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default Login