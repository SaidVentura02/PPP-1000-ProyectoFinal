import { init, printAddingNodes } from "./modules/dom.js";
import { createAnchor, createDialog, createElement } from "./modules/dom-html-elements.js";
import { STYLES } from "./modules/nodes-styles.js"

init(STYLES.body);

//Header
const header = createElement("header", "", STYLES.header);
const navHeader = createElement("nav", "", STYLES.nav);
const homeAnchor = createAnchor("Inicio", "index.html", STYLES.anchor);
const routesAnchor = createAnchor("Rutas", "routes.html", STYLES.anchor);

navHeader.appendChild(homeAnchor);
navHeader.appendChild(routesAnchor);
header.appendChild(navHeader);

//Main con el titulo
const main = createElement("main");
const mainTitle = createElement("h1", "Rutas turísticas");
main.appendChild(mainTitle);

//Definicion del Footer
const footer = createElement("footer", "", STYLES.footer);
const navFooter = createElement("nav", "", STYLES.nav);

//Contenido de los dialogs, creado afuera con createElement
const authorsContent = createElement("div");
authorsContent.appendChild(createElement("h2", "Autores", STYLES.dialogTitle));
authorsContent.appendChild(createElement("p", "iadiazr@unah.hn", STYLES.dialogText));
authorsContent.appendChild(createElement("p", "ffloresh@unah.hn", STYLES.dialogText));
authorsContent.appendChild(createElement("p", "said.ventura@unah.hn", STYLES.dialogText));


const helpContent = createElement("div");
helpContent.appendChild(createElement("h2", "Ayuda", STYLES.dialogTitle));
helpContent.appendChild(createElement("p", "Esta aplicación te permite consultar y administrar la información turística y de transporte de Tegucigalpa.", STYLES.dialogText));
helpContent.appendChild(createElement("p", "Usa el menú de arriba para ir a Inicio o a Rutas. En la columna Opciones están los botones para trabajar con los datos. El botón rojo borra toda la base de conocimientos, úsalo con cuidado.", STYLES.dialogText));

const aboutContent = createElement("div");
aboutContent.appendChild(createElement("h2", "Acerca De", STYLES.dialogTitle));
aboutContent.appendChild(createElement("p", "Sistema Gestor de Rutas Turísticas y Conexiones de Transporte para Tegucigalpa, Honduras, con horarios y distintos tipos de transporte.", STYLES.dialogText));
aboutContent.appendChild(createElement("p", "Por dentro usa JavaScript para lo que ves en pantalla, PHP para la lógica, Prolog para guardar los datos y Python para las estadísticas.", STYLES.dialogText));

const [authorsButton, authorsDialog, authorsButtonClose] = createDialog(
    "authors", 
    "Autores",
    authorsContent,
    STYLES.buttonDialogFooter,
    STYLES.dialog,
    STYLES.button
)
const [helpButton, helpDialog, helpButtonClose] = createDialog(
    "help", 
    "Ayuda",
    helpContent,
    STYLES.buttonDialogFooter,
    STYLES.dialog,
    STYLES.button
)
const [aboutButton, aboutDialog, aboutButtonClose] = createDialog(
    "about", 
    "Acerca De",
    aboutContent,
    STYLES.buttonDialogFooter,
    STYLES.dialog,
    STYLES.button
)

navFooter.appendChild(authorsButton);
navFooter.appendChild(authorsDialog);
authorsDialog.appendChild(authorsButtonClose);
navFooter.appendChild(helpButton);
navFooter.appendChild(helpDialog);
helpDialog.appendChild(helpButtonClose);
navFooter.appendChild(aboutButton);
navFooter.appendChild(aboutDialog);
aboutDialog.appendChild(aboutButtonClose);
footer.appendChild(navFooter);


//Mostrar toda la pagina
printAddingNodes(header);
printAddingNodes(main);
printAddingNodes(footer);