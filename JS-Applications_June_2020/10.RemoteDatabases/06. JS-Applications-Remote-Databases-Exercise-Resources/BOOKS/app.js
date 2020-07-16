import el from './dom.js';
import * as api from './data.js';

window.addEventListener('load', async () => {
    const table = document.querySelector('table tbody')
    document.querySelector('#loadBooks').addEventListener('click', displayBooks);

    const input = {
        title: document.querySelector('#title'),
        author: document.querySelector('#author'),
        isbn: document.querySelector('#isbn'),
    }

    // const titleInput = document.querySelector('#title');
    // const authorInput = document.querySelector('#author');
    // const isbnInput = document.querySelector('#isbn');
    const createBtn = document.querySelector('form > button');
    createBtn.addEventListener('click', createBooks);

    async function createBooks(e) {
        e.preventDefault();


        if (validateInput(input) === false) {
            alert('All field are required')
            return;
        }

        const book = {
            title: input.title.value,
            author: input.author.value,
            isbn: input.isbn.value,
        }

        // if (valid === false) {
        //     return;
        // }

        try {
            // Object.entries(input).forEach(([k, v]) => v.disabled = true)
            // createBtn.disabled = true;
            toggleInput(false, ...Object.values(input), createBtn)
            const created = await api.createBook(book)
            table.appendChild(renderBook(created))
            Object.entries(input).forEach(([k, v]) => v.value = '')
        } catch (err) {
            alert(err);
            console.log(err)
        } finally {
            toggleInput(true, ...Object.values(input), createBtn)
            // Object.entries(input).forEach(([k, v]) => v.disabled = false)
            // createBtn.disabled = false;
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

    async function displayBooks() {
        table.innerHTML = '<tr><td colspan="4">Loading...</td></tr>'
        const books = await api.getBooks();
        table.innerHTML = '';
        books.sort((a, b) => a.author.localeCompare(b.author))
            .forEach(b => table.appendChild(renderBook(b)))

    }

    function renderBook(book) {
        const editBtn = el('button', 'Edit')
        editBtn.addEventListener('click', toggleEditor)
        const deleteBtn = el('button', 'Delete')
        deleteBtn.addEventListener('click', deleteBook)

        const element = el('tr', [
            el('td', book.title),
            el('td', book.author),
            el('td', book.isbn),
            el('td', [
                editBtn,
                deleteBtn
            ])
        ])

        return element

        function toggleEditor() {
            const confirmBtn = el('button', 'Save');
            const cancelBtn = el('button', 'Cancel');

            confirmBtn.addEventListener('click', async () => {
                if (validateInput(edit) === false) {
                    alert('All field are required')
                    return;
                }

                const edited = {
                    objectId: book.objectId,
                    title: edit.title.value,
                    author: edit.author.value,
                    isbn: edit.isbn.value,
                }

                try {
                    toggleInput(false, ...Object.values(edit), confirmBtn, cancelBtn)
                    const result = await api.updateBook(edited)
                    table.replaceChild(renderBook(result), editor)
                } catch (err) {
                    alert(err);
                    console.log(err)
                    toggleInput(true, ...Object.values(edit), confirmBtn, cancelBtn)
                }
            })

            cancelBtn.addEventListener('click', () => {
                table.replaceChild(element, editor)
            })

            const edit = {
                title: el('input', null, { type: 'text', value: book.title }),
                author: el('input', null, { type: 'text', value: book.author }),
                isbn: el('input', null, { type: 'text', value: book.isbn }),
            }

            const editor = el('tr', [
                el('td', edit.title),
                el('td', edit.author),
                el('td', edit.isbn),
                el('td', [
                    confirmBtn,
                    cancelBtn
                ])
            ])

            table.replaceChild(editor, element)
        }


        async function deleteBook() {
            try {
                deleteBtn.disabled = true;
                deleteBtn.textContent = " Please await...";
                await api.deleteBook(book.objectId);
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