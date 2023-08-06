import './style.css';
import location from './tftlocation.jpg';

export function contact() {

    const contactContent = document.createElement("div");

    contactContent.id = "contact";
    contactContent.innerHTML = "Contact Us! <br>";
    contactContent.innerHTML += "Twitch: twitch.tv/k3soju <br>";
    contactContent.innerHTML += "Location: TFT Carousel <br>";

    const locationImg = new Image();
    locationImg.src = location;
    locationImg.setAttribute('width', '80%');
    locationImg.setAttribute('height', 'auto');
    contactContent.appendChild(locationImg);

    contactContent.classList.add("hidden");
    contactContent.classList.add("contact-contents");

    return contactContent;
}