function notify(message) {
    //намираме кутията
    let notifc = document.querySelector('#notification')
    //поставяме съобщението
    notifc.textContent = message;
    //визуализация
    notifc.style.display = "block";
    //активиране на таймер , 2 сек.
    setTimeout(() => {
        notifc.style.display = "none"
    },2000)

}