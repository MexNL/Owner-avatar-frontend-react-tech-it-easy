
import {inventory} from '../constants/inventory.js';
function amountBought(){
    let amount = 0;
    for (let i = 0; i < inventory.length; i++){
        amount += inventory[i].originalStock;
    }
    return amount
}
export default amountBought;