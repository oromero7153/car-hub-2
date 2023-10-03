import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AboutDates } from "./AboutDates";
import AboutCard from "./AboutCard";
import { useNavigate } from "react-router-dom";

export default function aboutUs(props) {

    const navigate = useNavigate();

    return (
        <><div style={{ display: "flex", flexWrap: "wrap" }}>
            {AboutDate.map((element, index) =>
                <AboutCard
                    key={index}
                    imageURL={element.imageURL}
                    eventName={element.eventName}
                    location={element.location}
                />)
            }
        </div>
            <div>
                <p>Stay up to date with events! New events will be added soon!</p>
            </div>

            <div className="button">
                <p>You can also add your own events here!</p>
                <button onClick={() => navigate('/events/AddEvent')} >Add Event</button>
                <button>Delete Event</button>
            </div>
        </>
    );
}