import {pushRestaurantMenuToHTML} from "./parse_restaurant_menu.js";

export let menuItemList = {};

(async function fetchAndPushMenuToHTML() {

        let response = await fetch('restaurants_menu/mcdonalds.json')
        let restaurantMenu = await response.json()
        
        Object.assign(menuItemList, restaurantMenu);
        pushRestaurantMenuToHTML(restaurantMenu);

})();


