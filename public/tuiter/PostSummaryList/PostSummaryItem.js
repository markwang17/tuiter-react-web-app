const PostSummaryItem = (post) => {
    return (`
        <li class="border-bottom d-flex list-group-item">
            <div>
                <div class="text-secondary">${post.topic}</div>
                <div>
                    <b>${post.userName} </b><i class="fas fa-check-circle"></i><span class="text-secondary"> - ${post.time}</span>
                </div>
                <div><b>${post.title}</b></div>
            </div>
            <img src=${post.image} class="rounded ms-auto m-2" style="width: 96px; height: 96px">
        </li>
    `);
}
export default PostSummaryItem