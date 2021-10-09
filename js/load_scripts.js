export let script_js_path = "js/script.js";
export let cart_js_path = "js/cart.js"
export function loadScript(src) {
    // creates a <script> tag and append it to the page
    // this causes the script with given src to start loading and run when complete
    let script = document.createElement('script');
    script.src = src;
    script.type = "module";
    document.head.append(script);
}
