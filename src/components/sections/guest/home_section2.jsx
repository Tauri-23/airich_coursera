import ProductCard1 from "../../cards/product_card1";

export default function GuestHomeSection2({menuItems}) {
    return (
        <main className="home-content2">
            <section className="d-flex j-c-between mar-bottom-1">
                <p className="text-l3 fw-bold ff-karla">Specials</p>
                <button className="primary-btn-yellow1 align-items-center">Online Menu</button>
            </section>
            <section className="d-flex gap1">
                {menuItems.map(menu => (
                    <ProductCard1 key={menu.id} menu={menu}/>
                ))}
            </section>
        </main>
    )
}