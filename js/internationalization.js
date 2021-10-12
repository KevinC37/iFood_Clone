let currentLanguage = document.getElementsByClassName("language_pointer")[0];
let foodDescriptionNodes = document.querySelectorAll(".food_description");
let menuItems = document.getElementsByTagName("menu-item");





function getComboA(selectObject) {
    var value = selectObject.value;
    console.log(value);
}



currentLanguage.addEventListener("change", (e) => {
    updateFoodDescription();
})

window.onload = function updateLang() {
    updateFoodDescription();
}


function updateFoodDescription() {
    for (let k in Object.values(menuItems)) {
        if (document.getElementsByClassName("language_pointer")[0].value.toLowerCase() == "ro") {
            menuItems[k].shadow.lastElementChild.children[1].children[1].children[1].innerHTML =
                menuItems[k].menuItem.description_ro;
            document.getElementsByTagName("menu-item")[k].shadow.lastElementChild.children[2].children[3].children[1].children[0].innerHTML = "Adaugă";

            if(document.getElementById("cart_button_price").innerHTML == "Пустая корзина" || document.getElementById("cart_button_price").innerHTML == "Empty cart") {
                document.getElementById("cart_button_price").innerHTML = "Coș gol";
            }

            try {
                document.getElementsByTagName("empty-cart")[0].shadowRoot.lastElementChild.children[1].innerHTML = "Coșul tău este gol!";
                document.getElementsByTagName("empty-cart")[0].shadowRoot.lastElementChild.lastElementChild.innerHTML = "Adaugă produse în coș pentru a continua cumpărăturile.";
            } catch (e) {
               
            }
        } else if (document.getElementsByClassName("language_pointer")[0].value.toLowerCase() == "ru") {
            menuItems[k].shadow.lastElementChild.children[1].children[1].children[1].innerHTML =

                menuItems[k].menuItem.description_ru;

            document.getElementsByTagName("menu-item")[k].shadow.lastElementChild.children[2].children[3].children[0].innerHTML = "Добавить";

            if(document.getElementById("cart_button_price").innerHTML == "Coș gol" || document.getElementById("cart_button_price").innerHTML == "Empty cart") {
                document.getElementById("cart_button_price").innerHTML = "Пустая корзина";
            }

            try {
                document.getElementsByTagName("empty-cart")[0].shadowRoot.lastElementChild.children[1].innerHTML = "Ваша корзина пуста!";
                document.getElementsByTagName("empty-cart")[0].shadowRoot.lastElementChild.lastElementChild.innerHTML = "Добавьте товары в корзину, чтобы продолжить покупки.";
            } catch (e) {
                
            }

        } else if (document.getElementsByClassName("language_pointer")[0].value.toLowerCase() == "en") {
            menuItems[k].shadow.lastElementChild.children[1].children[1].children[1].innerHTML =

                menuItems[k].menuItem.description_en;
            document.getElementsByTagName("menu-item")[k].shadow.lastElementChild.children[2].children[3].children[1].children[0].innerHTML = "Add";

            if(document.getElementById("cart_button_price").innerHTML == "Coș gol" || document.getElementById("cart_button_price").innerHTML == "Пустая корзина") {
                document.getElementById("cart_button_price").innerHTML = "Empty cart";
            }

            try {
                document.getElementsByTagName("empty-cart")[0].shadowRoot.lastElementChild.children[1].innerHTML = "Your cart is empty!";
                document.getElementsByTagName("empty-cart")[0].shadowRoot.lastElementChild.lastElementChild.innerHTML = "Add products to cart to continue shopping.";
            } catch (e) {
                ;
            }
        }

    }
}