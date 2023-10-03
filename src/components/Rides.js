import React from "react";

function Rides() {
    return (
        <div>
            <main>
                <h1>Rides</h1>
                <form method="POST" action="/rides">
                    <div>
                        <label>Photos: </label>
                        <input id='photos' name='photos' />
                    </div>
                    <div>
                        <label>Brand: </label>
                        <input id='brand' name='brand' required />
                    </div>
                    <div>
                        <label>Model: </label>
                        <input id='model' name='model' required />
                    </div>
                    <div>
                        <label>Year: </label>
                        <input id='year' name='year' required />
                    </div>
                    <div>
                        <label>Type: </label>
                        <input id='type' name='type' required />
                    </div>
                    <div>
                        <label>Engine: </label>
                        <input id='engine' name='engine' required />
                    </div>
                    <div>
                        <label>Drivetrain: </label>
                        <input id='drivetrain' name='drivetrain' required />
                    </div>
                    <div>
                        <label>Owner: </label>
                        <input id='owner' name='owner' required />
                    </div>
                </form>
                <input type="submit" value="Add Ride" />
            </main>
        </div>
    )
}

export default Rides;