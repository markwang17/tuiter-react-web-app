import React from "react";
import PostList from "../post-list";
const HomeComponent = () => {
    return(
        <>
            <div className="container border p-0 rounded">
            <h3 className="ms-2">Home</h3>
            <ul className="nav nav-pills mb-2 pb-2 border-bottom">
                <li className="nav-item ms-2">
                    <a className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Following</a>
                </li>
            </ul>
            <div className="row">
                <div className="col-1">
                    <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" className="rounded-circle ms-2" style={{width: 48}}/>
                </div>
                <div className="col-11">
                    <div className="input-group ms-1">
                        <input className="p-3 border-0" placeholder="What's happening?" type="text"/></div>
                    <div className="d-flex align-items-center mb-2 ms-1">
                        <i className="bi bi-image ms-3"></i>
                        <i className="bi bi-emoji-smile ms-3"></i>
                        <i className="bi bi-geo-alt ms-3"></i>
                        <button className="btn btn-primary ms-auto rounded-pill me-3">Tweet</button>
                    </div>

                </div>
            </div>
            <PostList/>
            </div>
        </>
    );
};
export default HomeComponent;
