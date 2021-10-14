export class Categories extends HTMLElement {
    constructor(category_ro, category_ru, category_en) {
        super();
        this.shadow = this.attachShadow({mode:"open"});
        this.category_ro = category_ro;
        this.category_ru = category_ru;
        this.category_en = category_en;
    }

    connectedCallback() {
        this.render();
    }
    get _cat_ro() {
        return this.category_ro;
    }

    get _cat_ru() {
        return this.category_ru;
    }

    get _cat_en() {
        return this.category_en;
    }

    render() {

        const CURRENT_LANGUAGE = document.getElementsByClassName("language_pointer")[0].value;
        let category = this.category_ro;

        if(CURRENT_LANGUAGE.toLowerCase() == "ru") {
            category = this.category_ru
        } else if (CURRENT_LANGUAGE.toLowerCase() == "en") {
            category = this.category_en;
        }


        this.shadow.innerHTML = `
        <style>

        button#category {
            height: 47px;
            padding: 0 16px 0 16px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 3px 0 rgba(0,0,0,.05),0 2px 5px rgba(0,0,0,.03);
            color: #666;
            font-size: 1rem;
            font-weight: 500;

            border: none;
            outline: none;
            margin-right: 16px;
            white-space: nowrap;
            cursor: pointer;
        }
        </style>

        <button id="category"><span id="category_name">${category} </span> </button>
        `
    }
}

customElements.define("menu-category", Categories);