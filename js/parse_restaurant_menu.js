import {loadScript} from "./load_scripts.js"

function addItemToHTML(htmlContainer, menuItem) {

    htmlContainer.innerHTML +=
        `<!----------FOOD ITEM CARD---------->
    <div class="food_items_card_template">
    <div class="food_image" style="background-image: url(${menuItem.backgroundImage})"></div>

    <div class="food_description_tile">
    <span class="food_name">${menuItem.name}</span>
    <span class="food_description">${menuItem.description}</span>
    <span class="food_weight">${menuItem.weight}</span>
    </div>

    <div class="food_tile_counter_container">
    <button class="food_tile_counter_minus">
        <img src="icons/minus.svg" alt="">
    </button>
    <input type="number" class="food_tile_counter" name="food_tile_counter" step="1" min="1" max="10" value="1" readonly="">
    <button class="food_tile_counter_plus">
        <img src="icons/plus.svg" alt="">
    </button>
    <button class="add_item_to_cart">
        <span>Adaugă</span>
        <span>${menuItem.price} L</span>
    </button>
    </div>
    </div>
    <!----------END OF FOOD ITEM CARD---------->
`

}

//path to the main js file with functions for interacting with menu items
let scriptPath = "js/script.js";

export async function pushRestaurantMenuToHTML(restaurantMenu) {

    new Promise(async function (resolve, reject) {

        (() => {
            let food_items_container = document.getElementById("food_items_container");

            for (let itemIndex in Object.keys(restaurantMenu)) {

                for (let obj of Object.entries(restaurantMenu)) {

                    if (obj[itemIndex] && typeof obj[itemIndex] === 'object') {

                        addItemToHTML(food_items_container, obj[itemIndex]);

                    }

                }
            }
        })()

    }).finally(
      loadScript(scriptPath)
    );

}
