import {foodCategories} from "./parse_restaurant_menu.js"


let currentLanguage = document.getElementsByClassName("language_pointer")[0];
let foodDescriptionNodes = document.querySelectorAll(".food_description");
let menuItems = document.getElementsByTagName("menu-item");
const CATEGORIES = document.getElementsByTagName("menu-category");





function updateFoodDescription() {
    for (let k in Object.values(menuItems)) {
        if (document.getElementsByClassName("language_pointer")[0].value.toLowerCase() == "ro") {
            document.getElementsByTagName("menu-item")[k].shadowRoot.children[1].children[1].children[1].innerHTML=
                menuItems[k].menuItem.description_ro;
                document.getElementsByTagName("menu-item")[k].shadowRoot.lastElementChild.lastElementChild.lastElementChild.children[3].children[0].innerHTML = "Adaugă";

            if(document.getElementById("cart_button_price").innerHTML == "Пустая корзина" || document.getElementById("cart_button_price").innerHTML == "Empty cart") {
                document.getElementById("cart_button_price").innerHTML = "Coș gol";
            }

            try {
                document.getElementsByTagName("empty-cart")[0].shadowRoot.lastElementChild.children[1].innerHTML = "Coșul tău este gol!";
                document.getElementsByTagName("empty-cart")[0].shadowRoot.lastElementChild.lastElementChild.innerHTML = "Adaugă produse în coș pentru a continua cumpărăturile.";
            } catch (e) {
               
            }
        } else if (document.getElementsByClassName("language_pointer")[0].value.toLowerCase() == "ru") {
            document.getElementsByTagName("menu-item")[k].shadowRoot.children[1].children[1].children[1].innerHTML =

                menuItems[k].menuItem.description_ru;

                document.getElementsByTagName("menu-item")[k].shadowRoot.lastElementChild.lastElementChild.lastElementChild.children[3].children[0].innerHTML = "Добавить";

            if(document.getElementById("cart_button_price").innerHTML == "Coș gol" || document.getElementById("cart_button_price").innerHTML == "Empty cart") {
                document.getElementById("cart_button_price").innerHTML = "Пустая корзина";
            }

            try {
                document.getElementsByTagName("empty-cart")[0].shadowRoot.lastElementChild.children[1].innerHTML = "Ваша корзина пуста!";
                document.getElementsByTagName("empty-cart")[0].shadowRoot.lastElementChild.lastElementChild.innerHTML = "Добавьте товары в корзину, чтобы продолжить покупки.";
            } catch (e) {
                
            }

        } else if (document.getElementsByClassName("language_pointer")[0].value.toLowerCase() == "en") {
            document.getElementsByTagName("menu-item")[k].shadowRoot.children[1].children[1].children[1].innerHTML =

                menuItems[k].menuItem.description_en;
                document.getElementsByTagName("menu-item")[k].shadowRoot.lastElementChild.lastElementChild.lastElementChild.children[3].children[0].innerHTML = "Add";

            if(document.getElementById("cart_button_price").innerHTML == "Coș gol" || document.getElementById("cart_button_price").innerHTML == "Пустая корзина") {
                document.getElementById("cart_button_price").innerHTML = "Empty cart";
            }

            try {
                document.getElementsByTagName("empty-cart")[0].shadowRoot.lastElementChild.children[1].innerHTML = "Your cart is empty!";
                document.getElementsByTagName("empty-cart")[0].shadowRoot.lastElementChild.lastElementChild.innerHTML = "Add products to cart to continue shopping.";
            } catch (e) {
                ;
            }
        }

    }
};



function updateCategoriesLanguage() {

    for(let k in CATEGORIES) {
        try {
            if (currentLanguage.value.toLowerCase() == "ro") {
                CATEGORIES[k].shadow.getElementById("category_name").innerHTML = CATEGORIES[k]._cat_ro;
                updateStaticElementsLang() 
            } else if(currentLanguage.value.toLowerCase() == "ru") {
                CATEGORIES[k].shadow.getElementById("category_name").innerHTML = CATEGORIES[k]._cat_ru;
                updateStaticElementsLang() 

            } else if(currentLanguage.value.toLowerCase() == "en") {
                CATEGORIES[k].shadow.getElementById("category_name").innerHTML = CATEGORIES[k]._cat_en;
 
                updateStaticElementsLang() ;
            }
        } catch (e) {
            
        }

    }
}



function updateStaticElementsLang() {
    const allItems = document.getElementById("show_all");

    const RESTAURANT_OBJ = document.getElementsByTagName("restaurant-info")[0].restaurant;
    const TODAY = new Date().getDay();

    // const WORK_DAYS_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const WORK_DAYS_RO = ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"];
    // const WORK_DAYS_RU = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    // const SCHEDULE_BOX = document.getElementsByClassName("schedule_box_element");
    //    const SEARCH_PLACEHOLDER = document.getElementById('searchbar.placeholder');
    //    const EMPTY_CART_BUTTON = document.getElementById('emptycart.button');
    //    const EMPTY_CART__MODAL_TITLE = document.getElementById('emptycart.modal.title');

   const RESTAURANT_NAME = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById("restaurant.name");
   const RESTAURANT_DELIVERY = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById('restaurant.delivery');
   const SCHEDULE_TODAY =  document.getElementsByTagName("restaurant-info")[0].shadow.getElementById('schedule.today');
   const PAYMENT_CARD = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById('restaurant.payment.card');
   const PAYMENT_CASH = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById('restaurant.payment.cash');
   const RESTAURANT_MAP = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById('restaurant.map');
   const RESTAURANT_DESCRIPTION = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById('restaurant.description');
   const PROMO_TITLE  = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById('promo.title');
   const PROMO_DESCRIPTION = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById('promo.description');


 
   const ADDRESS = document.getElementById('header.address');
   const CART_BUTTON = document.getElementById('header.cartbutton');

   const MODAL_DELIVERY = document.getElementById('cart_modal_delivery_name');
   const MODAL_TOTAL = document.getElementById('cart_modal_total_name');
   const MODAL_CONTINUE = document.getElementById('continue_to_checkout');
   const MODAL_ITEMS = document.getElementsByTagName("cart-item-component");
   const FOOTER_HELP_TITLE = document.getElementById('help.title');
   const FOOTER_HELP_DELIVERY = document.getElementById('help.delivery');
   const FOOTER_IFOOD_ABOUT = document.getElementById('ifood.about');
   const FOOTER_IFOOD_BECOME_COURIER = document.getElementById('ifood.become_courier');
   const FOOTER_IFOOD_BECOME_PARTNER = document.getElementById('ifood.become_partner');
   const FOOTER_IFOOD_MASTERCARD_PROMO = document.getElementById('ifood.mastercard_promo');
   const FOOTER_LEGAL_TITLE = document.getElementById('legal.title');
   const FOOTER_LEGAL_TERMS = document.getElementById('legal.terms');
   const FOOTER_LEGAL_CONFIDENTIALITY = document.getElementById('legal.confidentiality');
   const FOOTER_LEGAL_COOKIES= document.getElementById('legal.cookies');
   const FOOTER_SUPPORT_TITLE = document.getElementById('support.title');
   const FOOTER_SUPPORT_PHONE = document.getElementById('support.phone');
   const FOOTER_SUPPORT_EMAIL= document.getElementById('support.email');
   const SUBSCRIBE = document.getElementById('subscribe');
   const RIGHTS_RESERVED = document.getElementById('rights_reserved');

   const MAPS_TITLE = document.getElementById("maps_title");
   
    const SEARCH_BAR = document.getElementById("searchbox");

   const SCHEDULE_MONDAY = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById('schedulebox.monday');
   const SCHEDULE_TUESDAY = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById('schedulebox.tuesday');
   const SCHEDULE_WEDNESDAY = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById('schedulebox.wednesday');
   const SCHEDULE_THURSDAY = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById('schedulebox.thursday');
   const SCHEDULE_FRIDAY  = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById('schedulebox.friday');
   const SCHEDULE_SATURDAY = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById('schedulebox.saturday');
   const SCHEDULE_SUNDAY = document.getElementsByTagName("restaurant-info")[0].shadow.getElementById('schedulebox.sunday');

//    const SCHEDULE_MONDAY = document.getElementById('schedule.monday');
//    const SCHEDULE_TUESDAY = document.getElementById('schedule.tuesday');
//    const SCHEDULE_WEDNESDAY = document.getElementById('schedule.wednesday');
//    const SCHEDULE_THURSDAY = document.getElementById('schedule.thursday');
//    const SCHEDULE_FRIDAY  = document.getElementById('schedule.friday');
//    const SCHEDULE_SATURDAY = document.getElementById('schedule.saturday');
//    const SCHEDULE_SUNDAY = document.getElementById('schedule.sunday');


    try {
        if (currentLanguage.value.toLowerCase() == "ro") {
            allItems.innerText = "Toate";
            ADDRESS.innerText = "strada Păcii 10";
            CART_BUTTON.innerText = "Coșul meu"


            MAPS_TITLE.innerText = "Filialele restaurantului";
            // SEARCH_PLACEHOLDER.innerText = "Caută restaurante"
            // EMPTY_CART_BUTTON.innerText = "Coș gol"
            // EMPTY_CART__MODAL_TITLE.innerText = "Coșul tău este gol!"
            RESTAURANT_DELIVERY.innerText = "Prețul livrării:";
            PAYMENT_CARD.innerText = "Card";
            PAYMENT_CASH.innerText = "Cash";
            RESTAURANT_MAP.innerText = "Vizualizați pe hartă";
            MODAL_DELIVERY.innerText = "Livrare:";
            MODAL_TOTAL.innerText = "Total: ";
            MODAL_CONTINUE.innerText = "Continuă";
            FOOTER_HELP_TITLE.innerText = "Ajutor";
            FOOTER_HELP_DELIVERY.innerText = "Livrare";
            FOOTER_IFOOD_ABOUT.innerText = "Despre noi";
            FOOTER_IFOOD_BECOME_COURIER.innerText = "Devino curier";
            FOOTER_IFOOD_BECOME_PARTNER.innerText = "Devino partener";
            FOOTER_IFOOD_MASTERCARD_PROMO.innerText = "Promo Mastercard";
            FOOTER_LEGAL_TITLE.innerText = "Juridic";
            FOOTER_LEGAL_TERMS.innerText = "Termeni și condiții";
            FOOTER_LEGAL_CONFIDENTIALITY.innerText = "Politica de confidențialitate";
            FOOTER_LEGAL_COOKIES.innerText = "Politica cookies";
            FOOTER_SUPPORT_TITLE.innerText = "Suport";
            FOOTER_SUPPORT_PHONE.innerText = "Telefon: (022) 000 100";
            FOOTER_SUPPORT_EMAIL.innerText = "Email : support@ifood.md";
            SUBSCRIBE.innerText = "Abonează-te";
            RIGHTS_RESERVED.innerText = "Toate drepturile sunt rezervate.";

            SCHEDULE_TODAY.innerText = RESTAURANT_OBJ.schedule_days_ro[TODAY];

            SCHEDULE_MONDAY.innerText = "Luni: ";
            SCHEDULE_TUESDAY.innerText = "Marți: ";
            SCHEDULE_WEDNESDAY.innerText = "Miercuri: ";
            SCHEDULE_THURSDAY.innerText = "Joi: ";
            SCHEDULE_FRIDAY.innerText = "Vineri: ";
            SCHEDULE_SATURDAY.innerText = "Sâmbătă: ";
            SCHEDULE_SUNDAY.innerText = "Duminică: ";

            SEARCH_BAR.setAttribute("placeholder", "Caută restaurante");

            RESTAURANT_NAME.innerText = RESTAURANT_OBJ.name_ro;
            RESTAURANT_DESCRIPTION.innerText = "Restaurantele McDonald's oferă produse 100% proaspete şi de calitate în orice loc şi în orice moment";
            PROMO_TITLE.innerText = "livrare gratuită";
            PROMO_DESCRIPTION.innerText = "Achită cu Mastercard de la 200 lei și primește livrare gratuită";

            for(let k in MODAL_ITEMS) {
                MODAL_ITEMS[k].shadowRoot.getElementById("cart_modal_edit").innerText = "Editeză";
                MODAL_ITEMS[k].shadowRoot.getElementById("cart_modal_delete").innerText = "Șterge";
            }


        } else if(currentLanguage.value.toLowerCase() == "ru") {
            allItems.innerText = "Все";
            ADDRESS.innerText = "Улица Pacii 10";
            CART_BUTTON.innerText = "Моя корзина";

            MAPS_TITLE.innerText = "Филиалы ресторана ";

            // SEARCH_PLACEHOLDER.innerText = "Поиск ресторанов";
            // EMPTY_CART_BUTTON.innerText = "Корзина пуста";
            // EMPTY_CART__MODAL_TITLE.innerText = "Ваша корзина пуста!";
            RESTAURANT_DELIVERY.innerText = "Стоимость доставки: ";
            PAYMENT_CARD.innerText = "Карта";
            PAYMENT_CASH.innerText = "Наличные";
            RESTAURANT_MAP.innerText = "Посмотреть на карте";
            MODAL_DELIVERY.innerText = "Доставка: ";
            MODAL_TOTAL.innerText = "Итого: ";
            MODAL_CONTINUE.innerText = "Продолжить";
            FOOTER_HELP_TITLE.innerText = "Помощь";
            FOOTER_HELP_DELIVERY.innerText = "Доставка";
            FOOTER_IFOOD_ABOUT.innerText = "О нас";
            FOOTER_IFOOD_BECOME_COURIER.innerText = "Стать курьером";
            FOOTER_IFOOD_BECOME_PARTNER.innerText = "Стать партнёром";
            FOOTER_IFOOD_MASTERCARD_PROMO.innerText = "Промо Mastercard";
            FOOTER_LEGAL_TITLE.innerText = "Юридическая информация";
            FOOTER_LEGAL_TERMS.innerText = "Пользовательское соглашение";
            FOOTER_LEGAL_CONFIDENTIALITY.innerText = "Политика конфиденциальности";
            FOOTER_LEGAL_COOKIES.innerText = "Политика cookies";
            FOOTER_SUPPORT_TITLE.innerText = "Поддержка";
            FOOTER_SUPPORT_PHONE.innerText = "Телефон : (022) 000 100";
            FOOTER_SUPPORT_EMAIL.innerText = "Эл. почта : support@ifood.md";
            SUBSCRIBE.innerText = "Подпишись";
            RIGHTS_RESERVED.innerText = "Все права защищены. ";

            SCHEDULE_TODAY.innerText = RESTAURANT_OBJ.schedule_days_ru[TODAY];
            SEARCH_BAR.setAttribute("placeholder", "Поиск ресторанов");



            SCHEDULE_MONDAY.innerText = "Понедельник: ";
            SCHEDULE_TUESDAY.innerText = "Вторник:";
            SCHEDULE_WEDNESDAY.innerText = "Среда:";
            SCHEDULE_THURSDAY.innerText = "Четверг:";
            SCHEDULE_FRIDAY.innerText = "Пятница:";
            SCHEDULE_SATURDAY.innerText = "Суббота:";
            SCHEDULE_SUNDAY.innerText = "Воскресенье:";


            RESTAURANT_NAME.innerText = RESTAURANT_OBJ.name_ru;
            RESTAURANT_DESCRIPTION.innerText = "Рестораны McDonald's предлагают 100% свежие, высококачественные продукты в любое время и в любом месте";
            PROMO_TITLE.innerText = "бесплатная доставка";
            PROMO_DESCRIPTION.innerText = "Оплачивай с Mastercard от 200 лей и получи бесплатную доставку";


            for(let k in MODAL_ITEMS) {
                MODAL_ITEMS[k].shadowRoot.getElementById("cart_modal_edit").innerText = "Редактирование";
                MODAL_ITEMS[k].shadowRoot.getElementById("cart_modal_delete").innerText = "Убрать";
            }
        } else if(currentLanguage.value.toLowerCase() == "en") {
            allItems.innerText = "All";
            ADDRESS.innerText = "Pacii 10, street";
            CART_BUTTON.innerText = "My cart";

            MAPS_TITLE.innerText = "Restaurant branches";


            RESTAURANT_DELIVERY.innerText = "Delivery price: ";
            PAYMENT_CARD.innerText = "Card";
            PAYMENT_CASH.innerText = "Cash";
            RESTAURANT_MAP.innerText = "See on map";
            MODAL_DELIVERY.innerText = "Delivery:";
            MODAL_TOTAL.innerText = "Total: ";
            MODAL_CONTINUE.innerText = "Place order";
            FOOTER_HELP_TITLE.innerText = "Help";
            FOOTER_HELP_DELIVERY.innerText = "Delivery";
            FOOTER_IFOOD_ABOUT.innerText = "About Us";
            FOOTER_IFOOD_BECOME_COURIER.innerText = "Become a courier";
            FOOTER_IFOOD_BECOME_PARTNER.innerText = "Become a partner";
            FOOTER_IFOOD_MASTERCARD_PROMO.innerText = "Promo MasterCard";
            FOOTER_LEGAL_TITLE.innerText = "Legal information";
            FOOTER_LEGAL_TERMS.innerText = "Terms of use";
            FOOTER_LEGAL_CONFIDENTIALITY.innerText = "Privacy policy";
            FOOTER_LEGAL_COOKIES.innerText = "Cookies policy";
            FOOTER_SUPPORT_TITLE.innerText = "Support";
            FOOTER_SUPPORT_PHONE.innerText = "Telephone: (022) 000 100";
            FOOTER_SUPPORT_EMAIL.innerText = "Email: support@ifood.md";
            SUBSCRIBE.innerText = "Subscribe";
            RIGHTS_RESERVED.innerText = "All rights reserved.";

            SEARCH_BAR.setAttribute("placeholder", "Find restaurants");


            SCHEDULE_TODAY.innerText = RESTAURANT_OBJ.schedule_days_en[TODAY];


            SCHEDULE_MONDAY.innerText = "Monday: ";
            SCHEDULE_TUESDAY.innerText = "Tuesday: ";
            SCHEDULE_WEDNESDAY.innerText = "Wednesday: ";
            SCHEDULE_THURSDAY.innerText = "Thursday: ";
            SCHEDULE_FRIDAY.innerText = "Friday: ";
            SCHEDULE_SATURDAY.innerText = "Saturday: ";
            SCHEDULE_SUNDAY.innerText = "Sunday: ";



            RESTAURANT_NAME.innerText = RESTAURANT_OBJ.name_en;

            RESTAURANT_DESCRIPTION.innerText = "McDonald's restaurants offer 100% fresh, high-quality products anytime, anywhere";
            PROMO_TITLE.innerText = "free delivery";
            PROMO_DESCRIPTION.innerText = "Pay with Mastercard from 200 lei and get free delivery";
            
            for(let k in MODAL_ITEMS) {
                MODAL_ITEMS[k].shadowRoot.getElementById("cart_modal_edit").innerText = "Edit";
                MODAL_ITEMS[k].shadowRoot.getElementById("cart_modal_delete").innerText = "Delete";
            }
        }
    } catch (e) {

    }
}

currentLanguage.addEventListener("change", () => {
    updateFoodDescription();
    updateCategoriesLanguage();
    updateStaticElementsLang();

});

document.onload = (function updateLang() {
    updateFoodDescription();

    setTimeout(() => {
        updateStaticElementsLang();
    }, 500);
})();

