import React from "react";

function Update() {
    return (
        <div>
            <main>
                <form>
                    <label>Brand:</label><br />
                    <input type="text" id="brand" name="brand"></input><br />
                    <label>Model:</label><br />
                    <input type="model" id="model" name="model"></input><br />
                    <label>Year:</label><br />
                    <input type="text" id="year" name="year"></input><br />
                    <label>Type:</label><br />
                    <input type="text" id="type" name="type"></input><br />
                    <label>Drive Train:</label><br />
                    <input type="text" id="driveTrain" name="driveTrain"></input><br />
                    <label>Owner:</label><br />
                    <input type="text" id="owner" name="owner"></input><br />
                    <label>What makes your car Special:</label><br />
                    <input type="text" id="description" name="description" style={{height:'100px', width: '20%', marginBottom: '10px'}}></input><br />
                </form>
                <button>Update</button>
            </main>
        </div>
    )
}

export default Update;