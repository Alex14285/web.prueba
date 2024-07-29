import React, { useState } from "react"

export default function FlipACoin(){
    let [points, setPoints] = useState(0) 
    let [myPoints, setMyPoints] = useState(10)
    let [bet, setBet] = useState( true )
    let [coinSide, setCoinSide] = useState(true)
    let [message, setMessage] =useState("")
    let [deservePrice, setDeservePrice] = useState(false)
    function pluss(){
        if (myPoints === 1){
            setMessage("You do not have enougth money");
        }else{
        setPoints(points + 1);
        setMyPoints(myPoints - 1)
        setMessage("")
        }
    }

    function less(){
        if (points < -4){
            setMessage("Oh, you think you are smarter than me")
            setMyPoints(myPoints = -20)
            setPoints(points = 0)
            setDeservePrice(true)
        } else {
        setPoints(points - 1);
        setMyPoints(myPoints + 1)
        setMessage("")
        }
    }

    function letsFlip(){
        var random = Math.floor(Math.random()*2 + 1)
        var trueOrFalse = random === 2
        setCoinSide(coinSide = trueOrFalse )

        if( coinSide === bet){
            setMyPoints(myPoints + points)
        } else {
            setPoints(points = 0 )
        }
        
    }
    function Coin(){
        return(
            <div className="coin" onClick={letsFlip}>
                <h1 className="coinH1">{coinSide? ":)": "1$"}</h1>
            </div>
        )
    }

    function betting(){
        setBet(!bet)
    }

    if (deservePrice && myPoints === 0){
       setMyPoints(100)
       setMessage("you are too luky and smart") 
    }
    return(
       <div  className="headOrTails">
        <button onClick={pluss}>+1</button>
        <button onClick={less}>-1</button>
        <input type="radio" id="head" name="side" onChange={betting} defaultChecked />
        <label htmlFor="head">Head</label>
        <input type="radio" id="tail" name="side"  onChange={betting}/>
        <label htmlFor="tail">Tail</label>
        <h3> your bet: {bet ? "Head" : "Tails"}</h3>
        <h3>My points:{myPoints}</h3>
        <h3>{points}</h3>
        < Coin/>
        <p>{message}</p>
       </div> 
    )
}
