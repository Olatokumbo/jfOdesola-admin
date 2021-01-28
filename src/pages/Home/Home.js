import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Home.module.css";
const Home = () =>{
    return(
        <div className={style.home}>
            <Navbar/>
        </div>
    )
}

export default Home