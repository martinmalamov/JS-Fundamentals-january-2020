/* globals Handlebars */

window.addEventListener('load', async () => {
    // зареждане на темплейт - > текст 
    // const templateString = document.getElementById('main-template').innerHTML;
    // Handlebars.registerPartial('town', document.getElementById('town-template').innerHTML)
    const templateString = await(await fetch('./main-template.hbs')).text();
    Handlebars.registerPartial('town', await(await fetch('./town-template.hbs')).text());

    // компилиране на темплейта  -> функция 
    const templateFn = Handlebars.compile(templateString)

    document.querySelector('#btnLoadTowns').addEventListener('click', renderTowns);
    const input = document.querySelector('#towns')
    const rootEl = document.querySelector('#root');

    function renderTowns(e) {
        e.preventDefault();

        const towns = input.value.split(', ')
        console.log(towns)

        // изпълнение на темплейта с нашите данни(променливи) -> текст (HTML)
        const generatedHtml = templateFn({ towns })

        //поставяне на генерирания HTML в DOM
        rootEl.innerHTML = generatedHtml;
    }



})