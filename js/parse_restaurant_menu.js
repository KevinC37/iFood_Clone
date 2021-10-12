import {loadScript, script_js_path, internationalization_path} from "./load_scripts.js"; //function that loads another js file
import {menuItemComponent} from "./components/main_menu_component.js";



export function pushRestaurantMenuToHTML(restaurantMenu) {

    //Promise for finishing the add items to html task
    new Promise(function (resolve, reject) {

        let food_items_container = document.getElementById("food_items_container");

        for (let itemIndex in Object.keys(restaurantMenu)) {

            for (let obj of Object.entries(restaurantMenu)) {

                if (obj[itemIndex] && typeof obj[itemIndex] === 'object') {

                    //pushes menu items to html canvas
                    food_items_container.appendChild(new menuItemComponent(obj[itemIndex]))

                }

            }
        }


    }).finally(

        //once all menu items have been pushed, load the script that manages interaction
        //with the menu items in HTML
        loadScript(script_js_path),
        loadScript(internationalization_path)
    );

}
