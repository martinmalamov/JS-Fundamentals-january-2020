function solve() {

    //декларираме асоциативен масив със сравняващи функции
    const comparators = {
        'ID': (a, b) => a[0] - b[0],
        'author': (a, b) => a[1].author.localeCompare(b[1].author),
        'severity': (a, b) => a[1].severity - b[1].severity
    }

    let currentId = 0;
    const reports = new Map();
    let outputRef = null
    let sortingMethod = 'ID'

    function report(author, description, reproducible, severity) {
        let status = 'Open'
        const statusSpan = el('span', `${status} | ${severity}`, { className: 'status' })

        const element = el('div', [
            el('div', el('p', description), { className: 'body' }),
            el('div' , [
                el('span', `Submitted by: ${author}`, { className: 'author' }),
                statusSpan
            ], { className: 'title' })
        ], {
            id: `report_${currentId}`,
            className: 'report'
        })

        const newReport = {
            ID: currentId,
            author,
            description,
            reproducible,
            severity,
            element //dom element
        }

        Object.defineProperty(newReport, 'status', {
            get: () => status,
            set: (value) => {
                status = value;
                statusSpan.textContent = `${status} | ${severity}`
            }
        })

        reports.set(currentId, newReport);

        currentId++;
        render()
    }

    function setStatus(id, newStatus) {
        reports.get(id).status = newStatus;
    }

    function remove(id) {
        reports.get(id).element.remove();
        reports.delete(id);
        render();
    }

    function sort(method) {
        sortingMethod = method;
        //sort DOM el
        render()
    }

    function output(newSelector) {
        outputRef = document.querySelector(newSelector);
        render();
    }

    function render() {
        if (outputRef !== null) {
            [...reports]
                .sort(comparators[sortingMethod])
                .forEach(([id, r]) => outputRef.appendChild(r.element))
        }
    }

    return {
        report,
        setStatus,
        remove,
        sort,
        output
    }


    function el(type, content, attributes) {
        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes)
        }

        if (Array.isArray(content)) {
            content.forEach(append);
        } else {
            append(content)
        }

        function append(node) {
            if (typeof node === 'string') {
                node = document.createTextNode(node);
            }
            result.appendChild(node);
        }
        return result;
    }
}

// function solve() {
//     // декларираме асоциативен масив със сравняващи функции
//     const comparators = {
//         'ID': (a, b) => a[0] - b[0],
//         'author': (a, b) => a[1].author.localeCompare(b[1].author),
//         'severity': (a, b) => a[1].severity - b[1].severity,
//     };

//     // декларираме колекция с доклади за бъгове, референции към DOM
//     let currentId = 0;
//     const reports = new Map();
//     let outputRef = null;
//     let sortingMethod = 'ID';

//     // фактори-фунцкия, създаваща доклади за бъгове
//     function report(author, description, reproducible, severity) {
//         let status = 'Open';
//         const statusSpan = el('span', `${status} | ${severity}`, { className: 'status' });

//         const element = el('div', [
//             el('div', el('p', description), { className: 'body' }),
//             el('div', [
//                 el('span', `Submitted by: ${author}`, { className: 'author' }),
//                 statusSpan
//             ], { className: 'title' })
//         ], {
//             id: `report_${currentId}`,
//             className: 'report'
//         });

//         const newReport = {
//             ID: currentId,
//             author,
//             description,
//             reproducible,
//             severity,
//             element // DOM element
//         };

//         Object.defineProperty(newReport, 'status', {
//             get: () => status,
//             set: (value) => {
//                 status = value;
//                 statusSpan.textContent = `${status} | ${severity}`;
//             }
//         });

//         reports.set(currentId, newReport);

//         currentId++;

//         render();
//     }

//     // функции за манипулация на доклади
//     function setStatus(id, newStatus) {
//         reports.get(id).status = newStatus;
//     }

//     function remove(id) {
//         reports.get(id).element.remove();
//         reports.delete(id);
//         render();
//     }

//     function sort(method) {
//         sortingMethod = method;
//         render();
//     }

//     // фунцкия, закащата генерирания HTML
//     function output(newSelector) {
//         outputRef = document.querySelector(newSelector);
//         render();
//     }

//     function render() {
//         // проверяваме за валиден selector
//         if (outputRef !== null) {
//             // закачаме докладите според зададения ред
//             [...reports]
//                 .sort(comparators[sortingMethod])
//                 .forEach(([id, r]) => outputRef.appendChild(r.element));
//         }
//     }

//     return {
//         report,
//         setStatus,
//         remove,
//         sort,
//         output
//     };

//     function el(type, content, attributes) {
//         const result = document.createElement(type);

//         if (attributes !== undefined) {
//             Object.assign(result, attributes);
//         }

//         if (Array.isArray(content)) {
//             content.forEach(append);
//         } else {
//             append(content);
//         }

//         function append(node) {
//             if (typeof node === 'string') {
//                 node = document.createTextNode(node);
//             }
//             result.appendChild(node);
//         }

//         return result;
//     }
// }