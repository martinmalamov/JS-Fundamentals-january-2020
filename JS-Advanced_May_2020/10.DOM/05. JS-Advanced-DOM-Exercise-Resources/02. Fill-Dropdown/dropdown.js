function addItem() {
    let newItemText = document.getElementById('newItemText')
    let newItemValue = document.getElementById('newItemValue')
    let select = document.getElementById('menu')
    let option = document.createElement('option')
    option.value = newItemValue.value;
    option.textContent = newItemText.value
    select.appendChild(option)
    newItemText.value = ''
    newItemValue.value = ''

    //OR
    // function addItem(){

//     const $element = {
//         inputText: document.getElementById('newItemText'),
//         inputValue: document.getElementById('newItemValue'),
//         selectMenu: document.getElementById('menu')
//     };

//     const $option = document.createElement('option');

//     $option.textContent =  $element.inputText.value;
//     $option.value =  $element.inputValue.value;

//     $element.selectMenu.appendChild($option)

//     $element.inputText.value= "";
//     $element.inputValue.value= "";
// }


}