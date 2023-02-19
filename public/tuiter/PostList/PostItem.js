const PostLink = (post) => {
    let link = ``;
    if (post.linkTitle !== "") {
        link += `<div class="text-white">${post.linkTitle}</div>`
    }
    if (post.linkBody !== "") {
        link += `<div class="text-secondary">${post.linkBody}</div>`
    }
    if (post.link !== "") {
        link += `<div class="text-secondary"><i class="fas fa-link text-secondary mb-2"></i><a href=${post.link} class="text-decoration-none text-secondary">&nbsp;${post.link}</a></div>`
    }
    if (link !== "") {
        return `<img src=${post.postImage} class="img-fluid" style="border-top-left-radius: 1rem; border-top-right-radius: 1rem;"><div class="ms-1 p-2 border-top border-secondary">` + link + `</div>`
    }
    return `<img src=${post.postImage} class="img-fluid" style="border-radius: 1rem;">`;
}

const PostItem = (post) => {
    return (`
        <li class="border-bottom border-secondary d-flex list-group-item">
            <div class="row">
        
                <div class="col-1">
                    <img src=${post.userIcon} class="rounded-circle mt-1" style="width: 48px">
                </div>
        
                <div class="col-11">
                    <div class="ms-2">
                        <div class="d-flex">
                            <div>
                                <span class="text-white fw-bold">${post.userName}</span> <i class="fas fa-check-circle text-white"></i><span class="text-secondary">&nbsp;@${post.handle} · ${post.time}</span>
                            </div>
                                <a href="#" class="ms-auto me-1"><i class="fas fa-ellipsis-h text-secondary"></i></a>
                        </div>
                        <div class="text-white mb-2">${post.postText}</div>
            
                        <div class="border rounded-4 border-secondary mb-2">
                            ${PostLink(post)}
                        </div>
            
                    </div>
                    <div class="d-flex justify-content-between ms-2 mb-1">
                        <div class="text-secondary float-start">
                            <a href="#" class="text-decoration-none">
                                <i class="far fa-comment text-secondary"></i>
                            </a>&nbsp;${post.stats.comment}
                        </div>
                        <div class="text-secondary float-start">
                            <a href="#" class="text-decoration-none">
                                <i class="fas fa-retweet text-secondary"></i>
                            </a>&nbsp;${post.stats.retweet}
                        </div>
                        <div class="text-secondary float-start">
                            <a href="#" class="text-decoration-none">
                                <i class="far fa-heart text-secondary"></i>
                            </a>&nbsp;${post.stats.like}
                        </div>
                        <div class="text-secondary float-start">
                            <a href="#" class="text-decoration-none">
                                <i class="fas fa-external-link-alt text-secondary"></i>
                            </a>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </li>
    `);
}
export default PostItem