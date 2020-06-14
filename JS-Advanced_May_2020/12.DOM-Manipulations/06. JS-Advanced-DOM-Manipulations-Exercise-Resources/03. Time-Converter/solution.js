function attachEventsListeners() {

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');
    // let resetInput = document.getElementById('reset');

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');
    let resetBtn = document.getElementById('resetBtn');

    daysBtn.addEventListener('click', function(){
        let days = daysInput.value;
        hoursInput.value  = days * 24 ;
        minutesInput.value = Number(hoursInput.value) * 60;
        secondsInput.value = Number(minutesInput.value) * 60;
    })

    hoursBtn.addEventListener('click', function(){
        let hours = hoursInput.value;
        daysInput.value  = hours / 24 ;
        minutesInput.value = Number(hours) * 60;
        secondsInput.value = Number(minutesInput.value) * 60;
    })

    minutesBtn.addEventListener('click', function(){
        let minutes = minutesInput.value;
        daysInput.value  =Number(minutes) / 60 / 24;
        hoursInput.value = Number(minutes) / 60;
        secondsInput.value = Number(minutes) * 60;
    })

    secondsBtn.addEventListener('click', function(){
        let seconds = secondsInput.value;
        minutesInput.value = Number(seconds) / 60;
        hoursInput.value = Number(minutesInput.value) / 60;
        daysInput.value  =Number(hoursInput.value)  / 24;
    })

    resetBtn.addEventListener('click', function(){
        secondsInput.value = 0
        minutesInput.value = 0
        hoursInput.value   = 0
        daysInput.value = 0
    })
}