
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



// import { displayInfo } from './appStudents.js';
// const url = 'https://api.backendless.com/9A2B6B10-57D4-1943-FFED-497FC23A6800/0BFE51EF-4300-451E-9357-9207DB28B3B0/data/students';
// export function getData() {
//     return fetch(url)

// }


// const idInput = document.getElementById('id');
// const firstNameInput = document.getElementById('firstName');
// const lastNameInput = document.getElementById('lastName');
// const facultyNumberInput = document.getElementById('fn');
// const gradeInput = document.getElementById('grade');


// export function uploadData() {
//     const id = idInput.value;
//     const firstName = firstNameInput.value;
//     const lastName = lastNameInput.value;
//     const facultyNumber = facultyNumberInput.value;
//     const grade = gradeInput.value;


//     if (id && firstName && lastName && facultyNumber && grade) {
//         let currentStudent = { id, firstName, lastName, facultyNumber, grade };

//         fetch(url, {
//             method: 'POST',
//             body: JSON.stringify(currentStudent)
//         })
//         .then( displayInfo())
//             .catch(errorHandler)
//     }

   

//     idInput.value = null;
//     firstNameInput.value = null;
//     lastNameInput.value = null;
//     facultyNumberInput.value = null;
//     gradeInput.value = null;
// }

// function errorHandler(err) {
//     console.log(err.text);
// }
