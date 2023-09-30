import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { EventDates } from "./EventDates";
import Card from "./Card";

export default function EventsPage (props) {
    return (
        <div style= {{display: "flex", flexWrap: "wrap"}}> 
            {EventDates.map((element, index) =>
            <Card  
            key= {index} 
            imageURL= {element.imageURL} 
            eventName={element.eventName} 
            location={element.location}
            date={element.date} 
            />)
        }
        </div>
    );
}