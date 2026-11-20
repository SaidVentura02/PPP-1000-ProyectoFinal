/* 
    @author jose.inestroza@unah.edu.hn ffloresh@unah.hn
    @version 0.1.0
    @date 2026/11/16
*/
import {THEME_CONFIG, FONT} from "./theme-config.js";

const changeBackgroundColor = color => document.body.style.backgroundColor = color;
const changeForegroundColor = color => document.body.style.color = color;
const changeFont = font => document.body.style.fontFamily = font;

const html = document.querySelector("html");
const theme = html.dataset.theme;
const actualTheme = THEME_CONFIG[theme];

const init = () => {
    changeBackgroundColor(actualTheme["background-color"]);
    changeForegroundColor(actualTheme["primary-color"]);
    changeFont(FONT);
}

const print = text => document.body.innerHTML += text;
const printAddingNodes = node => document.body.appendChild(node);

export {
    init,
    print
}
