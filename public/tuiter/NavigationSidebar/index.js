// const NavigationSidebar = () => {
//     return(`
//    <div class="list-group">
//      <a class="list-group-item" href="/public">
//        <i class="fab fa-twitter"></i></a>
//
//      <a class="list-group-item" href="#">
//        <i class="fas fa-home"></i><span class="d-none d-xl-inline-block">&nbspHome</span></a>
//
//      <a class="list-group-item" href="#">
//        <i class="fas fa-hashtag"></i><span class="d-none d-xl-inline-block">&nbspExplore</span></a>
//
//      <a class="list-group-item" href="#">
//        <i class="fas fa-bell"></i><span class="d-none d-xl-inline-block">&nbspNotifications</span></a>
//
//      <a class="list-group-item" href="#">
//        <i class="fas fa-envelope"></i><span class="d-none d-xl-inline-block">&nbspMessages</span></a>
//
//      <a class="list-group-item" href="#">
//        <i class="fas fa-bookmark"></i><span class="d-none d-xl-inline-block">&nbspBookmarks</span></a>
//
//      <a class="list-group-item" href="#">
//        <i class="fas fa-list"></i><span class="d-none d-xl-inline-block">&nbspLists</span></a>
//
//      <a class="list-group-item" href="#">
//        <i class="fas fa-user"></i><span class="d-none d-xl-inline-block">&nbspProfiles</span></a>
//
//      <a class="list-group-item" href="#">
//        <span class="fa-stack" style="vertical-align: top; font-size: 0.625em">
//          <i class="fas fa-circle fa-stack-2x"></i>
//          <i class="fas fa-ellipsis-h fa-stack-1x" style="color: white"></i>
//        </span><span class="d-none d-xl-inline-block">&nbspMore</span></a>
//
//        <!-- continue rest of list, e.g.,
//             Home, Explore, Notifications,  Messages, etc. -->
//    </div>
//    <div class="d-grid mt-2">
//      <a href="tweet.html"
//         class="btn btn-primary btn-block rounded-pill">
//         Tweet</a>
//    </div>
//  `);
// }

const ActiveListGroupItem = (active, target) => {
    if (active === target) {
        return `active`
    }
    else {
        return ``
    }
}

const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/public">
       <i class="fab fa-twitter"></i></a>
       
     <a class="list-group-item ${ActiveListGroupItem(active, "home")}" href="../HomeScreen/index.html">
       <i class="fas fa-home"></i><span class="d-none d-xl-inline-block">&nbspHome</span></a>
       
     <a class="list-group-item ${ActiveListGroupItem(active, "explore")}" href="../ExploreScreen/index.html">
       <i class="fas fa-hashtag"></i><span class="d-none d-xl-inline-block">&nbspExplore</span></a>
       
     <a class="list-group-item ${ActiveListGroupItem(active, "notifications")}" href="#">
       <i class="fas fa-bell"></i><span class="d-none d-xl-inline-block">&nbspNotifications</span></a>
       
     <a class="list-group-item ${ActiveListGroupItem(active, "messages")}" href="#">
       <i class="fas fa-envelope"></i><span class="d-none d-xl-inline-block">&nbspMessages</span></a>
       
     <a class="list-group-item ${ActiveListGroupItem(active, "bookmarks")}" href="#">
       <i class="fas fa-bookmark"></i><span class="d-none d-xl-inline-block">&nbspBookmarks</span></a>
       
     <a class="list-group-item ${ActiveListGroupItem(active, "lists")}" href="#">
       <i class="fas fa-list"></i><span class="d-none d-xl-inline-block">&nbspLists</span></a>
     
     <a class="list-group-item ${ActiveListGroupItem(active, "profiles")}" href="#">
       <i class="fas fa-user"></i><span class="d-none d-xl-inline-block">&nbspProfiles</span></a>
     
     <a class="list-group-item ${ActiveListGroupItem(active, "more")}" href="#">
       <span class="fa-stack" style="vertical-align: top; font-size: 0.625em">
         <i class="fas fa-circle fa-stack-2x"></i>
         <i class="fas fa-ellipsis-h fa-stack-1x" style="color: white"></i>
       </span><span class="d-none d-xl-inline-block">&nbspMore</span></a>

       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}

export default NavigationSidebar;
