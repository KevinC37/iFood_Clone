import { itemComponent } from "./components/cart_item_components.js";


export function creatNewCartItem(HTMLContainer, menuItem, count) {
    let newItem = new itemComponent(menuItem, count);

    HTMLContainer.appendChild(newItem);
}

