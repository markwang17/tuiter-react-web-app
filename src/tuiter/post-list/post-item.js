import React from "react";
const PostItem = (
    {
        post = {
            "_id": 123,
            "isRetweet": true,
            "retweetUserName": "Elon Musk",
            "isReply": false,
            "sourceTweet": {},
            "userIcon": "https://www.spacex.com/static/images/share.jpg",
            "userName": "SpaceX",
            "handle": "SpaceX",
            "time": "23h",
            "postText": "Dennis and Akiko Tito are the first two crewmembers on Starship’s second commercial spaceflight around the Moon → <a href=\"spacex.com/updates\">spacex.com/updates</a>",
            "postImage": "https://pbs.twimg.com/media/Fe3y1f9UYAA2G5S?format=jpg&name=medium",
            "stats": {
                "comment": "595",
                "retweet": "1,168",
                "like": "11.1k"
            }
        }
    }
) => {
    return(
        <li className="d-flex list-group-item rounded-0 border-start-0 border-end-0">
            <div className="row">

                <div className="col-1">
                    <div className="d-flex">{post.isRetweet && <i className="bi bi-arrow-repeat text-secondary ms-4"></i>}</div>
                    <img src={post.userIcon} className="rounded-circle mt-1" style={{width:48}}/>
                </div>

                <div className="col-11">
                    <div className="ms-2">
                        {post.isRetweet && <div className="text-secondary fw-bold"><small>{post.retweetUserName}&nbsp;Retweeted</small></div>}
                        <div className="d-flex">
                            <div>
                                <span className="fw-bold">{post.userName}</span> <i
                                className="bi bi-check-circle-fill text-primary"></i><span
                                className="text-secondary">&nbsp;@{post.handle} · {post.time}</span>
                            </div>
                            <a href="#" className="ms-auto me-1"><i
                                className="bi bi-three-dots text-secondary"></i></a>
                        </div>
                        <div className="mb-2">{post.postText}</div>

                        <div className="border rounded-4 mb-2">
                            {!post.isReply && <img src={post.postImage} className="img-fluid rounded-4"/>}
                            {post.isReply &&
                                <div>
                                    <div className="d-flex">
                                    <div className="m-2 ms-3">
                                        <img src={post.sourceTweet.userIcon} className='rounded-circle' style={{width:24}}/>
                                        <span className="fw-bold ms-1">{post.sourceTweet.userName}</span> <i
                                        className="bi bi-check-circle-fill text-primary"></i><span
                                        className="text-secondary">&nbsp;@{post.sourceTweet.handle} · {post.sourceTweet.time}</span>
                                        <div className="mb-2 mt-1">{post.sourceTweet.postText}</div>
                                    </div>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                    <div className="d-flex justify-content-between ms-2 mb-1">
                        <div className="text-secondary float-start">
                            <a href="#" className="text-decoration-none">
                                <i className="bi bi-chat text-secondary"></i>
                            </a>&nbsp;&nbsp;{post.stats.comment}
                        </div>
                        <div className="text-secondary float-start">
                            <a href="#" className="text-decoration-none">
                                <i className="bi bi-arrow-repeat text-secondary"></i>
                            </a>&nbsp;&nbsp;{post.stats.retweet}
                        </div>
                        <div className="text-secondary float-start">
                            <a href="#" className="text-decoration-none">
                                <i className="bi bi-heart text-secondary"></i>
                            </a>&nbsp;&nbsp;{post.stats.like}
                        </div>
                        <div className="text-secondary float-start">
                            <a href="#" className="text-decoration-none">
                                <i className="bi bi-box-arrow-up text-secondary"></i>
                            </a>
                        </div>
                        <div></div>
                    </div>
                    {post.isRetweet && <div className="mt-3 mb-2"><a href="#" className="text-decoration-none">Show this thread</a></div>}
                </div>
            </div>
        </li>
    );
};
export default PostItem;
