import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();

    // let [likes, setLikes] = useState(tuit.likes);
    // let [liked, setLiked] = useState(tuit.liked);
    //
    // const likeHandler = () => {
    //     if (liked) {
    //         setLiked(false);
    //         setLikes(likes - 1);
    //     } else {
    //         setLiked(true);
    //         setLikes(likes + 1);
    //     }
    // }

    return (
        <div className="d-flex justify-content-between ms-2 mb-1">
            <div className="text-secondary float-start">
                <a href="#" className="text-decoration-none">
                    <i className="bi bi-chat text-secondary"></i>
                </a>&nbsp;&nbsp;{tuit.replies}
            </div>
            <div className="text-secondary float-start">
                <a href="#" className="text-decoration-none">
                    <i className="bi bi-arrow-repeat text-secondary"></i>
                </a>&nbsp;&nbsp;{tuit.retuits}
            </div>
            <div className="text-secondary float-start">
                <a href="#" className="text-decoration-none">
                    {/*{liked && <i className="bi bi-heart-fill text-secondary text-danger" onClick={likeHandler}></i>}*/}
                    {tuit.liked && <i className="bi bi-heart-fill text-secondary text-danger" onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        liked: !tuit.liked,
                        likes: tuit.likes - 1
                    }))}></i>}
                    {/*{!liked && <i className="bi bi-heart text-secondary" onClick={likeHandler}></i>}*/}
                    {!tuit.liked && <i className="bi bi-heart text-secondary" onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        liked: !tuit.liked,
                        likes: tuit.likes + 1
                    }))}></i>}
                </a>&nbsp;&nbsp;{tuit.likes}
            </div>
            <div className="text-secondary float-start">
                <a href="#" className="text-decoration-none">
                    <i className="bi bi-box-arrow-up text-secondary"></i>
                </a>
            </div>
            <div></div>
        </div>
    )
}

export default TuitStats;
