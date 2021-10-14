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
    const allItems = document.getElementsByClassName("category all")[0];
 
   const ADDRESS = document.getElementById('header.address');
   const CART_BUTTON = document.getElementById('header.cartbutton');
//    const SEARCH_PLACEHOLDER = document.getElementById('searchbar.placeholder');
//    const EMPTY_CART_BUTTON = document.getElementById('emptycart.button');
//    const EMPTY_CART__MODAL_TITLE = document.getElementById('emptycart.modal.title');
   const MODAL_DELIVERY = document.getElementById('cart_modal_delivery_name');
   const MODAL_TOTAL = document.getElementById('cart_modal_total_name');
   const MODAL_CONTINUE = document.getElementById('continue_to_checkout');
   const MODAL_ITEMS = document.getElementsByTagName("cart-item-component");
   const RESTAURANT_DELIVERY = document.getElementById('restaurant.delivery');
   const PAYMENT_CARD = document.getElementById('restaurant.payment.card');
   const PAYMENT_CASH = document.getElementById('restaurant.payment.cash');
   const RESTAURANT_MAP = document.getElementById('restaurant.map');
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
   const SCHEDULE_MONDAY = document.getElementById('schedule.monday');
   const SCHEDULE_TUESDAY = document.getElementById('schedule.tuesday');
   const SCHEDULE_WEDNESDAY = document.getElementById('schedule.wednesday');
   const SCHEDULE_THURSDAY = document.getElementById('schedule.thursday');
   const SCHEDULE_FRIDAY  = document.getElementById('schedule.friday');
   const SCHEDULE_SATURDAY = document.getElementById('schedule.saturday');
   const SCHEDULE_SUNDAY = document.getElementById('schedule.sunday');
   const RESTAURANT_DESCRIPTION = document.getElementById('restaurant.description');
   const PROMO_TITLE  = document.getElementById('promo.title');
   const PROMO_DESCRIPTION = document.getElementById('promo.description');


    try {
        if (currentLanguage.value.toLowerCase() == "ro") {
            allItems.innerText = "Toate";
            ADDRESS.innerText = "strada Păcii 10";
            CART_BUTTON.innerText = "Coșul meu"
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
            SCHEDULE_MONDAY.innerText = "Luni: ";
            SCHEDULE_TUESDAY.innerText = "Marți: ";
            SCHEDULE_WEDNESDAY.innerText = "Miercuri: ";
            SCHEDULE_THURSDAY.innerText = "Joi: ";
            SCHEDULE_FRIDAY.innerText = "Vineri: ";
            SCHEDULE_SATURDAY.innerText = "Sâmbătă: ";
            SCHEDULE_SUNDAY.innerText = "Duminică: ";
            RESTAURANT_DESCRIPTION.innerText = "Restaurantele McDonald's oferă produse 100% proaspete şi de calitate în orice loc şi în orice moment";
            PROMO_TITLE.innerText = "livrare gratuită";
            PROMO_DESCRIPTION.innerText = "Achită cu Mastercard de la 200 lei și primește livrare gratuită";

            for(let k in MODAL_ITEMS) {
                MODAL_ITEMS[k].shadowRoot.getElementById("cart_modal_edit").innerText = "Editeză";
                MODAL_ITEMS[k].shadowRoot.getElementById("cart_modal_delete").innerText = "Șterge";
            }


        } else if(currentLanguage.value.toLowerCase() == "ru") {
            allItems.innerText = "Все";
            ADDRESS.innerText = "Улица Pacii 10"
            CART_BUTTON.innerText = "Моя корзина"

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
            SCHEDULE_MONDAY.innerText = "Понедельник: ";
            SCHEDULE_TUESDAY.innerText = "Вторник:";
            SCHEDULE_WEDNESDAY.innerText = "Среда:";
            SCHEDULE_THURSDAY.innerText = "Четверг:";
            SCHEDULE_FRIDAY.innerText = "Пятница:";
            SCHEDULE_SATURDAY.innerText = "Суббота:";
            SCHEDULE_SUNDAY.innerText = "Воскресенье:";
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
            // SEARCH_PLACEHOLDER.innerText = "Find restaurants";
            // EMPTY_CART_BUTTON.innerText = "Empty cart";
            // EMPTY_CART__MODAL_TITLE.innerText = "Your cart is empty!";
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
            SCHEDULE_MONDAY.innerText = "Monday: ";
            SCHEDULE_TUESDAY.innerText = "Tuesday: ";
            SCHEDULE_WEDNESDAY.innerText = "Wednesday: ";
            SCHEDULE_THURSDAY.innerText = "Thursday: ";
            SCHEDULE_FRIDAY.innerText = "Friday: ";
            SCHEDULE_SATURDAY.innerText = "Saturday: ";
            SCHEDULE_SUNDAY.innerText = "Sunday: ";
            RESTAURANT_DESCRIPTION.innerText = "McDonald's restaurants offer 100% fresh, high-quality products anytime, anywhere";
            PROMO_TITLE.innerText = "free delivery";
            PROMO_DESCRIPTION.innerText = "Pay with Mastercard from 200 lei and get free delivery";
            
            for(let k in MODAL_ITEMS) {
                MODAL_ITEMS[k].shadowRoot.getElementById("cart_modal_edit").innerText = "Edit";
                MODAL_ITEMS[k].shadowRoot.getElementById("cart_modal_delete").innerText = "Delete";
            }
        }
    } catch (e) {
        console.log(e);
    }
}

currentLanguage.addEventListener("change", () => {
    updateFoodDescription();
    updateCategoriesLanguage();
    updateStaticElementsLang();

});

window.onload = function updateLang() {
    updateFoodDescription();
    updateStaticElementsLang();
};

