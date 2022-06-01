import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ResponsiveAppBar from "./Components/AppBar";
import {useState} from "react";
import CardsContext from "./Utils/CardsLogic.context"


function App() {
    const [cards, setCards] = useState(null)
    const [loading, setLoading] = useState(true)

    return (
        <CardsContext.Provider value={{setCards, cards, loading, setLoading}}>
            <BrowserRouter>
                <ResponsiveAppBar/>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </BrowserRouter>
        </CardsContext.Provider>
    );
}

export default App;
