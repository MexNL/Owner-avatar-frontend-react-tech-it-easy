import {bestSellingTv} from "../constants/inventory.js";

function productView(){
    return bestSellingTv.brand + " " + bestSellingTv.type + " - " + bestSellingTv.name;
}

export default productView;