import './style.css';
import sojuImg from './soju.png';
import pastaImg from './pasta.jpg';
import milkImg from './milk.jpg';
import saltImg from './salt.jpg';
import noodleImg from './noodles.png';
import brunchImg from './brunch.jpg';

export function menu() {

    const menuContent = document.createElement("div");
    menuContent.id = "menu";
    menuContent.classList.add("hidden");
    menuContent.classList.add("menu-contents");

    const item1 = document.createElement("div");
    item1.classList.add("menu-item");
    item1.innerText = "Soju Special: $10.50";
    const sojuItem = new Image();
    sojuItem.src = sojuImg;
    sojuItem.setAttribute('width', '200px');
    sojuItem.setAttribute('height', '200px');
    item1.appendChild(sojuItem); 
    menuContent.appendChild(item1);

    const item2 = document.createElement("div");
    item2.classList.add("menu-item");
    item2.innerText = "Prestivent Pasta: $20.00";
    const prestiventItem = new Image();
    prestiventItem.src = pastaImg;
    prestiventItem.setAttribute('width', '200px');
    prestiventItem.setAttribute('height', '200px');
    item2.appendChild(prestiventItem); 
    menuContent.appendChild(item2);

    const item3 = document.createElement("div");
    item3.classList.add("menu-item");
    item3.innerText = "Marvelous Milk: $5.00";
    const milkItem = new Image();
    milkItem.src = milkImg;
    milkItem.setAttribute('width', '200px');
    milkItem.setAttribute('height', '200px');
    item3.appendChild(milkItem); 
    menuContent.appendChild(item3);

    const item4 = document.createElement("div");
    item4.classList.add("menu-item");
    item4.innerText = "Setsuko Salt: $3.00";
    const saltItem = new Image();
    saltItem.src = saltImg;
    saltItem.setAttribute('width', '200px');
    saltItem.setAttribute('height', '200px');
    item4.appendChild(saltItem); 
    menuContent.appendChild(item4);

    const item5 = document.createElement("div");
    item5.classList.add("menu-item");
    item5.innerText = "Noxus Noodles: $15.50";
    const noodleItem = new Image();
    noodleItem.src = noodleImg;
    noodleItem.setAttribute('width', '200px');
    noodleItem.setAttribute('height', '200px');
    item5.appendChild(noodleItem); 
    menuContent.appendChild(item5);

    const item6 = document.createElement("div");
    item6.classList.add("menu-item");
    item6.innerText = "Bruiser Brunch: $20:00";
    const brunchItem = new Image();
    brunchItem.src = brunchImg;
    brunchItem.setAttribute('width', '200px');
    brunchItem.setAttribute('height', '200px');
    item6.appendChild(brunchItem); 
    menuContent.appendChild(item6);

    return menuContent;
}