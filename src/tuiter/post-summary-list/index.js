import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostSummaryItem
    from "./post-summary-item";
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
    const {tuits, loading} = useSelector((state) => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    // const postsArray = useSelector(state => state.tuits)
    console.log(tuits)
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                !loading &&
                tuits.map(post => <PostSummaryItem
                        key={post._id} post={post}/>)
            }
        </ul>
    );
};
export default PostSummaryList;
