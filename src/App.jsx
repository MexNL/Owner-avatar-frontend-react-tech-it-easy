import './App.css';
import amountBought from './helpers/amountBought.js'
import amountSold from './helpers/amountSold.js'
import amountLeft from './helpers/amountLeft.js'
import screenSize from './helpers/screenSize.js'
import {bestSellingTv, inventory} from "./constants/inventory.js";
import priceView from "./helpers/priceView.js";
import ProductBrands from "./components/ProductBrands.jsx"
import ProductCard from "./components/ProductCard.jsx";
import {mostSold, mostFast, mostCheap} from "./helpers/mostSold.js";

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
                    <article className='boxTwo'>
                        <p>Aantal ingekochte producten</p>
                        <p>{amountBought()}</p>
                    </article>
                    <article className='boxThree'>
                        <p>Aantal te verkopen producten</p>
                        <p>{amountLeft()}</p>
                    </article>
                </div>
                <h3>Best verkochte tv</h3>
                <div className='wrapperBoxTwo'>
                    <img src={bestSellingTv.sourceImg} alt='Foto van TV'/>
                    <article className='boxOneTwo'>
                        {/*<p>{productView()}</p>*/}
                        <p>{priceView(549)}</p>
                        <p>{screenSize()}</p>
                        <div className='detailsTv'><img src="src/assets/check.png" alt='plus'/><p>wifi</p><img
                            src='src/assets/minus.png' alt='minus'/><p>speech</p><img src="src/assets/check.png"
                                                                                      alt='plus'/><p>hdr</p><img
                            src="src/assets/check.png" alt='plus'/><p>bluetooth</p><img src='src/assets/minus.png'
                                                                                        alt='minus'/><p>ambilight</p>
                        </div>
                    </article>
                </div>
                <div className="threeButtons">
                    <button type='button' onClick={mostSold}>Meest verkocht eerst
                    </button>
                    <button type='button' onClick={mostCheap}>Goedkoopste eerst
                    </button>
                    <button type='button' onClick={mostFast}>Meest geschikt
                        voor sport eerst
                    </button>
                </div>
                <div>
                    <ProductBrands/>
                </div>
                <ProductCard/>
            </main>


        </>
    )
}

export default App
