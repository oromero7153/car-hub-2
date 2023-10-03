import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { EventDates } from "./EventDates";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import "./eventspage.css";

export default function EventsPage(props) {
  const navigate = useNavigate();

  return (
    <div className="events-page">
      <div className="content-grid">
        {EventDates.map((element, index) => (
          <Card
            key={index}
            imageURL={element.imageURL}
            eventName={element.eventName}
            location={element.location}
            date={element.date}
          />
        ))}
      </div>

      <div className="update-events">
        <div>
          <p>Stay up to date with events! New events will be added soon!</p>
        </div>

        <div className="button">
          <p>You can also add your own events here!</p>
          <button onClick={() => navigate("/events/AddEvent")}>
            Add Event
          </button>
          <button>Delete Event</button>
        </div>
      </div>
    </div>
  );
}
