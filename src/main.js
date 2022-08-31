var elSiteHeaderToggleBtn = document.querySelector(".header-box-btn");
var elHeader = document.querySelector(".site-header");

elSiteHeaderToggleBtn.addEventListener("click", function(){
    elHeader.classList.toggle("site-header--open");
})