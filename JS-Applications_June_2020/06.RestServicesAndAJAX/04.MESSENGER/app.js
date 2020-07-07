//How to start this program: 
//    File -> Open Folder(open folder with all exercises) -> (write in terminal) node server ->
//  -> start program with live server ( right click on index.html(you MUST have live server extension))


function attachEvents() {
    const baseUrl = 'http://localhost:3000/messenger';

    const elements = {
        author() { return document.querySelector('input#author') },
        content() { return document.querySelector('input#content') },
        submit() { return document.querySelector('input#submit') },
        refresh() { return document.querySelector('input#refresh') },
        textar() { return document.querySelector('textarea#messages') },
    }

    let messages = [

    ]

    elements.submit().addEventListener('click', () => {
        const { value: author } = elements.author();
        const { value: content } = elements.content();

        fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify({ author, content })
        })
            .then((response) => response.json())
            .then((response) => {
                messages.push(response);
                elements.author().value = '';
                elements.content().value = '';
            })
    })

    elements.refresh().addEventListener('click', () => {
        elements.textar().innerHTML = '';
        messages.forEach((message) => {
            let listItem ='';
            const keyInput = Object.keys(message)[0];
            listItem = `${message[keyInput].author}: ${message[keyInput].content} \n`;
            elements.textar().append(listItem);
        })
    })
}

attachEvents();