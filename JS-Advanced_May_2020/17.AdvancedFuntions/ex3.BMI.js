function solve(name, age, weight, height) {


    const obj = {
        'name': name,

        personalInfo: {
            'age': age,
            'weight': weight,
            'height': height
        }
    }

    Object.assign(obj, { 'Bmi': BMI(weight, height) })

    Object.assign(obj, { 'status': status() })

    // console.log(obj)

    return obj;


    function BMI(weight, height) {
        height /= 10;
        let bmi = weight / (height * height) * 100
        return Math.round(bmi)
    }

    function status() {
        var valueOfObj = obj.Bmi
        if (valueOfObj > 0 && valueOfObj < 18.5) {
            return 'underweight'
        }
        if (valueOfObj >= 18.5 && valueOfObj <= 25) {
            return 'normal'
        }
        if (valueOfObj > 25 && valueOfObj < 30) {
            return 'overweight'
        }
        if (valueOfObj >= 30) {
            return 'obese'
        }
    }
}

solve("Peter", 29, 75, 182)
solve("Goshko", 9, 57, 137)



//OR
// function solve(name, age, weight, height) {
 
//     let calcBmi = () => {
//         return Math.round(weight / (height/100 * height / 100))
//     }
//     let status = () => {
//         if(calcBmi() < 18.5)
//             return 'underweight'
//         if(calcBmi() < 25)
//             return 'normal'
//         if (calcBmi() < 30)
//             return 'overweight'
//         return 'obese'
//     }
//     let result = {
//         name: name,
//         personalInfo: {
//             age: age,
//             weight: weight,
//             height: height
//         },
//         BMI: calcBmi(),
//         status: status(),
//     }
//     if (status() === 'obese') {
//         result.recommendation = 'admission required'
//     }
//     return result
 
// }