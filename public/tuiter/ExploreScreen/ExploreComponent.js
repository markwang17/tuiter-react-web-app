import PostSummaryList from "../PostSummaryList/index";

const ExploreComponent = () => {
    return(`
           <div class="row">
                       <!-- search field and cog -->
                <div class="d-flex align-items-center mb-2">
                <div class="search flex-grow-1">
                    <i class="fa fa-search" style="position: absolute; width: 2.375rem; height: 2.375rem; line-height: 2.375rem; text-align: center;"></i>
                    <input type="text" class="form-control rounded-pill" placeholder="Search Tuiter" style="padding-left: 2.375rem">
                </div>
                <i class="fa fa-cog ms-auto fa-lg text-primary pt-2 pb-2 ps-3"></i>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For&nbspyou</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
                      <!-- tabs -->
           </ul>
           <!-- image with overlaid text -->
           <div class="mb-2" style="position: relative;">
               <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class="img-fluid">
               <p class="text-white fs-2" style="position: absolute; bottom: -8px; left: 8px;"><b>SpaceX's Starship</b></p>
           </div>
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
