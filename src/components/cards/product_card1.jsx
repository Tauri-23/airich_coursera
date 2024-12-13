import { formatToUSDollar } from "../../assets/js/utils";

export default function ProductCard1({menu, handleOrder}) {
    return(
        <figure className="product-card three">
            <figure className="product-card-pic">
                <img src={`/media/menu/${menu.image}`}/>
            </figure>
            <div className="product-card-texts">
                <div className="d-flex j-c-between align-items-center ff-markazi mar-bottom-2">                    
                    <p className="text-m1 fw-bold">
                        {menu.name}
                    </p>
                    <p className="text-m1 color-sc-orange">
                        {formatToUSDollar(menu.price)}
                    </p>
                </div>
                <p className="text-m3 ff-karla mar-bottom-1">
                    {menu.desc}
                </p>
                <button className="primary-btn-yellow1" onClick={() => handleOrder(menu)}>
                    Order now
                </button>
            </div>
        </figure>
    )
}