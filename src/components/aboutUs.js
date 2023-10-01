import React from "react";

function AboutUs() {
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to Car Hub</p>
            <p>Feel free to explore our website and learn more about us</p>

            <table style={{ border: "1px solid black", width: "500px", height: "700px" }}>
                <tr>
                    <td style={{ border: "1px solid black" }}>
                        <img src="image1.jpg" alt="Image 1" />
                    </td>
                    <td style={{ border: "1px solid black" }}>
                        <img src="image2.jpg" alt="Image 2" />
                    </td>
                </tr>
                <tr>
                    <td style={{ border: "1px solid black" }}>
                        <img src="image3.jpg" alt="Image 3" />
                    </td>
                    <td style={{ border: "1px solid black" }}>
                        <img src="image4.jpg" alt="Image 4" />
                    </td>
                </tr>
                <tr>
                    <td style={{ border: "1px solid black" }}>
                        <img src="image5.jpg" alt="Image 5" />
                    </td>
                    <td style={{ border: "1px solid black" }}>
                        <img src="image6.jpg" alt="Image 6" />
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default AboutUs;