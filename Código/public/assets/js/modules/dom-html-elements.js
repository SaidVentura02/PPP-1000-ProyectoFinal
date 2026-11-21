/*
    @author jose.inestroza@unah.edu.hn
    @version 0.2.0
    @date 2026/11/19
    @since 2026/11/16
*/

const createElement = (name, content = "", style = {}, action = () => null) => {
    const element = document.createElement(name);
    element.onclick = action;
    element.innerText = content;

    Object.assign(element.style, style);
    return element;
}

const createDialog = (id, buttonContent, dialogContent, buttonStyle = {}, dialogStyle = {}) => {
    //Boton de apertura
    const openButton = document.createElement("button");
    openButton.setAttribute("commandfor", id);
    openButton.setAttribute("command", "show-modal");
    openButton.innerText = buttonContent;
    Object.assign(openButton.style, buttonStyle)
    //Boton para cerrar modal
    const closeButton = document.createElement("button");
    closeButton.setAttribute("popovertarget", id);
    closeButton.setAttribute("popovertargetaction", "hide");
    closeButton.innerText = buttonContent;
    Object.assign(closeButton.style, buttonStyle)
    //Dialog
    const dialog = document.createElement("dialog");
    dialog.id = id;
    if (dialogContent != null) dialog.appendChild(dialogContent);
    Object.assign(dialog.style, dialogStyle);

    return [openButton, dialog]
}

const createTable = () => null;

const createAnchor = (content, url, style = {}) => {
    const anchor = createElement("a", content, style);
    anchor.setAttribute("href", url);
    return anchor;
}

export {
    createElement,
    createDialog,
    createAnchor
};