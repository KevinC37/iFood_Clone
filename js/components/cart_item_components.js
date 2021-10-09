export class emptyCart extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }


    render() {
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
    <p class="cart_empty_title">Coșul tău este gol!</p>
    <p class="empty_cart_message">Adaugă produse în coș pentru a continua cumpărăturile.</p>
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

    }   

    removeItem() {
        this.remove();

        let item_list_modal = document.getElementsByTagName("cart-item-component");
        let cart_footer = document.getElementById("cart_modal_footer");
        let cart_body = document.getElementById("cart_modal_body");
        let cart_modal_items = document.getElementById("all_cart_items");

        if(item_list_modal.length === 0) {
            cart_body.appendChild(new emptyCart());
            cart_footer.style.display = "none";
            cart_modal_items.style.display = "none";
        }

   
    }



    render() {
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
                        <span class="cart_modal_item_price">${this.menuItem.price},00 MDL</span>
                    </div>
        
                    <div class="cart_modal_edit_delete">
                        <button class="cart_modal_edit">Editează</button>
                        <button class="cart_modal_delete">Șterge</button>
        
                    </div>
                </div>
                `
    }
}

customElements.define("cart-item-component", itemComponent);

