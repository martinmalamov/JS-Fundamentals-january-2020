function solve(arr){
    let output = []

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'add'){

            output.push(i+1)
        }
        if(arr[i] === 'remove'){
            let index = output.indexOf(i-1)
           output = output.splice(index,1,'')
        }
        
    }
    if(output.length !== 0){

        console.log(output.join('\n'))
    }
    else{
        console.log('Empty')
    }
}
// solve(['add','add','add','add'])
// solve(['add','add','remove','add','add'])
solve(['remove','remove','remove'])