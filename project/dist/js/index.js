

const menuList = document.querySelector(".menu-list");
const sideThing = document.querySelector(".side-thing");
const menuButton = document.querySelector(".menu-button");
const mediaLinks = document.querySelector(".media-links");

let menuOpen = false;



menuButton.addEventListener("click", () => {
    console.log("Hey");

    if (!menuOpen) {
        menuList.classList.add("open");
        sideThing.classList.add("open");
        //mediaLinks.classList.add("open");
        menuOpen = true;
    } else {
        menuList.classList.remove("open");
        sideThing.classList.remove("open");
        //mediaLinks.classList.remove("open");
        menuOpen = false;
    }
})