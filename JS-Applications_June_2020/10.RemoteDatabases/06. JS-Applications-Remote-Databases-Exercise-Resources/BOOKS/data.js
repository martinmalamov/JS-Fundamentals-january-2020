
const appId = '9A2B6B10-57D4-1943-FFED-497FC23A6800'
const apiKey = '8D4E32F1-E6E4-4CB5-A826-EED20708AADF'

function host(endpoint) {
    return `https://api.backendless.com/${appId}/${apiKey}/data/${endpoint}`
}

export async function getBooks() {
    const response = await fetch(host('books'));
    const data = await response.json();

    return data;
}

export async function createBook(book) {
    const response = await fetch(host('books'), {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json();
    return data;
}

export async function updateBook(book) {
    const id = book.objectId;
    const response = await fetch(host('books/' + id), {
        method: 'PUT',
        body: JSON.stringify(book),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json();
    return data;
}

export async function deleteBook(id) {
    const response = await fetch(host('books/' + id), {
        method: 'DELETE',
    })

    const data = await response.json();
    return data;
}