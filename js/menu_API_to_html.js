import {loadRestaurantMenu} from "./parse_restaurant_menu.js";

(async function parseFetchedRestaurantMenu() {
    let menuArray = []

    await fetch('restaurants_menu/mcdonalds.json')
        .then(response => response.json())
        .then(data => menuArray.push(data))
        loadRestaurantMenu(menuArray)
})();