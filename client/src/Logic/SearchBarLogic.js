import {useState} from 'react'
import axios from "axios";
import config from "../Utils/config";
import {useContext} from "react";
import UserContext from "../Utils/CardsLogic.context";
import {toast} from 'react-toastify';

export default function useLogic() {

    const {setCards, setLoading} = useContext(UserContext)
    const [search, setSearch] = useState("")


    async function submit() {

        setLoading(true)
        await axios.post(`${config.BaseURL}/sendQuery`, {query: search}).then(res => {
            console.log(res.data)
            setLoading(false)
            if (res.data === 'Information not found') return toast.warn(res.data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            if (res.data === 'Search is exists') return toast.warn(res.data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setCards(res.data.reverse())

        })
    }

    return {
        submit,
        setSearch
    }
}
