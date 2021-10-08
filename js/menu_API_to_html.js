import {pushRestaurantMenuToHTML} from "./parse_restaurant_menu.js";


(async function fetchAndPushMenuToHTML() {

        let response = await fetch('restaurants_menu/mcdonalds.json')
        let restaurantMenu = await response.json()
    

         pushRestaurantMenuToHTML(restaurantMenu);


})();


