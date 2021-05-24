

const menuList = document.querySelector(".menu-list");
const sideThing = document.querySelector(".side-thing");
const menuButton = document.querySelector(".menu-button");
const mediaLinks = document.querySelector(".media-links");
const menu = document.querySelector(".menu");

let menuOpen = false;



menuButton.addEventListener("click", () => {
    console.log("Hey");

    if (!menuOpen) {
        menuList.classList.add("open");
        sideThing.classList.add("open");
        menu.classList.add("open");
        
        try {
            mediaLinks.classList.add("open");
        } catch (e) {

        }
        menuOpen = true;
    } else {
        menuList.classList.remove("open");
        sideThing.classList.remove("open");
        menu.classList.remove("open");
        //mediaLinks.classList.remove("open");

        try {
            mediaLinks.classList.remove("open");
        } catch (e) {

        }
        menuOpen = false;
    }
})