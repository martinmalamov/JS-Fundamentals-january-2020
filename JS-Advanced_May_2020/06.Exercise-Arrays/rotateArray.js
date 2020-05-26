function solve(arr){

    let lastElement = Number(arr.pop());
    lastElement %= arr.length;
    
    for (let i = 0; i < lastElement; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '))
}
solve(['1','2','3','4','2'])