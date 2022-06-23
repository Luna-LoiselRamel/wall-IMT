stickyNavBar();

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    stickyNavBar()
};


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavBar() {
    // Get the navbar
    var navbar = document.getElementById("navBar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}