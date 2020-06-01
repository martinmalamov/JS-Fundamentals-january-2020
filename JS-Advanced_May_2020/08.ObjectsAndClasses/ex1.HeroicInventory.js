function solve(input) {
    let array = [];

    for (const iterator of input) {
        let [name, level, items] = iterator.split(' / ');
        level = +level;
        items = items ? items.split(', ') : []
        array.push({ name, level, items })
    }

    const result = JSON.stringify(array)
    console.log(result)

}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)