import React from "react";

export default function Card(props) {

    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
        
    } else if (props.openSpots <= 5) {
        badgeText = "ENDING SOON"
        
    } else badgeText = "AVAILABLE"
    
    const noOpenSpots = props.openSpots === 0;
    const isLocation = props.location === "USA" 
                        | props.location === "Poland" 
                        | props.location === "Portugal"
    const isLowerUnits = badgeText === "ENDING SOON";

    return (

        <div className="card"> 
            {
            (noOpenSpots | isLocation) 
            && <div style={{backgroundColor:  isLowerUnits ? "#FF5A5F" : "", 
            color: isLowerUnits ? "white" : "black"}} 
            className="card--badge">{badgeText}</div> 
            }
            <img src={`${props.img}`} alt="swim" className="card--image" />
        
        <div className="card--stats">
            <img src={`${props.icon}`} alt="star" className="card--star" />
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount}) • </span>
            <span className="gray">{props.location}</span>
        </div>

        <p>{props.title}</p>
        <p><span className="bold">From €{props.price}</span> / person</p>
    </div>
)
}