import React from "react"

export default function Card(props){
    return(
        <div className="card" >
            <img src={props.item.img} className="imgCard" alt={props.item.name}/>
            <h3>{props.item.name}</h3>

                        
        </div>
    )
}