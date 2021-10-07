(async function parseFetchedRestaurantMenu() {

    let food_items_container = document.getElementById("food_items_container");
    let menuArray = []



    fetch('restaurants_menu/mcdonalds.json')
    .then(response => response.json())
    .then(data => menuArray.push(data))
    .then(function loadRestaurantMenu() {

        new Promise(resolve => {
  
          for (let restaurantMenu of menuArray) {
  
              for (let itemIndex in Object.keys(restaurantMenu)) {
  
                  for (let obj of Object.entries(restaurantMenu)) {
  
                      if (obj[itemIndex] && typeof obj[itemIndex] === 'object') {
  
                          food_items_container.innerHTML +=
                              `<!----------FOOD ITEM CARD---------->
                  <div class="food_items_card_template">
                  <div class="food_image" style="background-image: url(${obj[itemIndex].backgroundImage})"></div>
  
                  <div class="food_description_tile">
                  <span class="food_name">${obj[itemIndex].name}</span>
                  <span class="food_description">${obj[itemIndex].description}</span>
                  <span class="food_weight">${obj[itemIndex].weight}</span>
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
                      <span>${obj[itemIndex].price} L</span>
                  </button>
                  </div>
              </div>
              <!----------END OF FOOD ITEM CARD---------->
                  `
                      }
  
                  }
              }
          }
          resolve("resolved");
      })
  
  
  })


})();

