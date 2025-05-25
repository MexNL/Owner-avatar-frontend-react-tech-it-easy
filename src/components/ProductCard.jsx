import {bestSellingTv, inventory} from "../constants/inventory.js";
import priceView from "../helpers/priceView.js";
import screenSize from "../helpers/screenSize.js";

const ProductCard = () => {
    return (
        <ul style={{ listStyleType: 'none' }}>
            {inventory.map((tv, index) => (
                <li key={index}>
                    <div className='wrapperBoxTwo'>
                        <img src={tv.sourceImg} alt={`Foto van ${tv.name}`} />
                        <article className='boxOneTwo'>
                            <p>{tv.name} {tv.brand} {tv.type}</p>
                            <p>{priceView(tv.price)}</p>
                            <p>{screenSize(tv)}</p>
                            <ul>
                                {tv.options.map((option, i) => (
                                    <li key={i}>{`${option.name}: ${option.applicable}`} </li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </li>
            ))}
        </ul>
    );
};
export default ProductCard;








