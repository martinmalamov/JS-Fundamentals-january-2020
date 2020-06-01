function solve(input){

    let catalog = {};
    for (const line of input) {
        let [product , price] = line.split(' : ');
        const letter = product[0];

        if(catalog.hasOwnProperty(letter) === false){
            catalog[letter] = {};
        }
        catalog[letter][product] = price;
    }

    // console.log(catalog)

    //сортираме каталога ( по начална буква)
    const sortedKeys = Object.keys(catalog).sort((a,b) => a.localeCompare(b));
    // console.log(sortedKeys)

    for (let key of sortedKeys) {
        console.log(key);
        const sortedProducts = Object.keys(catalog[key]).sort((a,b) => a.localeCompare(b));
        for (const product of sortedProducts) {
            console.log(`  ${product}: ${catalog[key][product]}`)
        }
        // console.log(sortedProducts)
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)