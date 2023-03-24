import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import TuitStats from "./tuit-stats";

const TuitItem = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item rounded-0 border-start-0 border-end-0">
            <div className="row">
                <div className="col-1">
                    <img src={"/images/" + post.image} className="rounded-circle mt-1" style={{width:48}}/>
                </div>

                <div className="col-11">
                    <div className="ms-2">
                        <div className="d-flex">
                            <div>
                                <span className="fw-bold">{post.userName}</span> <i
                                className="bi bi-check-circle-fill text-primary"></i><span
                                className="text-secondary">&nbsp;{post.handle} · {post.time}</span>
                            </div>
                            <i className="bi bi-x-lg ms-auto"
                               onClick={() => deleteTuitHandler(post._id)}></i>
                        </div>
                        <div className="mb-2">{post.tuit}</div>

                    </div>
                    <TuitStats post={post}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;
