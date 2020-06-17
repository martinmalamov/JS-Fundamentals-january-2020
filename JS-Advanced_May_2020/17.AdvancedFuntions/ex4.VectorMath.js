function solution() {

    let add = (a, b) => {
        [a[0] + b[0]];
        a[1] + b[1];

        // return '[' + a1 + ', ' + b1 + ']'
    }

    function multiply(a, s) {

    }

    function length(a) {
        b = a[1];
        a = a[0];

        a *= a;
        b *= b;

        let result = Math.sqrt(a + b)

        return result
    }

    function dot(a, b) {

    }

    function cross(a, b) {

    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    };
}

const vector = solution();
// vector.length([3, -4]);
console.log(vector.add([1, 1], [1, 0]));
vector.dot([1, 0], [0, -1]);




//OR
// (() => {
//     let add = (vec1, vec2) => [vec1[0]+vec2[0], vec1[1]+vec2[1]];
//     let multiply = (vec1, scalar) => [vec1[0] * scalar, vec1[1] * scalar];
//     let length = (vec1) => Math.sqrt(Math.pow(vec1[0], 2) + Math.pow(vec1[1], 2));
//     let dot = (vec1, vec2) => vec1[0] * vec2[0] + vec1[1] * vec2[1];
//     let cross = (vec1, vec2) => vec1[0] * vec2[1] - vec1[1] * vec2[0];

//     return {add, multiply, length, dot, cross};
// })();