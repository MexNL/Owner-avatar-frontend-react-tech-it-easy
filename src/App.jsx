import './App.css';
import amountBought from './helpers/amountBought.js'
import amountSold from './helpers/amountSold.js'
import amountLeft from './helpers/amountLeft.js'
import screenSize from './helpers/screenSize.js'
import productView from './helpers/productView.js'
import {bestSellingTv} from "./constants/inventory.js";
import priceView from "./helpers/priceView.js";

function App() {
    return (
        <>
            <header><h1>Tech it easy Dashboard</h1></header>
            <main>
                <h3>Verkoopoverzicht</h3>
                <div className='wrapperBoxOne'>
                    <article className='boxOne'>
                        <p>Aantal verkochte producten</p>
                        <p>{amountSold()}</p>
                    </article>
                    <article className='boxOne'>
                        <p>Aantal ingekochte producten</p>
                        <p>{amountBought()}</p>
                    </article>
                    <article className='boxOne'>
                        <p>Aantal te verkopen producten</p>
                        <p>{amountLeft()}</p>
                    </article>
                </div>
                <div className='wrapperBoxTwo'>
                    <span><img src={bestSellingTv.sourceImg} alt='Foto van TV'/></span>
                    <article className='boxTwo'>
                        <p>{productView()}</p>
                        <p>{priceView(549)}</p>
                        <p>{screenSize()}</p>
                    </article>
                </div>

            </main>


        </>
    )
}

export default App
