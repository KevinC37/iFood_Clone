//Variables for toggling the cart
let cart_button = document.getElementById("cart_button");
let cart_modal = document.getElementById("cart_modal");
let close_modal = document.getElementById("close_modal");



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
    if(element.style.display == "none") {
        element.style.display = ""
        document.body.style.position = "fixed";

    } else {
        element.style.display = "none";
        document.body.style.position = "relative";

    }

};

//Click events for buttons that toggle the cart modal display on/off
let toggleModalOnClick = () => {
    cart_button.addEventListener("click", () => {
        displayToggle(cart_modal);
    });

    close_modal.addEventListener("click", (e) => {
        displayToggle(cart_modal);
    });
  
    cart_modal.addEventListener("click", (e) => {
        if (cart_modal === e.target) {
            displayToggle(cart_modal);  
        }
    })


};


//Removes item from the cart for which the "delete" button has been clicked
let removeItemFromCart = () => {
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
            }
        }
    });
}
}

//Calculates the total for items in cart
let calculateTotal = () => {
    let currentTotal = 0;

    for (let cost of Object.values(items_cost)) {
        currentTotal += Number.parseFloat(cost.innerHTML);
    }

    currentTotal += Number.parseFloat(delivery_cost.innerHTML);

    if(currentTotal == Number.parseFloat(delivery_cost.innerHTML)) {
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