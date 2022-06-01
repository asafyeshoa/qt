import { useEffect, useContext} from "react";
import cardsContext from "../Utils/CardsLogic.context";
import config from "../Utils/config"
import axios from "axios";
export default function CardsLogic() {
    const {cards, setCards, loading, setLoading} = useContext(cardsContext)

    async function getData() {
        axios.get(`${config.BaseURL}/getData`).then(res => {
            setCards(res.data)
        }).catch(err => {
            console.log(err)
        })
        setLoading(false)

    }
    useEffect(() => {
        getData()
    },[])

    return {
        cards,
        setCards,
        loading
    }
}
