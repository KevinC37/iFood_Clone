export class editCart extends HTMLElement {
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

    }

   

    render() {
        this.shadow.innerHTML = ` 
        <style>
        * {
        font-family: "IBM Plex Sans",sans-serif !important;
    
    }
    
    
    .edit_background {
        position: absolute;
        top: 0;
    
        display: flex;
    
        justify-content: center;
        align-items: center;
        background-color: rgba(144,147,153,.5) !important;
    
        position: fixed;
        width: 100%;
        height: 100%;
    
        z-index: 2000;
    }
    
    
    .edit_food_cart_item_container {
        display: flex;
        width: 1100px;
        height: 640px;
    
        border-radius: 12px;
        box-shadow: 0 4px 36px rgba(64,85,128,.08);
        background-color: #fff;
        overflow: hidden;
    
        padding: 0 20px 0 32px;
    }
    
    .food_cart_item_image {
        width: 640px;
        height: 640px;
    
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-size: auto;
    }
    
    
    
    .edit_food_cart_content {
        width: 470px;
        height: 640px;
    
        display: flex;
        flex-direction: column;
    
    
    }
    
    .edit_food_cart_title_conainter {
    
       
        padding: 20px 20px 14px 32px;
        font-size: 24px;
        line-height: 32px;
        display: flex;
        justify-content: space-between;
        color: #000;
        border-bottom: 1px solid #ebebeb;
        font-weight: 700;
        flex-shrink: 1;
    
        margin-bottom: 8px;
    
    }
    
    .title {
       align-self: center;
    
       font-size: 24px;
        line-height: 32px;
        color: #000;
        font-weight: 700;
    
        display: flex;
    
    }
    
    .close {
       align-self: center;
        
       font-size: 24px;
       line-height: 32px;
       color: #000;
       font-weight: 700;
    
       cursor: pointer;
    }
    
    .close path {
        fill: #8b8b8b;
    }
    
    .close:hover path {
        fill:black;
    }
    
    
    .description_container {
        width: 408px;
        font-size: 16px;
        line-height: 24px;
    
        color: #555;
        font-weight: 400;
        text-align: justify;
        scrollbar-color: #ccc #f0f0f0;
        padding-left: 32px;
    
    }
    
    .description {
    
        width: 378px;
    
    }
    
    .form_container {
        width: 408px;
        font-size: 16px;
        line-height: 24px;
    
        color: #555;
        font-weight: 400;
        text-align: justify;
        scrollbar-color: #ccc #f0f0f0;
        padding-left: 32px;
        
      
    
        margin-top: 10px;
        padding-right: 0px;
    
        scrollbar-width: thin;
    
    
        overflow-y: auto;
        overflow-x: hidden;
    }
    
    .option_title_container {
     
        height: 18px;
        padding: 18px 0 5px;
        display: flex;
        justify-content: space-between;
    }
    
    .option_title, .required {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: .06em;
        text-transform: uppercase;
        color: #555;
    }
    
    .option_title{
        font-weight: bold;
    }
    
    .required {
        color: #b3b3b3;
    }
    
    .radio_button {
        max-width: 408px;
        position: relative;
        cursor: pointer;
        padding: 0;
    
        font-size: 14px;
        line-height: 20px;
        display: flex;
    
        font-weight: 300;
    
    
        align-items: flex-end;
        
        margin: 13px 0;
    }
    
    .radio_button input[type='radio'] {
      display: none;
    }
    
    .radio_button label {
      display: flex;
      color: #333;
      font-weight: normal;
      cursor: pointer;
    
      align-items: center;
    
    }
    
    
    
    
    .radio_button label:before {
      content: " ";
      display: inline-block;
      position: relative;
      top: 0px;
      margin: 0 5px 0 0;
      width: 20px;
      height: 20px;
      border-radius: 12px;
      border: 1px solid #e6e6e6;
      background-color: transparent;
    
      transition: 0.05s ease;
    }
    
    .radio_button label:hover:before{
        border: 1px solid #19ac4b;
    }
    
    .radio_button input[type=radio]:checked + label:before {
        border: 1px solid #19ac4b;
        
    }
    
    
    .radio_button input[type=radio]:checked + label:after {
      border-radius: 11px;
      width: 12px;
      height: 12px;
      position: absolute;
      top: 5px;
      left: 5px;
      content: " ";
      display: block;
    
      background: #19AC4B;
    }
    
    .edit_modal_footer {
        display: flex;
        flex-shrink: 0;
        justify-content: space-between;
        align-content: center;
    
        margin-top: auto;
        padding: 24px 20px 24px 32px;
    
        background-color: #fff;
        z-index: 2;
        border-top: 1px solid #ebebeb;
    }
    
    #food_count_container {
        width: 132px;
        height: 52px;
    
        display: flex;
    
        align-items: center;
        justify-content: space-between;
    
    
        border: 1px solid #ebebeb;
        border-radius: 8px;
    
        margin-right: 20px;
    }
    
    #food_count_container button{
        border-radius: 8px !important;
        height: 24px;
        width: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f0f0f0 !important;
        min-width: unset !important;
        padding: 0 !important;
        cursor: pointer;
        margin-right: 16px;
        margin-left: 16px;
    
        outline: none;
        border: none;
    
        transition: 0.25s ease-in-out;
    }
    
    #food_count_container button:hover{
        background: #e5e5e5 !important;
    }
    
    #decrement img, #increment img {
        width: 10px;
        height: 24px;
    }
    
    #count {
        width: 23px;
        color: #555;
        font-size: 20px;
        line-height: 26px;
        font-weight: 500;
        padding: 0 !important;
    
        text-align: center;
    
    }
    
    #finish_edit_button {
        width: 100%;
        background: #19ac4b;
        color: #fff;
    
        padding: 15px;
        text-decoration: none;
    
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        border-radius: 8px;
        font-size: 16px;
        font-weight: 700;
        border: none;
    
        cursor: pointer;
    }
    
    #finish_edit_button:hover {
        background: #108d3b;
    }
    
    
    @media screen and (max-width:1380px) {
        .edit_food_cart_item_container {
            width: 972px;
            height: 560px;
        }
    
        .edit_food_cart_content,
        .food_cart_item_image {
            height: 560px;
            background-size: auto;
        }
    
        .description_container {
    
            width: 349px;
    
            letter-spacing: 0;
        }
    
        .form_container {
            width: 349px;
        }
    }
    
    
    @media screen and (max-width: 1000px) {
        .edit_background {
            align-items: flex-start;
        }
    
        .food_cart_item_image {
            width: 100vw;
            max-height: 360px;
            background-size: auto;
        }
    
        .edit_food_cart_item_container {
            width: 100vw;
            min-height: 100vh;
            border-radius: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
    
           
        }
    
        .edit_food_cart_content {
            width: 100vw;
            height: 100vh;
        }
    
        .edit_food_cart_title_conainter {
            width: calc(100vw - 35px);
            padding-left: 16px;
        }
    
        .description_container {
            width: calc(100vw - 36px);
            padding: 0 0 0 16px;
        }
    
        .form_container {
            padding-left: 16px;
        }
    
        .option_title_container {
            padding-right: 10px;
        }
    
        .edit_modal_footer {
            padding-left: 16px;
        }
    
    }
    
    
    #toggleEdit {
        width: 350px;
        height: 55px;
    }
    
    @keyframes openModal {
        from{transform: translate(-10%, 50%); scale: 0.5;}
        to  {transform: translate(0, 0); scale: 1;}
    }
    
    .open_modal {
    
        animation-name: openModal;
        animation-duration: 0.25s;
    }
        
        
        </style>


        <div class="edit_background">
        <div class="edit_food_cart_item_container open_modal">
          <div class="food_cart_item_image" style='background-image: url(${this.menuItem.backgroundImage});'></div>
          <div class="edit_food_cart_content">
            <div class="edit_food_cart_title_conainter">
              <span class="title">${this.menuItem.name}</span>
              <svg
                class="close"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#E8EDF6"
                  fill-rule="evenodd"
                  d="M11.446 10l7.847 7.847c.39.39.386 1.028 0 1.413l-.033.034a.998.998 0 0 1-1.414-.001L10 11.446l-7.847 7.847c-.39.39-1.028.386-1.413 0l-.034-.033a.998.998 0 0 1 .001-1.413L8.553 10 .707 2.153a1.004 1.004 0 0 1 0-1.413L.74.706a.998.998 0 0 1 1.413.001L10 8.554 17.846.707a1.004 1.004 0 0 1 1.414 0l.033.033a.997.997 0 0 1 0 1.413L11.446 10z"
                />
              </svg>
            </div>
            <div class="description_container">
              <span class="description"
               
              > ${this.menuItem.description}</span>
            </div>
              <div class="form_container">
                
  
  
        </div>
  
        <div class="edit_modal_footer">
          <div id="food_count_container">
            <button id="decrement"><img src="icons/minus.svg" alt=""></button>
            <span id="count">${this.count}</span>
            <button id="increment"><img src="icons/plus.svg" alt=""></button>
          </div>
  
          <button id="finish_edit_button">
            <span>Adaugă</span>
            <span id="edit_modal_total_price">${this.menuItem.price * this.count} L</span>
          </button>
  
          
        </div>
      </div>`
    }
}


customElements.define("cart-item-component-edit", editCart);
