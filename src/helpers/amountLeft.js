import amountBought from './amountBought.js'
import amountSold from './amountSold.js'

function amountLeft(){
    let amount = amountBought() - amountSold();
    return amount
}

export default amountLeft;

