import './style.css';
import sojuImg from './K3soju.png';

export function home() {
    
    const homeContent = document.createElement("div");
    homeContent.id = "home";

    homeContent.classList.add("home-contents");
    homeContent.innerText = "Welcome to Teamfood Tactics! We have tasty dishes and beverages inspired by your favourite TFT streamers and traits!";
    homeContent.innerText += " We are the number one restaurant in the TFT galaxy and we are managed by the biggest TFT streamer Michael \"k3soju\" Zhang.";

    const homeImg = new Image();
    homeImg.src = sojuImg;
    homeImg.setAttribute('width', '400px');
    homeImg.setAttribute('height', '400px');
    homeContent.appendChild(homeImg);

    return homeContent;
}