
import {setToken} from "../redux/slices/Token/slice";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

function useToken(){
    const [token, setToken] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem('token')

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        // dispatch(setToken(token))
        setToken(token)
    }, [])

    return {token, setToken}
}

export default useToken