/* 
    @author said.ventura@unah.hn
    @version 0.1.1
    @date 2026/11/20
*/

import { th, td } from "./dom-html-basic-elements.js";

const rowElement = () => document.createElement("tr");
const insertRowContent = (rowElement, htmlElement) => rowElement.innerHTML+=htmlElement;
const insertRow = (htmlElement, rowElement) => htmlElement.appendChild(rowElement);


const tableElement = () => {
    let table = document.createElement("table");
    table.appendChild(document.createElement("thead"));
    table.appendChild(document.createElement("tbody"));
    table.style.border="1px solid black";
    document.body.appendChild(table);
}

const addHeaders = (elements) => {
    let header = document.querySelector("thead");
    let row = rowElement();
    
    let h = elements.map((item) => insertRowContent(row, th(item)));

    insertRow(header,row);
}

const addContent = (data) => {
    let body = document.querySelector("tbody");
    let row = rowElement();

    let d = data.map((item) => insertRowContent(row, td(item)));

    insertRow(body,row);
}


export {tableElement, addHeaders, addContent}