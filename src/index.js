import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Photocards from "./components/Photocards";
import Card from "./components/Card";
import data from './data';

function Page() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                icon={item.icon}
                openSpots={item.openSpots}
            />
        )
    })        

    return (
        
        <div>
            <Navbar/>
            <Photocards/>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById('root'))



