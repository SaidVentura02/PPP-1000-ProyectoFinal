/* 
    @author jose.inestroza@unah.edu.hn ffloresh@unah.hn, said.ventura@unah.hn, iadiazr@unah.hn
    @version 0.1.4
    @date 2026/11/26
    @since 2026/11/16
*/

import {init, printAddingNodes } from "./modules/dom.js";
import { createAnchor, createDialog, createElement, createHead } from "./modules/dom-html-elements.js"; 
import {STYLES} from "./modules/nodes-styles.js";
import { tableElement, addHeaders, addContent } from "./modules/tables.mjs";
import { getData } from "./modules/fetch.mjs";


//Se realiza la peticion para obtener las variables de entorno
const requestEnv= async () =>{
        let json = await getData("api/env/");
        if(json.status){ 
            let env = json.env;
            init(STYLES.body, `${env.theme}`);
        } else{
            console.log("ERROR");
        }
    }

requestEnv();

//Creacion del Head: metadatos de la pagina
const head = createHead("icon", "./assets/img/truck-fast-solid.png","image/png", "Inicio - Gestion de Rutas");


//Creacion del header
const header = createElement("header", "", STYLES.header);
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

//Se genera las sección de turistas
leftCol.appendChild(touristsTitle);
//Creación de la tabla turistas
const tableTourists = tableElement();
leftCol.appendChild(tableTourists);
addHeaders(tableTourists, ["Nombre", "Edad", "DNI", "Nacionalidad", "Grupo"]);
//Se realiza la peticion para obtener los datos de la tabla turista
const requestTourist = async () =>{
        let json = await getData("api/tourist-query/");
        if(json.status){ 
            let jsonArray = JSON.parse(json.data);
            jsonArray.map((item) => addContent(tableTourists, [item.name, item.age, item.dni, item.country, item.group]));
        } else{
            console.log("ERROR");
        }
    }

//Se genera las sección de guias
leftCol.appendChild(guidesTitle);
//Creación de la tabla guias
const tableGuides = tableElement();
leftCol.appendChild(tableGuides);
addHeaders(tableGuides, ["Nombre", "Grupo asignado"]);
//Se realiza la peticion para obtener los datos de la tabla guia
const requestGuide = async () =>{
        let json = await getData("api/guide-query/");
        if(json.status){ 
            let jsonArray = JSON.parse(json.data);
            jsonArray.map((item) => addContent(tableGuides, [item.name, item.group]));
        } else{
            console.log("ERROR");
        }
    }

//Se genera las sección de destinos
leftCol.appendChild(destinationsTitle);
//Creacion de la tabla de destinos
const tableDestinations = tableElement();
leftCol.appendChild(tableDestinations);
addHeaders(tableDestinations, ["Destino", "Tipo"]);
//Se realiza la peticion para obtener los datos de la tabla destino
const requestDestination = async () =>{
        let json = await getData("api/destination-query/");
        if(json.status){ 
            let jsonArray = JSON.parse(json.data);
            jsonArray.map((item) => addContent(tableDestinations, [item.name, item.type]));
        } else{
            console.log("ERROR");
        }
    }

//Definicion de elementos para la columna derecha
//Guarda botones, dialogs y el boton de limpiar base de conocimientos
const optionsTitle = createElement("h1", "Opciones");
const cleanDataButton = createElement("button", "Limpiar Base de Conocimientos", STYLES.cleanButton);
rightCol.appendChild(optionsTitle);
rightCol.appendChild(cleanDataButton);

main.appendChild(leftCol);
main.appendChild(rightCol);

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
printAddingNodes(head);
printAddingNodes(header);
printAddingNodes(main);
printAddingNodes(footer);

//Peticiones para llenado de tablas
requestTourist();
requestGuide();
requestDestination();

//
//Peticiones asincronas para las estadisticas
//
const tableTouristOfGuide = tableElement();
//addHeaders(tableTouristOfGuide,["Turista", "Guia"]);
const requestTouristOfGuide = async () =>{
        let json = await getData("api/tourist-of-guide-query/");
        if(json.status){ 
            let jsonArray = JSON.parse(json.data);
            jsonArray.map((item) => addContent(tableTouristOfGuide, [item.name, item.guide]));
        } else{
            console.log("ERROR");
        }
    }
//requestTouristOfGuide();


const tableFrequentTourist = tableElement();
//addHeaders(tableFrequentTourist,["Turista", "Guia"]);
const requestFrequentTourist = async () =>{
        let json = await getData("api/frequent-tourist-query/");
        if(json.status){ 
            let jsonArray = JSON.parse(json.data);
            console.log(jsonArray)
            //jsonArray.map((item) => addContent(tableFrequentTourist, [item.name, item.destination]));
        } else{
            console.log("ERROR");
        }
    }
//requestFrequentTourist();


const tableRelatedDestinations = tableElement();
//addHeaders(tableFrequentTourist,["Turista", "Guia"]);
const requestFRelatedDestinations = async () =>{
        let json = await getData("api/related-destination-query/");
        if(json.status){ 
            let jsonArray = JSON.parse(json.data);
            console.log(jsonArray)
            //jsonArray.map((item) => addContent(tableRelatedDestinations [item.name, item.destination]));
        } else{
            console.log("ERROR");
        }
    }
//requestRelatedDestinations();


const tableTouristsDestinations = tableElement();
//addHeaders(tableFrequentTourist,["Turista", "Guia"]);
const requestTouristsDestinations = async () =>{
        let json = await getData("api/tourists-destinations-query/");
        if(json.status){ 
            let jsonArray = JSON.parse(json.data);
            console.log(jsonArray)
            //jsonArray.map((item) => addContent(tableTouristsDestinations, [item.name, item.destination]));
        } else{
            console.log("ERROR");
        }
    }
//requestTouristsDestinations();





