import React from "react";
// import { useHistory } from "react-router-dom";
import Pizza from "./Assets/Pizza.jpg"

export default function Home() {
    // const history = useHistory();

    // const routeToForm = () => {
    //     history.push("/order")
    // }
    
    return(
        <div className="homepage">
            <header>
                <h2>Whos read for a Pizza Party?!</h2>
            </header>
            <div className="pizzaimg">
                <img src={Pizza} alt="pizza"/>
            </div>
        </div>
    )
}