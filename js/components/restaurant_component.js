export class RestaurantComponent extends HTMLElement {
    constructor(restaurant) {
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.restaurant = restaurant;
    }

    connectedCallback() {
    this.render();
    }

    render() {
      const CURRENT_LANGUAGE = document.getElementsByClassName("language_pointer")[0].value;
      const TODAY = new Date().getDay();

      let cash = "Cash", card = "Card", delivery = "Prețul livrării: ", map = "Vezi pe hartă";


      let description = this.restaurant.description_ro;
      let name = this.restaurant.name_ro;
      let today_schedule_day = this.restaurant.schedule_days_ro[TODAY];
      let scheduleHours = this.restaurant.schedule;
      let scheduleDays = this.restaurant.schedule_days_ro;

      let promo = this.restaurant.promo.mastercard_title_ro;
      let promo_description = this.restaurant.promo.mastercard_description_ro;
      if(CURRENT_LANGUAGE == "Ru") {
        description = this.restaurant.description_ru;
        name = this.restaurant.name_ru;
        scheduleDays = this.restaurant.schedule_days_ru;
        promo_description = this.restaurant.promo.mastercard_description_ru;
        today_schedule_day = this.restaurant.schedule_days_ru[TODAY];

        cash = "Наличные", card = "Карта", delivery = "Стоимость доставки: ", map = "Посмотреть на карте";

        promo = this.restaurant.promo.mastercard_title_ru;
      } else if(CURRENT_LANGUAGE == "En") {
        description = this.restaurant.description_en;
        name = this.restaurant.name_en;
        today_schedule_day = this.restaurant.schedule_days_en[TODAY];
        scheduleDays = this.restaurant.schedule_days_en;
        promo = this.restaurant.promo.mastercard_title_en;
        promo_description = this.restaurant.promo.mastercard_description_en;

        cash = "Cash", card = "Card", delivery = "Delivery fee: ", map = "See on map";

      }

        this.shadow.innerHTML = `

        <style>
        * {
        margin: 0;
        padding: 0;
        font-family: 'IBM Plex Sans', sans-serif;
    }
    
    
    .information_about_restaurant {
        width: 100vw;
        max-width: 100%;
        height: 314px;

    }
    
    
    
    .banner{
        width: 100vw;
        margin-top: 91px;
        max-width: 100%;
        height: 200px;
        background-repeat: no-repeat;
    }
    
    
    .restaurant_presentation {
        max-width: 1400px;
        height: 200px;
        margin: 0 auto;
    
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    
        color: white;
    }
    
    .restaurant_name {
        display: flex;
        flex-wrap: nowrap;
    }
    
    .restaurant_description {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 30px;
    }
    
    .restaurant_presentation h3 {
        font-size: 42px;
        line-height: 55px;
        font-weight: 700;
    
    }
    
    .restaurant_presentation p {
        font-size: 1rem;
        font-weight: 400;
    }
    
    
    .additional_information {
        max-width: 1400px;
        height: 114px;
        margin: 0 auto;
    
        display: flex;
        align-items: center;
    
        scrollbar-width: none;

       
        box-shadow:0px 10px #eaeaea ;
    }
    
    .shipping {
      
        height: 52px;
    
        display: flex;
        justify-content: center;
        align-items: center;
    
        border: 1px solid #e5e5e5;
        border-radius: 8px;
    
        cursor:default;
        padding: 0px 20px;

        flex-shrink: 3;
    }
    
    .shipping span {
        font-size: 14px;
        color: #555;
        font-weight: 600;
    }
    
    #schedule {
        width: 238px;
        height: 52px;
    
        border: 1px solid #e5e5e5;
        border-radius: 8px;
    
        margin-left: 20px;
        padding: 0 20px 0 20px;
    
        display: flex;
        align-items:center;
        justify-content: space-between;
    
        position: relative;
        cursor: pointer;

        flex-shrink: 3;
    
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
         -khtml-user-select: none; /* Konqueror HTML */
           -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                      supported by Chrome, Edge, Opera and Firefox */
    }
    
    #schedule:hover {
        border: 1px solid #b2b2b2;
    }
    
    #schedule span {
        color: #555;
        font-weight: 600;
    }
    
    .payment_method_card,
    .payment_method_cash {
    
        height: 52px;
    
        display: flex;
        align-items:center;
        justify-content: space-between;
    
        border: 1px solid #e5e5e5;
        border-radius: 8px;
    
        margin-left: 20px;
        padding: 0 20px 0 20px;
    
        cursor:default;
    }
    
    .payment_method_card span,
    .payment_method_cash span {
        margin-left: 10px;
    }
    
    
    
    .resturant_location {
       
        height: 54px;
    
        display: flex;
        align-items:center;
        justify-content: space-around;
        margin-left: auto;
    
        background-color: #e5e5e5;
        border-radius: 8px;
    
        padding: 0 20px 0 20px;
    
        cursor: pointer;
        user-select: none;
    }
    
    .resturant_location span {
        font-weight: 400;
        color: #000;
        font-size: 14px;
        padding-left: 5px;
    }
    
    .main_body {
        background-color: #fafafa;
        width: 100vw;
        max-width: 100%;
        border-top: 1px solid #e6e6e6;
        padding-top: 16px;
        padding-bottom: 16px;
    }
    
    .special_offer_container {
        max-width: 1400px;
        height: 74px;
    
        margin: 0 auto;
    }
    
    .banner_promo {
        width: max-content;
        height: 74px;
    
        padding: 0 16px 0 16px;
    
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 8px;
        background-color: #faedd2;
    
        cursor: default;
    }
    
    .banner_promo span {
        color: #ff5c21;
    }
    
    .banner_promo img {
        width: 42px;
        height: 42px;
    }
    
    .promo_info {
        display: flex;
        flex-direction: column;
    }
    
    .promo_title,
    .promo_description {
        margin-left: 10px;
    }
    
    
    .promo_title {
        font-weight: 700;
        font-size: 1rem;
    }
    
    .promo_description {
        font-weight: 500;
        font-size: 12px;
    
    }

    #schedule_box {
      position: absolute;
      background: #fff;
      z-index: 3;
      width: inherit;
      top: 56px;
      right: 0;
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      text-transform: capitalize;
  
      color: #555;
      cursor: pointer;
  
      font-size: 14px;
      line-height: 18px;
      font-weight: 600;
      white-space: nowrap;
  
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      padding: 16px 20px 0px 20px;
  
  
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
  }
  .schedule_box_element {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px 16px 20px;

    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    white-space: nowrap;
    color: #555;
   
}

.schedule_box_element span {
    text-align: left;
}

@media only screen and (max-width: 1400px) {



  .food_items_container {
      max-width: 1140px;
      grid-template-columns: repeat(3, 367px);
      grid-row-gap: 20px;
  }
  
  .food_items_card_template {
      width: 326px;
      height: 314px;

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


  #schedule,
  .payment_method_card,
  .payment_method_cash {
    margin-left: 10px;
  }
  .special_offer_container,
  .additional_information{
    margin: 0 auto;
    max-width: 1000px;
}

  .restaurant_name,
  .restaurant_description {
    max-width: 1000px;
    margin: 0 auto;
    text-align: left;
  }

  .shipping {
    max-width: 125px;
  }

}



        </style>
        
       
        <div
          class="banner"
          style="
            background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0) 0,
                rgba(0, 0, 0, 0.8) 100%
              ),
              url(${this.restaurant.backgroundImage});
          "
        >
          <div class="restaurant_presentation">
            <div class="restaurant_name">
              <h3 id="restaurant.name">${name}</h3>
            </div>
            <div class="restaurant_description">
        
                <span id="restaurant.description">${description}</span> 
          
            </div>
          </div>
        </div>
  
        <div class="additional_information">
          <!---PRICE FOR SHIPPING-->
          <div class="shipping">
            <span id="restaurant.delivery">${delivery}&nbsp;</span>
            <span> &nbsp;${this.restaurant.delivery_price} MDL</span>
          </div>
          <!---RESTAURANT SCHEDULE--->
          <div id="schedule">
            <span id="schedule.today">${today_schedule_day}</span>
            <span class="work_hours">${this.restaurant.schedule[TODAY]}</span>
  
              <!--------------SCHEDULE BOX----------->
          <div id="schedule_box" style="display: none;">
            <div class="schedule_box_element">
              <span id="schedulebox.monday">${scheduleDays[1]}</span>
              <span>${scheduleHours[1]}</span>
            </div>
  
         
            <div class="schedule_box_element">
              <span id="schedulebox.tuesday">${scheduleDays[2]}</span>
              <span>${scheduleHours[2]}</span>
            </div>
  
            <div class="schedule_box_element">
              <span id="schedulebox.wednesday">${scheduleDays[3]}</span>
              <span>${scheduleHours[3]}</span>
            </div>
  
  
            <div class="schedule_box_element">
              <span id="schedulebox.thursday">${scheduleDays[4]}</span>
              <span>${scheduleHours[4]}</span>
            </div>
  
            <div class="schedule_box_element">
              <span id="schedulebox.friday">${scheduleDays[5]}</span>
              <span>${scheduleHours[5]}</span>
            </div>

            <div class="schedule_box_element">
              <span id="schedulebox.saturday">${scheduleDays[6]}</span>
              <span>${scheduleHours[6]}</span>
            </div>
  
            <div class="schedule_box_element">
            <span id="schedulebox.sunday">${scheduleDays[0]}</span>
            <span>${scheduleHours[0]}</span>
          </div>
          </div>
          </div>
        
  
  
          <!----CARD PAYMENT METHOD--->
          <div class="payment_method_card">
            <img src="icons/credit-card.svg" alt="Card" />
            <span id="restaurant.payment.card">${card}</span>
          </div>
          <!----CASH PAYMENT METHOD--->
          <div class="payment_method_cash">
            <img src="icons/cash.svg" alt="Cash" />
            <span id="restaurant.payment.cash">${cash}</span>
          </div>
  
          <!----RESTAURANT LOCATION--->
          <div class="resturant_location">
            <img src="icons/restaurant-page-location.svg" alt="" />
            <span id="restaurant.map"  >${map}</span>
          </div>
        </div>
  
        <!--Main body div start-->
        <div class="main_body">
          <!------SPECIAL OFFER BANNER(S)-->
          <div class="special_offer_container">
            <div class="banner_promo">
              <img src="icons/mastercard-banner-icon.svg" alt="" />
              <div class="promo_info">
                <span id="promo.title" class="promo_title">${promo}</span>
                <span id="promo.description" class="promo_description"
                  >${promo_description}</span
                >
              </div>
            </div>
          </div>
        
        `
    }
}

customElements.define("restaurant-info", RestaurantComponent);