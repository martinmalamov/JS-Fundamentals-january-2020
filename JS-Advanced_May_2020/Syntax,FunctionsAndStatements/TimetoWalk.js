function solve(steps,stepsLength, km){

    let distance = steps* stepsLength;
    let speed = km / 3.6;
    let time = distance / speed;
    let rest = Math.floor(distance / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);

    console.log((timeHr < 10 ? "0" : "") +
    timeHr + ":" + ((timeMin + rest) < 10 ? "0" : "") +
    (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") +
    timeSec);
}
solve(2564, 0.70, 5.5)