/*
    @author jose.inestroza@unah.edu.hn, fflores@unah.hn 
    @version 0.1.2
    @date 2026/11/24
    @since 2026/11/16
*/

const createElement = (name, content = "", style = {}, action = () => null) => {
    const element = document.createElement(name);
    element.onclick = action;
    element.innerText = content;

    Object.assign(element.style, style);
    return element;
}

const createDialog = (id, buttonContent, dialogContent, buttonStyle = {}, dialogStyle = {}, closeButtonStyle = {}) => {
    //Boton de apertura
    const openButton = document.createElement("button");
    openButton.setAttribute("commandfor", id);
    openButton.setAttribute("command", "show-modal");
    openButton.innerText = buttonContent;
    Object.assign(openButton.style, buttonStyle)
    //Boton para cerrar modal
    const closeButton = document.createElement("button");
    closeButton.setAttribute("commandfor", id);
    closeButton.setAttribute("command", "close");
    closeButton.innerText = "Cerrar";
    Object.assign(closeButton.style, closeButtonStyle)
    //Dialog
    const dialog = document.createElement("dialog");
    dialog.id = id;
    if (dialogContent != null) dialog.appendChild(dialogContent);
    Object.assign(dialog.style, dialogStyle);

    return [openButton, dialog, closeButton]
}

const createAnchor = (content, url, style = {}) => {
    const anchor = createElement("a", content, style);
    anchor.setAttribute("href", url);
    return anchor;
}

const createLink = (rel, href, type) => {
    const link = createElement("link", "");
    link.setAttribute("rel", rel);
    link.setAttribute("href", href);
    link.setAttribute("type", type);
    return link;
}

const createDocumentTitle = (title) => {
    const docTitle = createElement("title", title)
    return docTitle;
}

const createHead = (rel, href, type, title) => {
    const head = createElement("head", "");
    const link = createLink(rel, href, type);
    const docTitle = createDocumentTitle(title);
    head.appendChild(link);
    head.appendChild(docTitle);
    return head;
}

export {
    createElement,
    createDialog,
    createAnchor,
    createHead
};