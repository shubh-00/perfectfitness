import React from "react";
import aboutimage from "../images/about.png";

function About() {
    return (
        <div id="about">
            <div className="about-image">
                <img src={aboutimage} alt="" />
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT US</h1>
                <p>Perfect Fitness Center has been the authority in Fitness Since 2018.It Was The Place For Serious Fitness. Opened Long Before The Modern-Day Health Club Existed, the Gym Featured Homemade Equipment and a dedication to getting results. It Was an Instant Hit.Gym Quickly Became Known As “The Mecca Of Bodybuilding.In 2020,Gym Received Attention When It Was Featured In The Movie That Starred Hrithik Roshan And John Abraham. From That First Gym In Mumbai,Gym Has Become The Largest Co-Ed Gym Chain In India With Over 20+ Clubs in allover India.</p>
                <button>READ MORE</button>
            </div>
        </div>



    )
}

export default About;