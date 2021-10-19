//Variables for toggling the cart
let cart_button = document.getElementById("cart_button");
let cart_modal = document.getElementById("cart_modal");
let close_modal = document.getElementById("close_modal");


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
        element.classList.add("close");
        element.style.display = "none";
        document.body.style.position = "relative";

    }

};


//Click events for buttons that toggle the cart modal display on/off
let toggleModalOnClick = () => {
    cart_button.addEventListener("click", () => {
        displayToggle(cart_modal);
    });

    close_modal.addEventListener("click", () => {
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

        let lang = document.getElementById("vanilla-i18n-toggler").value.toLowerCase();
      
        if(lang == "ro") {
            totalOnCartButton.innerHTML = "Coș gol"
        } else if (lang == "ru") {
            totalOnCartButton.innerHTML = "Пустая корзина"
        } else if (lang == "en") {
            totalOnCartButton.innerHTML = "Empty Cart"
        }


    } else {
        totalPrice.innerText = `${currentTotal},00 MDL`;
        totalOnCartButton.innerText = `${currentTotal} MDL`
    }


};



//Calling functions
toggleModalOnClick();
calculateTotal();