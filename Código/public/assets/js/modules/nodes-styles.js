import { html, theme, actualTheme } from "./dom.js"

const STYLES = {
    headerFooter: {
        backgroundColor: actualTheme["primary-color"],
        height: "70px",
        position: "relative",
        marginBottom: "16px"

    },
    nav: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)"
    },
    anchor: {
        textDecoration: "none",
        color: actualTheme["background-color"],
        marginLeft: "16px",
        fontSize: "24px"
    },
    main:{
        position: "relative",
        height: "800px"
    },
    leftCol: {
        position: "absolute",
        width: "70%",
        height: "100%",
        top: "0",
        left: "0",
    },
    rightCol: {
        position: "absolute",
        width: "30%",
        height: "100%",
        top: "0",
        right: "0",
    },
    cleanButton: {
        padding: "8px",
        backgroundColor: "red",
        width: "25%",
        color: actualTheme["background-color"],
        border: "none",
        cursor: "pointer"
    },
    buttonDialog: {
        marginLeft: "16px",
        backgroundColor: "none",
        color: actualTheme["background-color"],
        border: "none",
        cursor: "pointer",
        backgroundColor: actualTheme["primary-color"],
    }
}

export {
    STYLES
}