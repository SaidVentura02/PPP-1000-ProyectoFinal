/* 
    @author ffloresh@unah.hn
    @version 0.1.0
    @date 2026/11/16
*/

import {init, print, printAddingNodes} from "./modules/dom.js";
import {h1, h2, p} from "./modules/dom-html-basic-elements.js";
import { createAnchor, createDialog, createElement } from "./modules/dom-html-elements.js";  

init();
const header = createElement("header");
const anchorMain = createAnchor("Inicio")
print(h1("Rutas Turisticas"));
print(h2("Proyecto Final Paradigmas de Programacion"));




