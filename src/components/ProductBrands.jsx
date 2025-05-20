import allBrands from "../helpers/allBrands.js";

const ProductBrands = () => {
    return <ul>
        {allBrands.map((brand, index) => (
            <li key={index}>{brand}</li>
            ))
        }
    </ul>
}
export default ProductBrands;