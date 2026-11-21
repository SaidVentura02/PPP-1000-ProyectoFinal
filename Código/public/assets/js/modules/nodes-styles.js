/* 
    @author ffloresh@unah.hn, said.ventura@unah.hn, iadiazr@unah.hn
    @version 0.1.1
    @date 2026/11/20
    @since 2026/11/19
*/

import { html, theme, actualTheme } from "./dom.js"

const STYLES = {
    body:{
        position: "relative",
        minHeight: "100vh",
        margin: "0",
        paddingBottom: "86px"
    },
    header: {
        backgroundColor: actualTheme["primary-color"],
        height: "70px",
        position: "relative",
        marginBottom: "16px"
    },
    footer: {
        backgroundColor: actualTheme["primary-color"],
        height: "70px",
        width: "100%",
        position: "absolute",
        marginBottom: "16px",
        bottom: "0",
        left: "0"
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
        cursor: "pointer",
        borderRadius: "12px"
    },
    button:{
        padding: "8px",
        backgroundColor: actualTheme["primary-color"],
        width: "25%",
        color: actualTheme["background-color"],
        border: "none",
        cursor: "pointer",
        borderRadius: "12px"
    },
    buttonDialogFooter: {
        marginLeft: "16px",
        backgroundColor: "none",
        color: actualTheme["background-color"],
        border: "none",
        cursor: "pointer",
        backgroundColor: actualTheme["primary-color"],
        fontSize: "24px"
    },
    dialog: {
        width: "90%",
        maxWidth: "520px",
        padding: "24px",
        border: `2px solid ${actualTheme["primary-color"]}`,
        borderRadius: "12px",
        backgroundColor: actualTheme["background-color"],
        color: actualTheme["tertiary-color"]
    },
    dialogTitle: {
        marginTop: "0",
        paddingBottom: "8px",
        color: actualTheme["primary-color"],
        borderBottom: `2px solid ${actualTheme["secondary-color"]}`
    },
    dialogText: {
        fontSize: "16px",
        lineHeight: "1.6"
    }
    
}

export {
    STYLES
}