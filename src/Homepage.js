import React from "react";
import "./Homepage.css";
import Sidenav from "./navigation/sidenav";
import Timeline from "./timeline/timeline";

function Homepage(){
    return (
        <div className="homepage">
            <div className="homepage_nav">
            <Sidenav />
            </div>
            <div className="homepage_timeline">
            <Timeline/>
            </div>
        </div>
    )
}

export default Homepage;