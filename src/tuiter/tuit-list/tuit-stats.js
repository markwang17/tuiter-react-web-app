import React, { useState } from "react";

const TuitStats = ({ post }) => {
    let [likes, setLikes] = useState(post.likes);
    let [liked, setLiked] = useState(post.liked);

    const likeHandler = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }
    }

    return (
        <div className="d-flex justify-content-between ms-2 mb-1">
            <div className="text-secondary float-start">
                <a href="#" className="text-decoration-none">
                    <i className="bi bi-chat text-secondary"></i>
                </a>&nbsp;&nbsp;{post.replies}
            </div>
            <div className="text-secondary float-start">
                <a href="#" className="text-decoration-none">
                    <i className="bi bi-arrow-repeat text-secondary"></i>
                </a>&nbsp;&nbsp;{post.retuits}
            </div>
            <div className="text-secondary float-start">
                <a href="#" className="text-decoration-none">
                    {liked && <i className="bi bi-heart-fill text-secondary text-danger" onClick={likeHandler}></i>}
                    {!liked && <i className="bi bi-heart text-secondary" onClick={likeHandler}></i>}
                </a>&nbsp;&nbsp;{likes}
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
