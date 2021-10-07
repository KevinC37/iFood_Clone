//Variables for toggling the cart
let cart_button = document.getElementById("cart_button");
let cart_modal = document.getElementById("cart_modal");
let close_modal = document.getElementById("close_modal");
let cart_icon = document.getElementById("cart_icon");
let cart_modal_body = document.getElementById("cart_modal_body");


//Variables for editing and/or removing the items from cart
let item_list_modal = document.getElementsByClassName(
    "cart_modal_item_list_template"
);
let edit_item_modal = document.getElementsByClassName("cart_modal_edit");
let delete_item_modal = document.getElementsByClassName("cart_modal_delete");



//Variables for calculating the total cost
let items_cost = document.getElementsByClassName("cart_modal_item_price");
let delivery_cost = document.getElementById("cart_modal_delivery_price");
let totalOnCartButton = document.getElementById("cart_button_price");
let totalPrice = document.getElementById("cart_modal_total_price");

//Checks if the display is set to none, and toggles the element's css display property
let displayToggle = (element) => {
    if (element.style.display == "none") {
        element.style.display = ""
        document.body.style.position = "fixed";

    } else {
        element.style.display = "none";
        document.body.style.position = "relative";

    }

};




let removeItemFromCart = () => {
//Removes item from the cart for which the "delete" button has been clicked
    for (let key in Object.entries(delete_item_modal)) {
        //Click event for remove food item from cart
        delete_item_modal[key].addEventListener("click", (e) => {
            for (let i = 0; i < item_list_modal.length; i++) {
                //Check if the parentElement contains the button clicked
                if (item_list_modal[i].contains(e.target)) {
                    //remove item from cart
                    item_list_modal[i].remove();
                    //recalculate total
                    calculateTotal();

                    //Controls the style of the cart (empty vs has items in it)
                    if (item_list_modal.length === 0) {

                        cart_modal.innerHTML = `
                    <div class="cart_modal_container">
                    <div class="cart_modal_header">
                      <span>Coșul meu</span>
                      <div id="close_modal" onclick="displayToggle(cart_modal)" class="close_icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="#E8EDF6"
                            fill-rule="evenodd"
                            d="M11.446 10l7.847 7.847c.39.39.386 1.028 0 1.413l-.033.034a.998.998 0 0 1-1.414-.001L10 11.446l-7.847 7.847c-.39.39-1.028.386-1.413 0l-.034-.033a.998.998 0 0 1 .001-1.413L8.553 10 .707 2.153a1.004 1.004 0 0 1 0-1.413L.74.706a.998.998 0 0 1 1.413.001L10 8.554 17.846.707a1.004 1.004 0 0 1 1.414 0l.033.033a.997.997 0 0 1 0 1.413L11.446 10z"
                          />
                        </svg>
                      </div>
                     </div>
                    
                    <div class="empty_cart_modal_container">
                        <img src="icons/empty_cart.svg" alt="">
                        <p class="cart_empty_title">Coșul tău este gol!</p>
                        <p class="empty_cart_message">Adaugă produse în coș pentru a continua cumpărăturile.</p>
                    </div>
                    
                    </div>`
                    
                    cart_button.style.background = "#fafafa";
                    totalOnCartButton.style.color = "#555555"
                    totalOnCartButton.style.fontWeight = "600";
                    cart_icon.setAttribute("src", "icons/cart_grey.svg")

                    } else {
                        cart_button.style.background = "#e1f5eb";
                        totalOnCartButton.style.color = "#19ac4b"
                        totalOnCartButton.style.fontWeight = "700";
                        cart_icon.setAttribute("src", "icons/cart_grey.svg")
                    }
                }
            }
        });
    }
}

//Click events for buttons that toggle the cart modal display on/off
let toggleModalOnClick = () => {
    cart_button.addEventListener("click", () => {
        displayToggle(cart_modal);
    });

    close_modal.addEventListener("click", (e) => {
        console.log(e.target)
        displayToggle(cart_modal);
    });

    cart_modal.addEventListener("click", (e) => {
        if (cart_modal === e.target) {
            displayToggle(cart_modal);
        }
    })


};



//Calculates the total for items in cart and applies changes to the cart total and cart modal total
let calculateTotal = () => {
    let currentTotal = 0;

    for (let cost of Object.values(items_cost)) {
        currentTotal += Number.parseFloat(cost.innerHTML);
    }

    currentTotal += Number.parseFloat(delivery_cost.innerHTML);

    if (currentTotal == Number.parseFloat(delivery_cost.innerHTML)) {
        totalPrice.innerText = `0,00 MDL`;
        totalOnCartButton.innerText = `Coș gol`

    } else {
        totalPrice.innerText = `${currentTotal},00 MDL`;
        totalOnCartButton.innerText = `${currentTotal} MDL`
    }


};

//Calling functions
toggleModalOnClick();
removeItemFromCart();
window.onload = calculateTotal();