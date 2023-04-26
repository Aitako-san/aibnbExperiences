import React from "react";
import "./../style.css"

import GroupCard from "./images/groupCard.png"

export default function Photocards() {
    return (
    <section className="heroes-cards">
            <img className="heroes" src={GroupCard} alt="people"></img>
            
            <h1 className="page-title">Online Experiences</h1>
            
            <p className="page-header-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
    </section>
    )
}