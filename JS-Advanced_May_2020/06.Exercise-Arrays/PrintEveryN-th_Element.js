function solve(arr){
    const step = Number(arr.pop());
    let firstSymbol = Number(arr[0])

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        i += step -1
    }

}
// solve(['5','20','31','4','20','2'])
// solve(['dsa','asd','test','tset','2'])
solve(['1','2','3','4','5','6'])