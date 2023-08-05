import './style.css';

export function contact() {
    const contactContent = document.createElement("div");
    contactContent.id = "contact";
    contactContent.innerText = "Contact Us! Details blah blah";
    contactContent.classList.add("hidden");
    contactContent.classList.add("contents");

    return contactContent;
}