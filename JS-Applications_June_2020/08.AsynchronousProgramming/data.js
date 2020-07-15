// const locations = [
//     { "code": "ny", "name": "New York" },
//     { "code": "london", "name": "London" },
//     { "code": "barcelona", "name": "Barcelona" }
// ]

function host(endpoint) {
    return `https://judgetests.firebaseio.com/${endpoint}.json`;
}

const api = {
    locations: 'locations',
    today: 'forecast/today/',
    upcoming: 'forecast/upcoming/'
}

export async function getCode(name) {
    const data = await (await fetch(host(api.locations))).json();

    return data.find(l => l.name.toLowerCase() == name.toLowerCase()).code;
}

export async function getToday(code) {
    const data = await (await fetch(host(api.today + code))).json();
    return data;
}
export async function getUpcoming(code) {
    const data = await (await fetch(host(api.upcoming + code))).json();
    return data;
    
    // return {
    //     'forecast': [
    //         { 'condition': 'Partly sunny', 'high': '17', 'low': '6' },
    //         { 'condition': 'Overcast', 'high': '9', 'low': '3' },
    //         { 'condition': 'Overcast', 'high': '7', 'low': '3' }
    //     ],
    //     'name': 'New York'
    // };
}