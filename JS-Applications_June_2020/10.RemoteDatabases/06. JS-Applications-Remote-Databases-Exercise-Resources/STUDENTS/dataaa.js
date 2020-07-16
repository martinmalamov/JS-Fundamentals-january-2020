
const appId = '9A2B6B10-57D4-1943-FFED-497FC23A6800'
const apiKey = '0BFE51EF-4300-451E-9357-9207DB28B3B0'

function host(endpoint) {
    return `https://api.backendless.com/${appId}/${apiKey}/data/${endpoint}`
}

export async function getStudents() {
    const response = await fetch(host('students'));
    const data = await response.json();

    return data;
}

export async function createStudents(student) {
    const response = await fetch(host('students'), {
        method: 'POST',
        body: JSON.stringify(student),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json();
    return data;
}


// export async function updateBook(student) {
//     const id = book.objectId;
//     const response = await fetch(host('students/' + id), {
//         method: 'PUT',
//         body: JSON.stringify(book),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })

//     const data = await response.json();
//     return data;
// }

export async function deleteStudent(id) {
    const response = await fetch(host('students/' + id), {
        method: 'DELETE',
    })

    const data = await response.json();
    return data;
}