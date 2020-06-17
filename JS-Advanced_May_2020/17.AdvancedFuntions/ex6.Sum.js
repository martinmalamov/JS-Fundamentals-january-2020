// function add(number) {
//     console.log(number)

//     return (number2) => add(number + number2)
// }

// add(1)(2)(3)

//OR

function add(a){
    function sum(b){
        a += b;
        return sum
    }
    sum.toString = () => a;

    return sum;
}

console.log(add(1)(2)(-3).toString());

