import React from "react";
import TuitsList from "../tuit-list";
import WhatsHappening from "./whats-happening";
const HomeComponent = () => {
    return(
        <>
            <div className="container border p-0 rounded">
                <h3 className="ms-2">Home</h3>
                <WhatsHappening/>
                <TuitsList/>
            </div>
        </>
    );
};
export default HomeComponent;
