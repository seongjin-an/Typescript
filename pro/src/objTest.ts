import * as _ from 'lodash'
const obj = {
    "id_1":{id:"id_1", name:"anseongjin"},
    "id_2":{id:"id_2", name:"seongjinan"}
}
console.log(obj["id_3"] !==undefined ? "11" : "22")


const a = {};
const b = {};

a["prop1"] = 2;
a["prop2"] = { prop3: 3 };

b["prop1"] = 2;
b["prop2"] = { prop3: 3 };

console.log(_.isEqual(a, b));