import el from './dom.js';
import * as api from './dataaa.js';

window.addEventListener('load', async () => {
    const tableBody = document.querySelector('table tbody')
    tableBody.addEventListener('load', displayStudents());

    const input = {
        ID: document.querySelector('#id'),
        FirstName: document.querySelector('#firstName'),
        LastName: document.querySelector('#lastName'),
        FacultyNumbers: document.querySelector('#fn'),
        Grade: document.querySelector('#grade')
    }

    const submitBtn = document.querySelector('form > button')
    submitBtn.addEventListener('click', createStudents);

    async function createStudents(e) {
        e.preventDefault();

        if (validateInput(input) === false) {
            alert('All field are required')
            return;
        }

        const student = {
            ID: input.ID.value,
            FirstName: input.FirstName.value,
            LastName: input.LastName.value,
            FacultyNumbers: input.FacultyNumbers.value,
            Grade: input.Grade.value
        }
        try {
            toggleInput(false, ...Object.values(input), submitBtn)
            const created = await api.createStudents(student)
            tableBody.appendChild(renderStudents(created))
            Object.entries(input).forEach(([k, v]) => v.value = '')
        } catch (err) {
            alert(err);
            console.log(err)
        } finally {
            toggleInput(true, ...Object.values(input), submitBtn)
        }
    }

    function toggleInput(active, ...list) {
        list.forEach(e => e.disabled = !active)
    }

    function validateInput(input) {
        let valid = true;
        Object.entries(input).forEach(([k, v]) => {
            if (v.value.length === 0) {
                v.className = 'inputError'
                valid = false
            } else {
                v.removeAttribute('class')
            }
        });
        return valid
    }


    async function displayStudents() {
        tableBody.innerHTML = '<tr><td colspan="4">Loading...</td></tr>'
        const students = await api.getStudents();
        tableBody.innerHTML = '';
        students.sort((a, b) => a.ID - b.ID)
            .forEach(b => tableBody.appendChild(renderStudents(b)))
    }

    function renderStudents(stud) {
        const deleteBtn = el('button', 'Delete')
        deleteBtn.addEventListener('click', deleteStudent)

        const element = el('tr', [
            el('td', stud.ID),
            el('td', stud.FirstName),
            el('td', stud.LastName),
            el('td', stud.FacultyNumbers),
            el('td', stud.Grade),
            deleteBtn
        ])

        return element;

        async function deleteStudent() {
            try {
                deleteBtn.disabled = true;
                deleteBtn.textContent = " Please await...";
                await api.deleteStudent(stud.objectId);
                element.remove();
            } catch (err) {
                deleteBtn.disabled = false;
                deleteBtn.textContent = "Delete";
                alert(err);
                console.error(err);
            }
        }
    }

})