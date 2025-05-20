import {inventory} from "../constants/inventory.js";

//opdracht 1a
const newArray = inventory.map((user) => user.name);
// console.log(newArray);

//opdracht 1b
const soldOutTv = inventory.map((tv) => {
    if (tv.sold === tv.originalStock) {
        return tv.name;
    }
});
// console.log(soldOutTv);

//opdracht 1c
const tvNameSearch = inventory.find((tv) => tv.type === 'NH3216SMART');
// console.log(tvNameSearch);

//opdracht 1d
const tvSpeed = inventory.map((tv) => {
    if (tv.refreshRate >= 100) {
        return {
            name: `${tv.name}`,
            suitable: tv.refreshRate >= 100
        };
    } else {
        return {
            name: `${tv.name}`,
            suitable: false
        };
    }
})
// console.log(tvSpeed)

