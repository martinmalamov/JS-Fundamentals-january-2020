export default function el(type, content, attributed) {
    const result = document.createElement(type);

    if (attributed !== undefined) {
        Object.assign(result, attributed)
    }

    if (Array.isArray(content)) {
        content.forEach(append)
    } else {
        append(content)
    }

    function append(node) {
        if (typeof node === 'string' || typeof node === 'number') {
            node = document.createTextNode(node);
        }
        result.appendChild(node)
    }

    return result
}