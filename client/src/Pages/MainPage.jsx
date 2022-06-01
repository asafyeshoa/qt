import Cards from '../Components/Home/Cards'
import {createClasses} from "../style/style";
import {ToastContainer} from "react-toastify";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
function MainPage() {
    const classes = createClasses()

    return (
        <div className={classes.homePageContainer} >
            <ToastContainer />
            <h1 className={classes.header}>Main page</h1>
            <Cards/>
        </div>
    );
}

export default MainPage;

