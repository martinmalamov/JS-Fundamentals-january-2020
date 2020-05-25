function solve(arr = []){
    const lastElement = arr.pop();
    console.log(arr.join(lastElement))
}
solve(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'])