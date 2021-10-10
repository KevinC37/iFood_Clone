import { itemComponent } from "./components/cart_item_components.js";
import {itemAddedPopup} from "./components/item_added_popup.js";

export function creatNewCartItem(HTMLContainer, menuItem, count) {
    let newItem = new itemComponent(menuItem, count);

    HTMLContainer.appendChild(newItem);
}


export function itemAddedPopupWindow(HTMLContainer, menuItem, count) {
    let newItem = new itemAddedPopup(menuItem, count);
   
    let popup = HTMLContainer.appendChild(newItem);
    console.log(count);
    setTimeout(() => {
        popup.remove();
    }, 4000);
}

