// function solve(obj) {

//     let smallEngine = {
//         power: 90,
//         volume: 1800
//     }
//     let normalEngine = {
//         power: 120,
//         volume: 2400
//     }
//     let monsterEngine = {
//         power: 200,
//         volume: 3500
//     }

//     let newObj = {}
//     let carriageCar = {
//         type: obj.carriage,
//         color: obj.color
//     }

//     let wheelsize = [obj.wheelsize,obj.wheelsize,obj.wheelsize,obj.wheelsize]

//     if (obj.power <= 90) {
//         newObj['model'] = Object.assign(obj.model).toString()
//         newObj['engine'] = Object.assign(smallEngine)
//         newObj['carriage'] = Object.assign(carriageCar)
//         newObj['wheelsize'] = Object.assign(wheelsize)

//         // console.log(newObj)
//         return newObj
//     }
//     if (obj.power > 90 && obj.power <= 120) {

//         newObj['model'] = Object.assign(obj.model).toString()
//         newObj['engine'] = Object.assign(normalEngine)
//         newObj['carriage'] = Object.assign(carriageCar)
//         newObj['wheelsize'] = Object.assign(wheelsize)

//         // console.log(newObj)
//         return newObj
//     }
//     if (obj.power > 120) {
//         newObj['model'] = Object.assign(obj.model).toString()
//         newObj['engine'] = Object.assign(monsterEngine)
//         newObj['carriage'] = Object.assign(carriageCar)
//         newObj['wheelsize'] = Object.assign(wheelsize)

//         // console.log(newObj)
//         return newObj
//     }
// }
// solve({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// })

function solve(descriptor) {

    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 } 
    ]

    const car = {
        model: descriptor.model,
        carriage: {
            type: descriptor.carriage,
            color: descriptor.color
        }
    };

    for (const engine of engines) {
        if (engine.power >= descriptor.power) {
            car.engine = Object.assign(engine);
            break;
        }
    }

    // if (descriptor.wheelsize % 2 == 0) {
    //     const wheelsize = descriptor.wheelsize - 1;
    //     car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize]
    // } else {
    //     const wheelsize = descriptor.wheelsize;
    //     car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize]

    // }

    car.wheels = (new Array(4)).fill(descriptor.wheelsize % 2 
        ? descriptor.wheelsize 
        : descriptor.wheelsize -1
        )

    return car
}

console.log(solve({
    model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16
}
))