let food_tile_counter_minus = document.getElementsByClassName("food_tile_counter_minus");
let food_tile_counter_plus = document.getElementsByClassName("food_tile_counter_plus");
let food_tile_counter = document.getElementsByClassName("food_tile_counter");



let incrementDecrementFoodTileItem = () => {
    for(let i = 0; i < food_tile_counter_minus.length; i++) {
        food_tile_counter_minus[i].addEventListener("click", (e) => {
            //Decrement 1 every time user clicks on minus sign on the food tile (food card)
    
            if(food_tile_counter[i].value == 1) { //If min. 1 reached => then stop decrementing
                e.preventDefault()
            } else {
                food_tile_counter[i].value = Number(food_tile_counter[i].value) - 1;
    
            }
        })
    }
    

    for(let i = 0; i < food_tile_counter_plus.length; i++) {
    
    food_tile_counter_plus[i].addEventListener("click", (e) => {
        //Increment 1 every time user clicks on plus sign on the food tile (food card)

        if(food_tile_counter[i].value == 10) { //If max. 10 reached => then stop incrementing
            e.preventDefault()
        } else {
        food_tile_counter[i].value = Number(food_tile_counter[i].value) + 1;
        }
    })
}
}

let refreshFoodTileCounter = () => {
    
}


//Calling functions

incrementDecrementFoodTileItem();