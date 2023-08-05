// Restaurant page

import './style.css';
import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

function title() {

    const title = document.createElement("h1");
    title.innerText = "Teamfood Tactics"
    title.classList.add('title');

    return title;

}

function tabs() {

    const tabs = document.createElement("div");
    const homeTab = document.createElement("button");
    const menuTab = document.createElement("button");
    const contactTab = document.createElement("button");
    tabs.classList.add('tabs');
    homeTab.innerText = "Home";
    menuTab.innerText = "Menu";
    contactTab.innerText = "Contact";
    homeTab.classList.add('active-tab');
    homeTab.addEventListener("click", () => {
        homeTab.classList.add('active-tab');
        menuTab.classList.remove('active-tab');
        contactTab.classList.remove('active-tab');
        homeE.classList.remove("hidden");
        menuE.classList.add("hidden");
        contactE.classList.add("hidden");
    })
    menuTab.addEventListener("click", () => {
        homeTab.classList.remove('active-tab');
        menuTab.classList.add('active-tab');
        contactTab.classList.remove('active-tab');
        menuE.classList.remove("hidden");
        homeE.classList.add("hidden");
        contactE.classList.add("hidden");
    })
    contactTab.addEventListener("click", () => {
        homeTab.classList.remove('active-tab');
        menuTab.classList.remove('active-tab');
        contactTab.classList.add('active-tab');
        contactE.classList.remove("hidden");
        homeE.classList.add("hidden");
        menuE.classList.add("hidden");
    })
    tabs.appendChild(homeTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);

    return tabs;

}

const content = document.getElementById("content");

content.appendChild(title());
content.appendChild(tabs());

content.appendChild(home());
content.appendChild(menu());
content.appendChild(contact());

const homeE = document.getElementById("home");
const menuE = document.getElementById("menu");
const contactE = document.getElementById("contact");