import './style.css';

export function menu() {
    const menuContent = document.createElement("div");
    menuContent.id = "menu";
    menuContent.innerText = "K3Soju special, Milk dessert, Prestivent pasta, Bruiser brunch, Piltover pancakes, Noxus noodles"
    menuContent.classList.add("hidden");
    menuContent.classList.add("contents");

    return menuContent;
}