import {menuItemList} from "./menu_API_to_html.js"; //fetched menu items;
import {creatNewCartItem} from "./creatNewCartItem.js"; //pushes the menu item to cart
import {emptyCart} from "./components/cart_item_components.js";
import {itemAddedPopupWindow} from "./creatNewCartItem.js"

/*------------------------------------------------------------------------------------------------------

--------------------THE FUNCTION THAT INCREMENTS/DECREMENTS THE MENU ITEM COUNT-------------------------

-------------------------------------------------------------------------------------------------------*/
let food_tile_counter = document.getElementsByTagName("menu-item");

//minus button = document.getElementsByTagName("menu-item")[0].shadow.lastElementChild.lastElementChild.children[1].children[0];
//count = document.getElementsByTagName("menu-item")[0].shadow.lastElementChild.lastElementChild.children[1];
//plus button = document.getElementsByTagName("menu-item")[0].shadow.lastElementChild.lastElementChild.children[2];




(function incrementDecrementFoodTileItem() {
  for (let index in Object.keys(food_tile_counter)) {
    food_tile_counter[index].shadow.lastElementChild.lastElementChild.children[1].children[0].addEventListener("click", (e) => {
      let currentItemCount = food_tile_counter[index].shadow.lastElementChild.lastElementChild.children[1].children[1];

      currentItemCount.value == 1 ? e.preventDefault() : currentItemCount.value = Number(currentItemCount.value) - 1;
      food_tile_counter[index].shadow.lastElementChild.lastElementChild.children[1].children[1].value = currentItemCount.value;
    })
  }

  for (let index in Object.keys(food_tile_counter)) {
    food_tile_counter[index].shadow.lastElementChild.lastElementChild.children[1].children[2].addEventListener("click", (e) => {
      let currentItemCount = food_tile_counter[index].shadow.lastElementChild.lastElementChild.children[1].children[1];

      currentItemCount.value == 10 ? e.preventDefault() : currentItemCount.value = Number(currentItemCount.value) + 1;
      food_tile_counter[index].shadow.lastElementChild.lastElementChild.children[1].children[1].value = currentItemCount.value;

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




for (let index in Object.keys(food_tile_counter)) {
  food_tile_counter[index].shadow.lastElementChild.lastElementChild.children[1].children[3].addEventListener("click", () => {

    let itemToAdd = Object.values(food_tile_counter)[index].menuItem;

    cartNotEmpty();
    //pushes menu item to cart with count specified by user
    creatNewCartItem(cart_modal_items, itemToAdd, food_tile_counter[index].shadow.lastElementChild.lastElementChild.children[1].children[1].value ); 
    //adds the popup when an item is added (timeout 4 seconds)
    itemAddedPopupWindow( cartButton , itemToAdd, food_tile_counter[index].shadow.lastElementChild.lastElementChild.children[1].children[1].value );
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


document.getElementsByClassName("schedule")[0].addEventListener("click", () => {
  if(document.getElementsByClassName("schedule_box")[0].style.display == "none") {
    document.getElementsByClassName("schedule_box")[0].style.display = "flex"
  } else if(document.getElementsByClassName("schedule_box")[0].style.display == "flex") {
    document.getElementsByClassName("schedule_box")[0].style.display = "none";
  }
})