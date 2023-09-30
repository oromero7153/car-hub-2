import React from "react";
import "./ridesExpanded.css"

function RidesExpanded() {
    return (
        <div>
            <main>
                <div className="car">
                    <img src="src/assets/rides_expanded/2023-mc20.jpg" />
                    <div className="car-data">
                        <h1>Maserati M20</h1>
                        <ul>
                            <li><b>Year:</b> 2023</li>
                            <li><b>Engine:</b> V6</li>
                            <li><b>Type:</b> Super Car</li>
                            <li><b>Drive Train:</b> RWD</li>
                            <li><b>Owner:</b> Richie Rich</li>
                        </ul>
                    </div>
                </div>
                <p className="paragraph-car">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                    pretium urna ipsum, ut consectetur ex feugiat id. Curabitur
                    venenatis. Cras enim purus, ultrices vitae mauris nec, euismod commodo sapien.
                    Integer pretium feugiat pretium.
                </p>
                <div className="button">
                    <button type="button">Update</button>
                    <button type="button">Delete</button>
                </div>
            </main>
        </div>

    )
};

export default RidesExpanded;