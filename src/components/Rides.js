import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Rides() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await fetch("http://localhost:5000/rides");
        if (response.ok) {
          const data = await response.json();
          setRides(data);
        } else {
          console.error("Failed to fetch rides");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRides();
  }, []);

  return (
    <div>
      <h1>Rides</h1>
      <ul>
        {rides.map((ride) => (
          <li key={ride._id}>
            <img src={ride.photo} alt={`${ride.brand} ${ride.model}`} />
            <p>
              <strong>
                {ride.brand} {ride.model}
              </strong>{" "}
              ({ride.year})
            </p>
            <p>Type: {ride.type}</p>
            <p>Engine: {ride.engine}</p>
            <p>Drivetrain: {ride.drivetrain}</p>
            <p>Owner: {ride.owner}</p>
          </li>
        ))}
      </ul>
      <Link to="/rides/submit">
        <button>Add Yours</button>
      </Link>
    </div>
  );
}

export default Rides;
