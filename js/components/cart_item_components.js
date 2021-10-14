
export class emptyCart extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }


    render() {
        let heading = "Coșul tău este gol!";
        let message = "Adaugă produse în coș pentru a continua cumpărăturile."

        if(document.getElementById("vanilla-i18n-toggler").value.toLowerCase() == "ru") {
            heading = "Ваша корзина пуста!";
            message = "Добавьте товары в корзину, чтобы продолжить покупки."
        } else if(document.getElementById("vanilla-i18n-toggler").value.toLowerCase() == "en") {
            heading = "Your cart is empty!";
            message = "Add products to cart to continue shopping."
        }


        this.shadow.innerHTML = 
`
<style>


.empty_cart_modal_container {
    margin: auto;

    display: flex;
    flex-direction: column;
    align-content: space-around;
    justify-content: center;
}


.cart_empty_title {
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 20px;
}

.empty_cart_message {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #555;
    text-align: center;
}

</style>


<div id="empty_cart_container" class="empty_cart_modal_container">
    <img src="icons/empty_cart.svg" alt="">
    <p class="cart_empty_title">${heading}</p>
    <p class="empty_cart_message">${message}</p>
</div>
`
    }
}

customElements.define("empty-cart", emptyCart);






export class itemComponent extends HTMLElement {
    constructor(menuItem, count) {
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.menuItem = menuItem;
        this.count = count; 
    }
    

    connectedCallback() {
        this.render();
      
        let removeButton = this.shadow.querySelectorAll(".cart_modal_delete");
        let editButton = this.shadow.querySelectorAll(".cart_modal_edit");

        for(let r of removeButton) {
            r.addEventListener("click", this.removeItem.bind(this));
        }

        //input to be updated in DOM
        let cartButtonTotal = document.getElementById("cart_button_price");
        let cartModalTotal = document.getElementById("cart_modal_total_price");
        let item_list_modal = document.getElementsByTagName("cart-item-component");
        let cartButton = document.getElementById("cart_button");
        

        
        //Calculations
        let deliveryCost = Number(document.getElementById("cart_modal_delivery_price").innerHTML.replace(/ MDL|,00 MDL/gi, ""));


        (function calculateTotal() {
            let total = 0;
            for(let k of Object.values(item_list_modal)) {
                total += k.menuItem.price * k.count;
                cartButtonTotal.innerHTML = total + deliveryCost + " MDL";
                cartModalTotal.innerHTML = total + deliveryCost + ",00 MDL"
            }
        })();

        (function emptyCart() {
            if(item_list_modal.length === 0) {
                cartButtonTotal.innerHTML = "Coș gol"
                cartButton.classList.add("cart_is_empty");

            } 
        })();

        



    }   

    removeItem() {
        this.remove();
        let cartButton = document.getElementById("cart_button");

        //input to be updated in DOM
        let cartButtonTotal = document.getElementById("cart_button_price");
        let cartModalTotal = document.getElementById("cart_modal_total_price");
   
        let deliveryCost = Number(document.getElementById("cart_modal_delivery_price").innerHTML.replace(/ MDL|,00 MDL/gi, ""));
                
        //Calculations
        let itemPrice = Number(this.menuItem.price) * Number(this.count);

        let item_list_modal = document.getElementsByTagName("cart-item-component");
        let cart_footer = document.getElementById("cart_modal_footer");
        let cart_body = document.getElementById("cart_modal_body");
        let cart_modal_items = document.getElementById("all_cart_items");


    

        if(item_list_modal.length === 0) {
            cart_body.appendChild(new emptyCart());
            cart_footer.style.display = "none";
            cart_modal_items.style.display = "none";
            cartButtonTotal.innerHTML = "Coș gol"
            cartButton.classList.add("cart_is_empty");
       } 

       (function calculateTotal() {
        let total = 0;
        for(let k of Object.values(item_list_modal)) {
            total += k.menuItem.price * k.count;
            cartButtonTotal.innerHTML = total + deliveryCost + " MDL";
            cartModalTotal.innerHTML = total + deliveryCost + ",00 MDL"

        }
    })();
       
   
    }


   


    render() {


        
            let item_list_modal = document.getElementsByTagName("cart-item-component");
            let counter = 1;
     
            for(let k in Object.entries(item_list_modal)) {
                if(item_list_modal[k].menuItem === this.menuItem) {
                   
                   counter++;
                }
                let item = this.menuItem;
                let arr = [];
                if(counter > 2) {
                
                Object.keys(item_list_modal).map((key) => {
                      if(item_list_modal[key].menuItem == item) {
                        arr.push(item_list_modal[key]);
    
                      }
                    
                   })
                   item_list_modal[k].remove();
                   let previousCount = arr.pop().count;
                   let cart_component_objects = Object.values(document.getElementsByTagName("cart-item-component"));
    
                   for(let k of Object.entries(cart_component_objects).map(e => e)) {
                       if (k[1] === arr[0]) {
                        
                        let originalCount = cart_component_objects[k[0]].shadow.children[1].children[0].firstElementChild.children[0];
                        let newCount = Number(originalCount.innerHTML) + Number(previousCount);
                        k[1].count = newCount;   
    
                        let newPrice = Number(cart_component_objects[k[0]].count) * Number(cart_component_objects[k[0]].menuItem.price);
                        let itemPriceUpdate = cart_component_objects[k[0]].shadow.children[1].children[0].firstElementChild.nextElementSibling.firstChild.data = newPrice + ",00 MDL";
                        
                        originalCount.innerHTML = newCount;
    
    
                       }
                   };
      
                  
    
                } 
                
            }
        
     

    const CURRENT_LANGUAGE = document.getElementsByClassName("language_pointer")[0].value.toLowerCase();
    let edit = "Editează"
    let deleteBtn = "Șterge"
            if(CURRENT_LANGUAGE == "ru") {
                edit = "Редактирование";
                deleteBtn = "Убрать";
            } else if(CURRENT_LANGUAGE == "en"){
                edit = "Edit";
                deleteBtn = "Delete";
            }

        this.shadow.innerHTML = `<style>
        
        .cart_modal_item_list_template {
            width: 355px;
            height: 47px;
        
            margin-top: 12px;
            padding-bottom: 24px;
        }
        
        .cart_modal_item_info_container {
        
            display: flex;
            flex-direction: row;
        
            justify-content: space-around;
            align-items: center;
        
        
        }
        
        .cart_modal_item_info {
            margin-right: auto;
        }
        
        .cart_modal_item {
            font-weight: 500;
            text-transform: uppercase;
            font-size: 16px;
            line-height: 21px;
        }
        
        .cart_modal_edit_delete {
            padding-top: 6px;
        }
        
        .cart_modal_edit,
        .cart_modal_delete {
            padding: 0;
            margin-right: 12px;
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            letter-spacing: .02em;
            text-transform: uppercase;
        
            text-align: center;
        
            color: #b3b3b3;
        
            user-select: none;
            background-color: transparent;
            border: 1px solid transparent;
        
        
            border-radius: .25rem;
            transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        }
        
        
        .cart_modal_edit:hover {
            color: #555 !important;
            cursor: pointer;
        }
        
        .cart_modal_delete {
            color: #ff3355;
            cursor: pointer;
        
        }
        
        .cart_modal_delete:hover {
            color: #D30023;
        }
        
        
        </style>

                <div class="cart_modal_item_list_template">
                    <div class="cart_modal_item_info_container">
                        <div class="cart_modal_item_info">
                            <span class="cart_modal_item_count">${this.count}</span>
                            <sup>x</sup>
                            <span class="cart_modal_item_name">${this.menuItem.name}</span>
                        </div>
                        <span class="cart_modal_item_price">${this.menuItem.price * this.count},00 MDL</span>
                    </div>
        
                    <div class="cart_modal_edit_delete">
                        <button id="cart_modal_edit" class="cart_modal_edit">${edit}</button>
                        <button id="cart_modal_delete" class="cart_modal_delete">${deleteBtn}</button>
        
                    </div>
                </div>
                `
    }
}

customElements.define("cart-item-component", itemComponent);




