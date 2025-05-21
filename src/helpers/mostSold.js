import {inventory} from "../constants/inventory.js";

export const mostSold = () =>{
    console.log(inventory.sort((a, b) => b.sold - a.sold));
}

export const mostCheap = () =>{
    console.log(inventory.sort((a, b) => a.price - b.price));
}

export const mostFast = () =>{
    console.log(inventory.sort((a, b) => a.refreshRate - b.refreshRate));
}

