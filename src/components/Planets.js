import React from "react";

export default function Planets(props){
    
    return(
        <div className={props.item.name} 
             style={props.item.styles}
        >
        </div>

    )
}