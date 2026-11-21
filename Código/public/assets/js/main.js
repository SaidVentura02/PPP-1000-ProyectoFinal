/* 
    @author ffloresh@unah.hn, said.ventura@unah.hn
    @version 0.1.1
    @date 2026/11/20
    @since 2026/11/16
*/

import {init, print, printAddingNodes} from "./modules/dom.js";
import {h1, h2, p} from "./modules/dom-html-basic-elements.js";
import { createAnchor, createDialog, createElement } from "./modules/dom-html-elements.js"; 
import {STYLES} from "./modules/nodes-styles.js";
import { tableElement, addHeaders, addContent } from "./modules/tables.mjs";

init();
//Creacion del header
const header = createElement("header", "", STYLES.headerFooter);
const navHeader = createElement("nav","", STYLES.nav);
const homeAnchor = createAnchor("Inicio", "index.html", STYLES.anchor);
const routesAnchor = createAnchor("Rutas", "routes.html", STYLES.anchor);

navHeader.appendChild(homeAnchor);
navHeader.appendChild(routesAnchor);
header.appendChild(navHeader);


//Creacion de la seccion principal, dividida en dos columnas
//leftCol: Columna de la izquierda, muestra tablas
//rightCol: Columna de la derecha, tiene todos los botones para los dialog
const main = createElement("main", "", STYLES.main);
const leftCol = createElement("div", "", STYLES.leftCol);
const rightCol = createElement("div", "", STYLES.rightCol);

//Definicion de elementos para la columna izquierda
const mainTitle = createElement("h1", "Base de conocimientos");
const touristsTitle = createElement("h2", "Turistas");
const guidesTitle = createElement("h2", "Guias");
const destinationsTitle = createElement("h2", "Destinos");
leftCol.appendChild(mainTitle);
leftCol.appendChild(touristsTitle);
leftCol.appendChild(guidesTitle);
leftCol.appendChild(destinationsTitle);



tableElement();
addHeaders(["Nombre", "Edad", "DNI", "Nacionalidad"]);
addContent(["nombreEj", "edadEj", "dniEj", "nacionEj"]);




//Definicion de elementos para la columna derecha
//Guarda botones, dialogs y el boton de limpiar base de conocimientos
const optionsTitle = createElement("h1", "Opciones");
const cleanDataButton = createElement("button", "Limpiar Base de Conocimientos", STYLES.cleanButton);
rightCol.appendChild(optionsTitle);
rightCol.appendChild(cleanDataButton);

main.appendChild(leftCol);
main.appendChild(rightCol);

//Definicion del Footer
const footer = createElement("footer", "", STYLES.headerFooter);
const navFooter = createElement("nav", "", STYLES.nav);
const [authorsButton, authorsDialog] = createDialog(
    "authors", 
    "Autores",
    createElement("p", "Autores del sistema"),
    STYLES.buttonDialog
)
const [helpButton, helpDialog] = createDialog(
    "help", 
    "Ayuda",
    createElement("p", "Ayuda"),
    STYLES.buttonDialog
)
const [aboutButton, aboutDialog] = createDialog(
    "about", 
    "Acerca De",
    createElement("p", "Acerca De"),
    STYLES.buttonDialog
)

navFooter.appendChild(authorsButton);
navFooter.appendChild(authorsDialog);
navFooter.appendChild(helpButton);
navFooter.appendChild(helpDialog);
navFooter.appendChild(aboutButton);
navFooter.appendChild(aboutDialog);
footer.appendChild(navFooter);


//Mostrar toda la pagina
printAddingNodes(header);
printAddingNodes(main);
printAddingNodes(footer);






