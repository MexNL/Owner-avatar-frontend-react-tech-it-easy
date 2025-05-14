import {bestSellingTv} from "../constants/inventory.js";

function screenSize(){
    let result = [];
    for (let i = 0; i < bestSellingTv.availableSizes.length; i++){
        let sizesCM = bestSellingTv.availableSizes[i] * 2.54;
        let sizesInch = bestSellingTv.availableSizes[i]
        result.push(sizesInch + ' inches ('+ sizesCM + 'cm)');
    }
    return result.join(' | ');
}


export default screenSize;

