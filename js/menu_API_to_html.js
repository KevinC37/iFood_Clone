import {pushRestaurantMenuToHTML} from "./parse_restaurant_menu.js";
import { foodCategories } from "./parse_restaurant_menu.js";
import {pushRestauranInformationToHTML} from "./parse_restaurant_menu.js";
export let menuItemList = {};

(async function fetchAndPushMenuToHTML() {

        let response = await fetch('restaurants_menu/mcdonalds.json')
        let restaurantMenu = await response.json()
        
        Object.assign(menuItemList, restaurantMenu);
        pushRestaurantMenuToHTML(restaurantMenu);
        foodCategories(restaurantMenu);
})();

(async function fetchRestaurantInformation() {
        await fetch('js/restaurants/mcdonalds.json')
        .then(response => response.json())
        .then(data => pushRestauranInformationToHTML(data));

 
})();


