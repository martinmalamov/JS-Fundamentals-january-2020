function solve(array) {

    let element = 0
    let matrixArr = []
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length; j++) {
            element += array[i][j];
        }
        matrixArr.push(element)
        element = 0
    }

    let isTrue = false;

    for (let k = 0; k < matrixArr.length; k++) {
        if(matrixArr[k+1] === undefined){
            break;
        }
        if(matrixArr[k] === matrixArr[k+1]){
           isTrue = true
        }
    }

    if(isTrue === true){
        console.log('true')
    }else{
        console.log('false')
    }
}
// solve([[4, 5, 6],
// [6, 5, 4],
// [5, 5, 5]])

// solve([[11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]])

solve([[1,0,0],
    [0, 0, 1],
    [0, 1, 0]])