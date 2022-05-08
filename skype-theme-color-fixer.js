// ==UserScript==
// @name         Skype theme color fixer
// @namespace    https://web.skype.com/
// @version      1.0
// @description  Adapts the colour of Skype theme to match dark mode
// @author       mishamyrt
// @match        https://web.skype.com/
// @icon         https://www.google.com/s2/favicons?domain=skype.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const DARK_THEME_COLOR = '#202020'
    const LIGHT_THEME_COLOR = '#FFFFFF'

    function adaptThemeColor() {
        const isDark = localStorage.getItem('IsDarkThemeActive') === 'true'
        const node = document.querySelector('meta[name="theme-color"]')
        node.content = isDark
            ? DARK_THEME_COLOR
            : LIGHT_THEME_COLOR
    }

    setTimeout(adaptThemeColor, 100);
    window.addEventListener('storage', adaptThemeColor)
})();