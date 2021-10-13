const languages = [
    "Ro",
    "Ru",
    "En"
];
new vanilla_i18n(
    languages,
    opts = {
        path: "js/json",
        debug: true,
        i18n_attr_name: "vanilla-i18n",
        toggler_id: "vanilla-i18n-toggler",
        default_language: languages[1],
    }
).run();
