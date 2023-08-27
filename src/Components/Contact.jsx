import React from "react";

function Contact(){
    return(
        <div id="contact">
            <h1>Contact us</h1>
            <form>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Your email-id" required />
                <textarea placeholder="Write Your Message here" name="message"></textarea>
                <input type="submit" value="send" />
            </form>
            <p className="dss">Designed By- Shubham Kumar</p>

        </div>
    )
}

export default Contact ;