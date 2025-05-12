import {inventory} from '../constants/inventory.js';
function amountSold(){
    let amount = 0;
    for (let i = 0; i < inventory.length; i++){
        amount += inventory[i].sold;
    }
    return amount;  
}
export default amountSold;