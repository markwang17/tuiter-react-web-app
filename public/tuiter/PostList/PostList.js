import PostItem from "./PostItem.js"
import PostItems from "./Posts.js"

const PostList = () => {
    return (`
       <ul class="list-group">
       ${
        PostItems.map(post => {
            return(PostItem(post));
        }).join('')
    }
       </ul>
    `);
}
export default PostList