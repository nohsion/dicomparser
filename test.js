// const { TAG_DICT } = require('./modules/beamTableDictionary');

let beamItems = []
let obj = {}
for (let key in TAG_DICT) {
    obj[TAG_DICT[key].name] = []
}
for (let i = 0; i < 5; i++) {
    beamItems.push(JSON.parse(JSON.stringify(obj)))

}

// beamItems.push(obj)
// const obj2 = JSON.parse(JSON.stringify(obj));
// beamItems.push(obj2)
// console.log('obj2', obj2)

console.log(beamItems)

/*
    beamItems = [
        {
            'ApplicatorID': [],
            'DoseRate': []
        },
        {
            'ApplicatorID': [],
            'DoseRate': []
        }
    ]
*/

beamItems[0]['ApplicatorID'].push(5)
beamItems[1]['ApplicatorID'].push(10)

for (let i = 0; i < 5; i++) {
    console.log(beamItems[i]['ApplicatorID']) // [1], [1]
}

