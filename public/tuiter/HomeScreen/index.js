import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js"
import PostList from "../PostList/PostList.js"

function exploreComponent() {
    $('#wd-home-screen').append(`
         <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
<!--    <h3>NavigationSidebar</h3>-->
    ${NavigationSidebar("home")}
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
<!--    <h3>ExploreComponent</h3>-->
    ${PostList()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
<!--    <h3>PostSummaryList  </h3>-->
    ${PostSummaryList()}
    
   </div>
  </div>

   `);
}

$(exploreComponent);
