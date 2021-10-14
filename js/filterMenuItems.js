const CATEGORIES = document.getElementsByTagName("menu-category");
const MENU_ITEMS = document.getElementsByTagName("menu-item");
const ALL = document.getElementById("show_all");

setTimeout(() => {
    for(let k of Object.values(CATEGORIES)) {
        k.addEventListener("click", (e) => {
            const STYLE_SELECTED = "border-radius: 8px; border: 1px solid #ffcf33; bbox-shadow: -1px 5px 0px 4px rgba(255,207,51,1); color: #000; font-weight: 500;";
            
            for(let j of Object.values(CATEGORIES)) {
               j.shadow.getElementById("category").setAttribute("style", "");
            }

            e.target.shadow.getElementById("category").setAttribute("style", STYLE_SELECTED);
            document.getElementById("show_all").classList.remove("all");

        
            for(let m of MENU_ITEMS) {
                m.style.display = "flex";
                if(Object.values(m.menuItem.category_en).join("") != k._cat_en ) {
                    m.style.display = "none";
                }
            }

        })
    }

    ALL.addEventListener("click", (e) => {
        for(let m of MENU_ITEMS) {
            m.style.display = "flex";
            document.getElementById("show_all").classList.add("all");
            for(let j of Object.values(CATEGORIES)) {
                j.shadow.getElementById("category").setAttribute("style", "");
             }
        }
    })
}, 500);


