import React from "react"
import Navbar from "./components/Navbar.js";
import './App.css'
import Planets from "./components/Planets.js"
import data from "./data"
import Cards from "./components/Cards.js"
import Greetings from "./components/Greeting.js"
import GreetingsB from "./components/GreetingsB.js"
import FlipACoin from "./components/FlipACoin.js"
import RussianRullete from "./components/RussianRulete.js";

export default function App() {
    const planets = data.map(item => {
        return (
            <Planets
                key={item.id} 
                item={item}
            />
        )
    })        
    const planetsCard = data.map(item => {
        return (
            <Cards
                key={item.id} 
                item={item}
            />
        )
    }) 

    return(
        <div className="App">
            <Navbar />
            <div className="solarSystem">
                <Greetings />
                <div className="sun">
                    {planets}
                
                </div>
                <GreetingsB />
            </div>
            {planetsCard}
            <FlipACoin />
            <RussianRullete />
        </div>
    )
}