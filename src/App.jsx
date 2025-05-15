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
                        <p>{productView()}</p>
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
                    <button type='button' onClick={() => console.log('Meest verkocht eerst')}>Meest verkocht eerst
                    </button>
                    <button type='button' onClick={() => console.log('Goedkoopste eerst')}>Goedkoopste eerst
                    </button>
                    <button type='button' onClick={() => console.log('Meest geschikt voor sport eerst')}>Meest geschikt voor sport eerst
                    </button>
                </div>

            </main>


        </>
    )
}

export default App
