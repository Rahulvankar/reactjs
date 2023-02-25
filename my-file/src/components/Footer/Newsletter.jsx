import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
    <div className="app__newsletter">
        <div className="app__newsletter-heading">
            <SubHeading title="Newsletter" />
            <h1 className="headtext__cormorant ">Our Newsletter</h1>
            <p className="p__opensans">And Never Miss Latest Updates</p>
        </div>
        <div className="app__newsletter-input flex__center">
            <input type="email" placeholder="Enter Your E-mail Address" />
            <button className="custom__button">Submit</button>
        </div>
    </div>
);

export default Newsletter;
