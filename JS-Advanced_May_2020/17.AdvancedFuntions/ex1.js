// function solve(number,parameter){

//     let mirorArra = number.splice();
//     for (let i = 0; i < number.length; i++) {
//         mirorArra.push(number[i]);
//     }
//     let result ;
//     let sortedArr = []
//     if(parameter === 'asc'){
//         result  = mirorArra.sort((num , secnumber) =>
//         num - secnumber )
//         sortedArr.push(result.join(', '))
//     }else{
//         result  = mirorArra.sort((num , secnumber) =>
//          secnumber - num );
//         sortedArr.push(result.join(', ')) 
//     }

//     let finalArr = []
//     for (let i = 0; i < sortedArr.length; i++) {
//         finalArr.push(sortedArr[i]);
//     }
//     let nums;
//     for (let j = 0; j < finalArr.length; j++) {
//          nums = finalArr[j].split(', ').map(x => parseInt(x, 10));

//     }

//     console.log(nums)
// }


function solve(arr,str) {

    let arrSort = arr;

    function sortArray(){
        if(str === 'asc'){
            arrSort = arrSort.sort((a,b) => a-b)
        }else{
            arrSort = arrSort.sort((a,b) => b-a )
        }

        return arrSort;
    }

    return sortArray()
}

console.log(solve([14, 7, 17, 6, 8],'asc'))