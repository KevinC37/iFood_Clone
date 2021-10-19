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
      food_tile_counter[index].menuItem.count = currentItemCount.value;
    })
  }

  for (let index in Object.keys(food_tile_counter)) {
    food_tile_counter[index].shadow.lastElementChild.lastElementChild.children[1].children[2].addEventListener("click", (e) => {
      let currentItemCount = food_tile_counter[index].shadow.lastElementChild.lastElementChild.children[1].children[1];

      currentItemCount.value == 10 ? e.preventDefault() : currentItemCount.value = Number(currentItemCount.value) + 1;
      food_tile_counter[index].shadow.lastElementChild.lastElementChild.children[1].children[1].value = currentItemCount.value;
      food_tile_counter[index].menuItem.count = currentItemCount.value;

    })
  }
})();


/*------------------------------------------------------------------------------------------------------

----------------------------------THE FUNCTION THAT ADDS ITEMS TO CART----------------------------------

-------------------------------------------------------------------------------------------------------*/

let cart_modal_items = document.getElementById("all_cart_items");
let empty_cart = document.getElementsByTagName("empty-cart");
let cartButton = document.getElementById("cart_button");

/*------------------------------------------------------------------------------------------------------

----------------------------FUNCTION THAT PUSHES CART ITEMS TO LOCAL STORAGE----------------------------

-------------------------------------------------------------------------------------------------------*/


document.getElementById("continue_to_checkout").addEventListener("click", e => {
  let cartItems = document.getElementsByTagName("cart-item-component");
  
    let cart = {};
    for(let k of cartItems) {
     cart[k.menuItem.name] = k.menuItem;
    }
  
    globalThis.localStorage.setItem("order-items", JSON.stringify(cart));
    window.location.pathname = "checkout/orders.html"
  })
  try{
  
    // let orderItems = JSON.parse(globalThis.localStorage.getItem("cart-items"));
    window.onload = (function loadCartOnRefresh() {
    let orderItems = JSON.parse(globalThis.localStorage.getItem("cart-items"));
      // console.log(orderItems);
      for(let k in orderItems) {
        creatNewCartItem(cart_modal_items, orderItems[k], orderItems[k].count);
       }
    })();
  
  
  
  } catch(e) {
    console.log(e);
  }

function cartItems() {
  let cartItems = {}

      for(let k of document.getElementsByTagName("cart-item-component")) {
        cartItems[k.menuItem.name] = k.menuItem;
        cartItems[k.menuItem.name].count = k.count;
        globalThis.localStorage.setItem("cart-items", JSON.stringify(cartItems));
      }

      let localStorage = JSON.parse(globalThis.localStorage.getItem("cart-items"));
      console.log(cartItems);
}


for (let index in Object.keys(food_tile_counter)) {
  food_tile_counter[index].shadow.lastElementChild.lastElementChild.children[1].children[3].addEventListener("click", () => {
    let itemToAdd = Object.values(food_tile_counter)[index].menuItem;

    let item_list_modal = document.getElementsByTagName("cart-item-component");
    let localStorage = JSON.parse(globalThis.localStorage.getItem("cart-items"));


      let executed = true;
  


      
      try {
        for(let index in Object.values(localStorage)) {
          if(Object.values(localStorage)[index].name == itemToAdd.name) {
            let itemsCount = Number(item_list_modal[index].count);
            itemsCount += Number(itemToAdd.count);
    
            Object.values(localStorage)[index].count = itemsCount;
            item_list_modal[index].count = itemsCount;
            item_list_modal[index].shadow.children[1].children[0].children[0].children[0].innerHTML = itemsCount;
    
            executed = false;
      itemAddedPopupWindow( cartButton , itemToAdd, food_tile_counter[index].shadow.lastElementChild.lastElementChild.children[1].children[1].value );
  
            return;
          } 
       }
      } catch(e) {
        console.log(e);
      }
    
    

    cartNotEmpty();
    //adds the popup when an item is added (timeout 4 seconds)
    itemAddedPopupWindow( cartButton , itemToAdd, food_tile_counter[index].shadow.lastElementChild.lastElementChild.children[1].children[1].value );


      if(executed) {
            //pushes menu item to cart with count specified by user
            creatNewCartItem(cart_modal_items, itemToAdd, food_tile_counter[index].shadow.lastElementChild.lastElementChild.children[1].children[1].value ); 
       }
     
     cartItems();
     executed = true;
    
  })

}


//JSON.parse(globalThis.localStorage.getItem("cart-items")); 








/*------------------------------------------------------------------------------------------------------

----------------------------------THE FUNCTION THAT TOGGLES EMPTY CART----------------------------------

-------------------------------------------------------------------------------------------------------*/

let cart_footer = document.getElementById("cart_modal_footer");
let cart_body = document.getElementById("cart_modal_body");


(function emptyTheCart() {
  if(globalThis.localStorage.getItem("cart-items") == "[]") {
    cart_body.appendChild(new emptyCart());
    cart_footer.style.display = "none";
    cart_modal_items.style.display = "none";
    cartButton.classList.add("cart_is_empty");
  } else {
    cartButton.classList.remove("cart_is_empty");
  }
})();




 function cartNotEmpty() {
  for(let empty_cart_element of Object.values(empty_cart)) {

    empty_cart_element.remove();
    cartButton.classList.remove("cart_is_empty");

  }
  cart_modal_items.style.display = "flex";
  cart_footer.style.display = "";
}

let scheduler_today = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById("schedule");
let schedule_box = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById("schedule_box");
scheduler_today.addEventListener("click", () => {
  if(schedule_box.style.display == "none") {
    schedule_box.style.display = "flex"
  } else if(schedule_box.style.display == "flex") {
    schedule_box.style.display = "none";
  }
})

let maps = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById("restaurant.map").parentElement;
let modal_maps = document.getElementsByClassName("background_maps")[0];
let map_modal = document.getElementById("map_container");

maps.addEventListener("click", () => {
  modal_maps.style.display = "flex";
  modal_maps.style.zIndex = 3000; 
  modal_maps.style.position = "fixed";
  modal_maps.style.top = 50;
  modal_maps.style.left = 50;
})

modal_maps.addEventListener("click", (e) => {
  if(e.target === modal_maps) {
    modal_maps.style.display = "none";
  }
})


document.getElementById("close_map_btn").addEventListener("click", () => {
  modal_maps.style.display = "none";

})


