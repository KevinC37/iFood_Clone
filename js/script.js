import {menuItemList} from "./menu_API_to_html.js"; //fetched menu items;
import {creatNewCartItem} from "./creatNewCartItem.js"; //pushes the menu item to cart
import {emptyCart} from "./components/cart_item_components.js";
import {itemAddedPopupWindow} from "./creatNewCartItem.js"

/*------------------------------------------------------------------------------------------------------

--------------------THE FUNCTION THAT INCREMENTS/DECREMENTS THE MENU ITEM COUNT-------------------------

-------------------------------------------------------------------------------------------------------*/
let food_tile_counter_minus = document.getElementsByClassName("food_tile_counter_minus");
let food_tile_counter_plus = document.getElementsByClassName("food_tile_counter_plus");
let food_tile_counter = document.getElementsByClassName("food_tile_counter");

(function incrementDecrementFoodTileItem() {
  for (let index in Object.keys(food_tile_counter_minus)) {
    food_tile_counter_minus[index].addEventListener("click", (e) => {
      let currentItemCount = food_tile_counter[index];

      currentItemCount.value == 1 ? e.preventDefault() : currentItemCount.value = Number(currentItemCount.value) - 1;
    })
  }

  for (let index in Object.keys(food_tile_counter_plus)) {
    food_tile_counter_plus[index].addEventListener("click", (e) => {

      let currentItemCount = food_tile_counter[index];

      currentItemCount.value == 10 ? e.preventDefault() : currentItemCount.value = Number(currentItemCount.value) + 1;
    })
  }
})();


/*------------------------------------------------------------------------------------------------------

----------------------------------THE FUNCTION THAT ADDS ITEMS TO CART----------------------------------

-------------------------------------------------------------------------------------------------------*/

let addButtons = document.getElementsByClassName("add_item_to_cart");
let cart_modal_items = document.getElementById("all_cart_items");
let empty_cart = document.getElementsByTagName("empty-cart");
let cartButton = document.getElementById("cart_button");
let header_container = document.getElementsByClassName("header_container")[0];

for (let index in Object.keys(addButtons)) {
  addButtons[index].addEventListener("click", () => {

    let itemToAdd = Object.values(menuItemList)[index];
    cartNotEmpty();
    //pushes menu item to cart with count specified by user
    creatNewCartItem(cart_modal_items, itemToAdd, food_tile_counter[index].value ); 
    itemAddedPopupWindow( cartButton , itemToAdd, food_tile_counter[index].value );
  })
}


/*------------------------------------------------------------------------------------------------------

----------------------------------THE FUNCTION THAT TOGGLES EMPTY CART----------------------------------

-------------------------------------------------------------------------------------------------------*/

let cart_footer = document.getElementById("cart_modal_footer");
let cart_body = document.getElementById("cart_modal_body");



(function emptyTheCart() {
  cart_body.appendChild(new emptyCart());
  cart_footer.style.display = "none";
  cart_modal_items.style.display = "none";
  cartButton.classList.add("cart_is_empty");

})();

 function cartNotEmpty() {
  for(let empty_cart_element of Object.values(empty_cart)) {

    empty_cart_element.remove();
    cartButton.classList.remove("cart_is_empty");

  }
  cart_modal_items.style.display = "flex";
  cart_footer.style.display = "";
}