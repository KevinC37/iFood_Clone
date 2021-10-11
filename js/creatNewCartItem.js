import {
    itemComponent
} from "./components/cart_item_components.js";
import {
    itemAddedPopup
} from "./components/item_added_popup.js";
import {
    editCart
} from "./components/edit_cart_modal.js";

export async function creatNewCartItem(HTMLContainer, menuItem, count) {
    let newItem = new itemComponent(menuItem, count);


    await HTMLContainer.appendChild(newItem);

    let menuItemsCart = document.getElementsByTagName("cart-item-component");

    function updateTotalPrice() {
        let buttonPrice = document.getElementById("cart_button_price");
        let modalPrice = document.getElementById("cart_modal_total_price");
        let deliveryCost = document.getElementById("cart_modal_delivery_price").innerHTML.replace(/,00 MDL/gi, "");

        for (let k of Object.values(menuItemsCart)) {
            buttonPrice.innerHTML = Number(k.count) * Number(k.menuItem.price) + Number(deliveryCost) + " MDL";
            modalPrice.innerHTML = Number(k.count) * Number(k.menuItem.price) + Number(deliveryCost) + ",00 MDL";

        }
    }



    updateTotalPrice();


    for (let i = 0; i < Object.values(menuItemsCart).length; i++) {
        let editButton = menuItemsCart[i].shadow.children[1].children[1].children[0];


        editButton.addEventListener("click", () => {
            let edit = new editCart(menuItem, menuItemsCart[i].count);
            document.body.appendChild(edit);



            let increment = edit.shadow.getElementById("increment");
            let decrement = edit.shadow.getElementById("decrement");
            let currentCount = edit.shadow.getElementById("count");
            let currentPrice = edit.shadow.getElementById("edit_modal_total_price");

            let finishEditBtn = edit.shadow.getElementById("finish_edit_button");
            let editModalBody = document.getElementsByTagName("cart-item-component-edit");

            let editModalBackground = editModalBody[0].shadow.children[1];
            let closeEditModalBtn = editModalBody[0].shadow.children[1].children[0].children[1].children[0].children[1];


            (function toggleModal() {
                //closes edit modal when user clicks on close icon
                closeEditModalBtn.addEventListener("click", () => {
                    for (let k of Object.values(editModalBody)) {
                        k.remove();
                    }
                })

                //closes edit modal when user clicks on background
                editModalBackground.addEventListener("click", (e) => {
                    if (e.target === editModalBackground) {
                        for (let k of Object.values(editModalBody)) {
                            k.remove();
                        }
                    }

                })

            })();

            //updates the pricing and closes edit modal when user clicks on add item to cart
            finishEditBtn.addEventListener("click", () => {
                menuItemsCart[i].count = currentCount.innerHTML;
                //update count for edited item
                menuItemsCart[i].shadow.children[1].children[0].children[0].children[0].innerHTML = currentCount.innerHTML;

                //update total price for edited item
                menuItemsCart[i].shadow.children[1].children[0].children[0].nextElementSibling.innerHTML = updatePrice().replace(/ L/gi, ",00 MDL");



                updateTotalPrice();
                for (let k of Object.values(editModalBody)) {
                    k.remove();
                }
            })




            function updatePrice() {
                let itemPrice = menuItemsCart[i].menuItem.price;
                return currentPrice.innerHTML = Number(itemPrice) * Number(currentCount.innerHTML) + " L";
            }

            function limitCounter() {
                if (Number(currentCount.innerHTML) > 10) {
                    currentCount.innerHTML = 10;
                } else if (Number(currentCount.innerHTML) < 1) {
                    currentCount.innerHTML = 1;
                }
            };

            if (editModalBody.length > 0) {
                increment.addEventListener("click", (e) => {
                    limitCounter();
                    currentCount.innerHTML == 10 ? e.preventDefault() : currentCount.innerHTML = Number(currentCount.innerHTML) + 1;
                    updatePrice();
                })


                decrement.addEventListener("click", (e) => {
                    limitCounter();
                    currentCount.innerHTML == 1 ? e.preventDefault() : currentCount.innerHTML = Number(currentCount.innerHTML) - 1;
                    updatePrice()
                })
            }


        })




    }



}


export function itemAddedPopupWindow(HTMLContainer, menuItem, count) {
    let newItem = new itemAddedPopup(menuItem, count);

    let popup = HTMLContainer.appendChild(newItem);

    setTimeout(() => {
        popup.remove();
    }, 4000);
}