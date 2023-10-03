import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <span className="event-name">{props.eventName}</span>
      <div className="event-date">{props.date}</div>
      <img src={props.imageURL} alt="" className="event-image" />
      <div className="event-location">{props.location}</div>
    </div>
  );
}
