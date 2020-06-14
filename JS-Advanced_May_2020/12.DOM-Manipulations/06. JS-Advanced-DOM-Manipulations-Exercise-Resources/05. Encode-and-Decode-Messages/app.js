function encodeAndDecodeMessages() {
    let encodeBtn = document.querySelectorAll('button')[0];
    let dencodeBtn = document.querySelectorAll('button')[1];
    let messageInput = document.querySelectorAll('textarea')[0];
    let messageOutput = document.querySelectorAll('textarea')[1];

    encodeBtn.addEventListener('click', encodeMessages);
    dencodeBtn.addEventListener('click', decodeMessages);

    function encodeMessages(){
        let inputMessage = messageInput.value;
        let encodeMessage = '';

        for (let i = 0; i < inputMessage.length; i++) {
            encodeMessage += String.fromCharCode(ascii(`${inputMessage[i]}`) + 1)
        }
        messageInput = '';
        messageOutput.value = encodeMessage;
    }

    function decodeMessages(){
        let inputMessage = messageOutput.value;
        let decodeMessage = '';

        for (let i = 0; i < inputMessage.length; i++) {
            decodeMessage += String.fromCharCode(ascii(`${inputMessage[i]}`) - 1)
        }
        messageInput = '';
        messageOutput.value = decodeMessage;
    }


    function ascii(a){
        return a.charCodeAt(0)
    }

}