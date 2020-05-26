function solve(arr){
    let result = []
    let bigger = arr[0]

    arr.map(x => {
        if( x >= bigger){
            result.push(x)
            bigger = x;
        }
    });
    return result.join('\n')
}
console.log(
solve([1,2,3,4]))