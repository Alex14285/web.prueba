import React, { useState } from "react"

export default function RussianRullete(){
    let [points, setPoints] = useState(0) 
    let [myPoints, setMyPoints] = useState(10)
    let [message, setMessage] =useState("")
    let [deservePrice, setDeservePrice] = useState(false)
    let [bullet, setBullet] = useState (false)
    let [space, setSpace] = useState(5)
    function pluss(){
        if (myPoints === 0){
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

    function letsPlay(){
        var random = Math.floor(Math.random()*space + 1)
        var trueOrFalse = random === 1
        setBullet(bullet = trueOrFalse )
        setSpace(space-1)
        var extra = 6 - space
        if (bullet === true){
            setMyPoints(0)
            setPoints(0)
            setMessage("You are dead")
        } else {
            setPoints(points + points * extra)
        }
    }
    let dataGun = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
    ]
    
    function Rullete(props){
        let state = "o"
        if (props.item.id < 6 - space){
            state = "x"
        }
        return(
            <div className="bullet" >
                <h1>{state}</h1>
            </div>
        )
    }
    
    const rullete = dataGun.map(item => {
        return(
            < Rullete
                key={item.id}
                item={item}
            />)
    })
    function Gun(){
        return(
            <div className="coin" onClick={letsPlay}>
                <h1 className="coinH1">{bullet? "bang": '""'}</h1>
            </div>
        )
    }

    if (deservePrice && myPoints === 0){
       setMyPoints(100)
       setMessage("you are too luky and smart") 
    }
     function end(){
        setSpace(5)
        setMyPoints(myPoints + points)
        setPoints(0)

     }
     dataGun = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
    ]
    return(
       <div  className="headOrTails">
        <button onClick={pluss}>+1</button>
        <button onClick={less}>-1</button>
        <button onClick={end}>end</button>
        <h3>My points:{myPoints}</h3>
        <h3>{points}</h3>
        {rullete}
        < Gun />
        <p>{message}</p>
       </div> 
    )
}
