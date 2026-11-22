/* 
    @author said.ventura@unah.hn
    @version 0.1.2
    @date 2026/11/21
    @since 2026/11/20
*/

import { th, td } from "./dom-html-basic-elements.js";

const rowElement = () => document.createElement("tr");
const insertRowContent = (rowElement, htmlElement) => rowElement.innerHTML+=htmlElement;
const insertRow = (htmlElement, rowElement) => htmlElement.appendChild(rowElement);
const table = () => `<table border></table>`;

const addHeaders = (elements) => {
    let table = document.querySelector("table");
    let header = document.createElement("thead");
    let row = rowElement();

    let h = elements.map((item) => insertRowContent(row, th(item)));

    insertRow(header,row);
    table.appendChild(header);
}

const addContent = (data) => {
    let table = document.querySelector("table");
    let body = document.createElement("tbody");
    let row = rowElement();

    let d = data.map((item) => insertRowContent(row, td(item)));

    insertRow(body,row);
    table.appendChild(body);
}

export {table, addHeaders, addContent}