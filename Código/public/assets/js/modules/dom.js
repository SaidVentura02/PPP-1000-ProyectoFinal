/* 
    @author jose.inestroza@unah.edu.hn ffloresh@unah.hn
    @version 0.1.1
    @date 2026/11/20
    @since 2026/11/16
*/
import {THEME_CONFIG, FONT} from "./theme-config.js";
const body = document.body;
const changeBackgroundColor = color => document.body.style.backgroundColor = color;
const changeForegroundColor = color => document.body.style.color = color;
const changeFont = font => document.body.style.fontFamily = font;
const changeStyles = bodyStyles => Object.assign(body.style, bodyStyles);

const html = document.querySelector("html");
const theme = html.dataset.theme;
const actualTheme = THEME_CONFIG[theme];

const init = bodyStyles => {
    changeStyles(bodyStyles)
    changeBackgroundColor(actualTheme["background-color"]);
    changeForegroundColor(actualTheme["primary-color"]);
    changeFont(FONT);
}

const print = text => document.body.innerHTML += text;
const printAddingNodes = node => document.body.appendChild(node);

export {
    init,
    print,
    printAddingNodes,
    html,
    theme,
    actualTheme
}
