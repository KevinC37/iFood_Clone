import {
    loadScript,
    script_js_path,
    internationalization_path
} from "./load_scripts.js"; //function that loads another js file
import {
    menuItemComponent
} from "./components/main_menu_component.js";
import {
    Categories
} from "./components/categories.js";


function addCategories(categories_ro, categories_ru, categories_en) {
  
    const CURRENT_LANGUAGE = document.getElementsByClassName("language_pointer")[0].value.toLowerCase();
    const FOOD_CATEGORIES_HTML = document.getElementById("categories_container");

    let cat_ro = categories_ro.values();
    let cat_ru =  categories_ru.values();
    let cat_en =  categories_en.values();

    for(let i = 0; i < categories_en.size; i++) {
      
        FOOD_CATEGORIES_HTML.appendChild(new Categories(cat_ro.next().value, cat_ru.next().value, cat_en.next().value))

    }



    // if (CURRENT_LANGUAGE == "ro") {
    //     categories_ro.forEach(e => FOOD_CATEGORIES_HTML.appendChild(new Categories(e)));
    // } else if (CURRENT_LANGUAGE == "ru") {
    //     categories_ru.forEach(e => FOOD_CATEGORIES_HTML.appendChild(new Categories(e)));
    // } else if (CURRENT_LANGUAGE == "en") {
    //     categories_en.forEach(e => FOOD_CATEGORIES_HTML.appendChild(new Categories(e)));
    // }

}




export function foodCategories(restaurantMenu) {
    const categories_ro = new Set();
    const categories_ru = new Set();
    const categories_en = new Set();



    for (let itemIndex in Object.keys(restaurantMenu)) {

        for (let obj of Object.entries(restaurantMenu)) {

            if (obj[itemIndex] && typeof obj[itemIndex] === 'object') {
                categories_ro.add(obj[itemIndex].category_ro);
                categories_ru.add(obj[itemIndex].category_ru);
                categories_en.add(obj[itemIndex].category_en);

            }
        }
    }

    



    addCategories(categories_ro, categories_ru, categories_en);

}



export function pushRestaurantMenuToHTML(restaurantMenu) {

    //Promise for finishing the add items to html task
    new Promise(function (resolve, reject) {

            let food_items_container = document.getElementById("food_items_container");

            for (let itemIndex in Object.keys(restaurantMenu)) {

                for (let obj of Object.entries(restaurantMenu)) {

                    if (obj[itemIndex] && typeof obj[itemIndex] === 'object') {

                        //pushes menu items to html canvas
                        food_items_container.appendChild(new menuItemComponent(obj[itemIndex]));

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