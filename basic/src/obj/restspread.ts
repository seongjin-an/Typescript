let address = {
    country: 'korea',
    city: 'Seoul',
    address1: 'seoul',
    address2: 'nowon',
    adderss3: 'sanggye'
}
const {country, city, ...detail} = address//rest
console.log(detail)

let coord = {...{x:1}, ...{y:0}}//spread
console.log(coord)