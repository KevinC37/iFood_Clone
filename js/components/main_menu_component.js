export class menuItemComponent extends HTMLElement {
    constructor(menuItem) {
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.menuItem = menuItem;
   
    }

    connectedCallback() {
        this.render();
    }

    get _description_ro() {
        return this.menuItem.description_ro;
    }

    render() {
        const CURRENT_LANGUAGE = document.getElementsByClassName("language_pointer")[0].value;
        let description = this.menuItem.description_ro;
        let addBtn = "Adaugă";

        if(CURRENT_LANGUAGE.toLowerCase() == "ru") {
            description = this.menuItem.description_ru;
            addBtn = "Добавить";

        } else if (CURRENT_LANGUAGE.toLowerCase() == "en") {
            description = this.menuItem.description_en;
            addBtn = "Add";
        }


    
        this.shadow.innerHTML =`
        <style>
        
        
.food_items_card_template {
    width: 295px;
    height: 422px;
    padding: 20px;

    border-radius: 12px;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    transition: .1s ease-out;
    box-shadow: 0 2px 5px rgba(0,0,0,.03),0 10px 15px rgba(0,0,0,.02),0 25px 80px rgba(0,0,0,.04);
}

.food_items_card_template:hover{
    box-shadow: 0 2px 5px rgba(0,0,0,.03),0 10px 15px rgba(0,0,0,.02),0 25px 80px rgba(0,0,0,.1);
}

.food_description_tile {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
}


.food_image {
    min-height: 180px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
}

.food_name {
    font-size: 18px;
    line-height: 23px;
    color: #000;
    font-weight: 700;
}


.food_description {
    
    color: #555;
    font-size: 14px;
    line-height: 18px;
    flex: 1;
    margin-top: 16px;
    cursor: default;
    font-weight: 400;

    min-height: 36px;
}

.food_weight {
    padding-top: 19px;

    text-transform: lowercase;
    color: #555;
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
}

/* Chrome, Safari, Edge, Opera */
.food_tile_counter::-webkit-outer-spin-button,
.food_tile_counter::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.food_tile_counter_container {
    height: 50px;

    display: flex;
    flex-direction: row;
    
    align-items: center;
}

.footer {
    margin-top: auto;
}

.food_tile_counter {
    max-width: 40px;
    height: 30px;

    border: none;
    cursor: default;

    text-align: center;
    font-weight: 500;
    font-size: 12px;
    color: #555;
    text-align: center;
    -moz-appearance: textfield;
}

.food_tile_counter_minus, 
.food_tile_counter_plus {
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: #f0f0f0;
}
.food_tile_counter_minus {
    padding-top: 3px;
}


.food_tile_counter_minus:hover, 
.food_tile_counter_plus:hover {
    background-color: #E5E5E5;
}
.add_item_to_cart{

    width: 165px;
    height: 40px;

    margin-left: auto;

    border: none;
    border-radius: 8px;

    cursor: pointer;
    background-color: #19ac4b;
}

.add_item_to_cart{

    width: 165px;
    height: 40px;

    margin-left: auto;

    border: none;
    border-radius: 8px;

    cursor: pointer;
    background-color: #19ac4b;
}

.add_item_to_cart span {
    color: #fff;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    font-weight: 700;
}

@media only screen and (max-width: 1400px) {



    .food_items_container {
        max-width: 1140px;
        grid-template-columns: repeat(3, 367px);
        grid-row-gap: 20px;
    }
    
    .food_items_card_template {
        width: 326.66px;
        height: 426px;

    }

    .categories_container,
    .food_items_container,
    .special_offer_container,
    .additional_information,
    .restaurant_presentation {
        max-width: 1140px;
    }
}

@media only screen and (max-width: 1160px) {
    .food_items_container {
        max-width: 1000px;
        grid-template-columns: repeat(3, 320px);
        grid-row-gap: 20px;
    }

    .add_item_to_cart {
        width: 136px;
        padding: 11px 14px;
    }


    .food_items_card_template {
        width: 279.66px;
        height: 404px;
    }


    .header_container,
    .categories_container,
    .food_items_container,
    .special_offer_container,
    .additional_information,
    .restaurant_presentation {
        max-width: 1000px;
    }
}   
    @media only screen and (max-width: 1000px) {
        .food_items_card_template {
           width: auto;
           padding: 8px;
        }

        #schedule_box .schedule_box_element {
            padding: 0;
        }

        .food_tile_counter_minus,
        .food_tile_counter_plus,
        .food_tile_counter {
            display: none;
        }

        .add_item_to_cart {
            width: 100%;
        }
    }


        </style>
        
        
        <!----------FOOD ITEM CARD---------->
        <div class="food_items_card_template">
        <div class="food_image" style="background-image: url(${this.menuItem.backgroundImage})"></div>
    
        <div class="food_description_tile">
        <span class="food_name">${this.menuItem.name}</span>
        <span class="food_description">${description}</span>
        
        </div>
        <div class="footer">
        <span class="food_weight">${this.menuItem.weight}</span>
        <div class="food_tile_counter_container">
        <button class="food_tile_counter_minus">
            <img src="icons/minus.svg" alt="">
        </button>
        <input type="number" class="food_tile_counter" name="food_tile_counter" step="1" min="1" max="10" value="1" readonly="">
        <button class="food_tile_counter_plus">
            <img src="icons/plus.svg" alt="">
        </button>
        <button class="add_item_to_cart">
            <span>${addBtn}</span>
            <span>${this.menuItem.price} L</span>
        </button>
        </div>
        </div>
        </div>
        <!----------END OF FOOD ITEM CARD---------->
    `
    }
}

customElements.define("menu-item", menuItemComponent);