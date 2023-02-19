const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item">
    <div class="d-flex align-items-center">
        <img src=${who.avatarIcon} class="rounded-circle me-3" style="width: 48px">
        <div>
            <div>
                <b>${who.userName}&nbsp</b><i class="fas fa-check-circle"></i>
            </div>
            <div>@${who.handle}</div>
        </div>
        <button class="btn btn-primary rounded-pill ms-auto">Follow</button>
    </div>
    </li>
    `);
}
export default WhoToFollowListItem