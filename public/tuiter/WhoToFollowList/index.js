import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
       <ul class="list-group">
       <li class="list-group-item">
            <b>Who to follow</b>
       </li>
       ${
        who.map(one => {
            return(WhoToFollowListItem(one));
        }).join('')
    }
       </ul>
    `);
}
export default WhoToFollowList