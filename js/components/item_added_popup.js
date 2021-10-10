export class itemAddedPopup extends HTMLElement {
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
        .item_added_popup {
            width: 443px;
            height: 129px;
        
            position: absolute;
            top: 0;
            right: 0;

            margin-top: 91px;
            z-index: 1091;

            background: #F7FFFB;
            border: 1px solid #72CE80;
            box-sizing: border-box;
            border-radius: 12px;
        }
        
        .item_added_title {
        
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
        
            color: #19AC4B;
            padding: 0 29px;
        
            display: flex;
            flex-direction: row;
        
            align-content: center;
            
        }
        
        .item_added_info {
            display: flex;
            flex-direction: row;
        
            align-content: center;
            justify-content: space-between;
        
            font-weight: bold;
            padding: 0 29px;
        }
        
        
        .success_icon {
            width: 20px;
            height: 20px;
            display: inline-block;
            
            background-image: url(../icons/item_added_success.svg);
        
            margin-top: 2px;
            margin-right: 9px;
        }

        </style>

    
        <div class="item_added_popup success">
        <p class="item_added_title success">
         <span class="success_icon"></span>
         Adăugat în coș</p>
        <div class="item_added_info">
        <span>${this.count} <sup>x</sup> ${this.menuItem.name}</span>
        <span>${this.menuItem.price},00 MDL</span>
       </div>
       </div>
        `
    }
}

customElements.define("item-added-popup", itemAddedPopup);