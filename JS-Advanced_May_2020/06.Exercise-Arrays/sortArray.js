function solve(arr) {

    let result = arr.sort((a,b) => a.length - b.length || a.localeCompare(b))
    console.log(result.join('\n'))
}
solve(['alpha', 'beta', 'gamma']);