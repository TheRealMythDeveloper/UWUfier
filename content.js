
function uwufy(text) {
    return text
        .replace(/r/g, "w")
        .replace(/l/g, "w")
        .replace(/R/g, "W")
        .replace(/L/g, "W");
}

function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        if (node.nodeValue.trim() !== "") {
            node.nodeValue = uwufy(node.nodeValue);
        }
        return;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
        if (
            node.tagName === "SCRIPT" ||
            node.tagName === "STYLE" ||
            node.tagName === "TEXTAREA" ||
            node.tagName === "INPUT"
        ) {
            return;
        }

        for (const child of node.childNodes) {
            processNode(child);
        }
    }
}

processNode(document.body);



