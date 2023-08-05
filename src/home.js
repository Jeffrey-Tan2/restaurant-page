import './style.css';

export function home() {
    const homeContent = document.createElement("div");
    homeContent.innerText = "Welcome to Teamfood Tactics! We have tasty dishes inspired by your favourite TFT streamers and traits!";
    homeContent.id = "home";
    homeContent.classList.add("contents");

    return homeContent;
}