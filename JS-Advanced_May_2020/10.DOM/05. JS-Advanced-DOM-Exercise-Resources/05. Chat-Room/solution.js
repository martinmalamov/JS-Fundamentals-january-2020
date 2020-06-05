function solve() {
   const elements = {
      sendBtn: () => document.getElementById('send'),
      textInput: () => document.getElementById('chat_input'),
      msgField: () => document.getElementById('chat_messages'),
      createEl: (tagName) => document.createElement(tagName)
   }
 
   const render = () => {
      if(elements.textInput().value === '') return;
      const currDiv = elements.createEl('div');
      currDiv.textContent = elements.textInput().value;
      currDiv.classList.add('message', 'my-message');
      elements.msgField().appendChild(currDiv);
      elements.textInput().value = '';
   }
   elements.sendBtn().addEventListener('click', render);
}

// function solve() {
//    document.querySelector('#send').addEventListener('click', onClick);
 
//    function onClick() {
//       const input = document.querySelector('textarea#chat_input');
//       const inputText = input.value;
//       // console.log(inputText);
     
//       const newDiv = document.createElement('div');
//       newDiv.setAttribute('class', 'message my-message');
//       newDiv.textContent = inputText;
 
//       const divChatMessage = document.querySelector('#chat_messages');
//       divChatMessage.append(newDiv);
 
//       input.value = '';
 
//    }
// }