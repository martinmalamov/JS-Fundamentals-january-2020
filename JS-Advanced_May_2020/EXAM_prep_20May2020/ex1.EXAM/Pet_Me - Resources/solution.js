function solve() {

    const products = document.querySelectorAll('#adoption ul')[0]
    // const list = document.querySelector('#container');
    // let items = Array.from(list.querySelectorAll('input'))

    const form = document.querySelector('#add')

    const openDiv = document.querySelectorAll('section')[0]

    let inputName = form[0];
    let inputAge = form[1];
    let inputKind = form[2];
    let inputOwner = form[3];
    let butt = form[4];
    // let inputAge = items[1];
    // let inputKind = items[2];
    // let inputOwner = items[3];
    // let butt = document.querySelector('button')[4];

    document.querySelector('#container button').addEventListener('click', addTask)

    function addTask(e) {
        e.preventDefault();

        let taskName = inputName.value
        let taskAge = Number(inputAge.value)
        let taskKind = inputKind.value
        let taskOwner = inputOwner.value

        const startBtn = el('button', 'Contact with owner', { className: 'adopting' });

        // const btnDiv = el('ul', [
        //     startBtn
        // ])

        const qtyStrong = el('strong', `${taskName}`)
        const addBtn = el('button', `Contact with owner`, qtyStrong)

        const product = el('li',
            el('p', [
                el('strong', `${taskName} is a `),
                el('strong', `${taskAge} year old`),
                el('strong', `${taskKind}`),

            ],
                el('span', `Owner: ${taskOwner}`, addBtn)))

        products.appendChild(product)

    }

}

function el(type, content, attributed) {
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



// function solve() {

//     const sections = document.querySelectorAll('section')
//     const openDiv = sections.item(1).querySelectorAll('div').item(1)
//     const progressDiv = sections.item(2).querySelectorAll('div').item(1)
//     const finishDiv = sections.item(3).querySelectorAll('div').item(1)

//     let inputName = document.querySelector('#task');
//     let inputAge = document.querySelector('#description');
//     let inputKind = document.querySelector('#date');
//     let inputOwner = document.querySelector('#date');

//     document.querySelector('#add').addEventListener('click', addTask)

//     function addTask(e) {
//         e.preventDefault();

//         let taskName = inputTask.value.trim();
//         let taskAge = inputDesc.value.trim();
//         let taskKind = inputDate.value.trim();
//         let taskOwner = inputDate.value.trim();

//         if (taskName.length > 0 && taskDesc.length > 0 && taskDate.length > 0) {

//             const startBtn = el('button', 'Start', { className: 'green' });
//             const finishBtn = el('button', 'Finish', { className: 'orange' });
//             const deleteBtn = el('button', 'Delete', { className: 'red' });

//             const btnDiv = el('div', [
//                 startBtn,
//                 deleteBtn
//             ], { className: 'flex' })


//             const task = el('article', [
//                 el('h3', taskName),
//                 el('p', `Description: ${taskDesc}`),
//                 el('p', `Due Date: ${taskDate}`),
//                 btnDiv
//             ])

//             startBtn.addEventListener('click', () => {
//                 progressDiv.appendChild(task)
//                 startBtn.remove();
//                 btnDiv.appendChild(finishBtn)
//             })

//             finishBtn.addEventListener('click', () => {
//                 finishDiv.appendChild(task)
//                 btnDiv.remove();
//             })

//             deleteBtn.addEventListener('click', () => {
//                 task.remove();
//             })

//             openDiv.appendChild(task)

//         }
//     }

//     function el(type, content, attributed) {
//         const result = document.createElement(type);

//         if (attributed !== undefined) {
//             Object.assign(result, attributed)
//         }

//         if (Array.isArray(content)) {
//             content.forEach(append)
//         } else {
//             append(content)
//         }

//         function append(node) {
//             if (typeof node === 'string') {
//                 node = document.createTextNode(node);
//             }
//             result.appendChild(node)
//         }

//         return result
//     }
// } F

