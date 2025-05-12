import {bestSellingTv} from "../constants/inventory.js";

function screenSize(){
    for (const size of bestSellingTv.availableSizes){
        return size;
    }
}


console.log(screenSize())