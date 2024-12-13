import { useModal } from "../../../contexts/ModalContext";
import ProductCard1 from "../../cards/product_card1";

export default function GuestHomeSection2({menuItems}) {
    const  {showModal} = useModal();



    /**
     * Handlers
     */
    const handleOrder = (menu) => {
        showModal("GeneralConfirmationModal1", {
            title: "Order Menu", 
            note: `Do you want to order this dish named <b>${menu.name}</b>.`, 
            positiveBtnText: "Order", 
            handlePositiveBtnClick: () => {
                showModal("GeneralInformationModal1", {note: "dish ordered successfully."})
            },
        });
    }



    /**
     * Render
     */
    return (
        <main className="home-content2 mar-bottom-l1">
            <section className="d-flex j-c-between mar-bottom-1">
                <p className="text-l3 fw-bold ff-karla">Specials</p>
                <button className="primary-btn-yellow1 align-items-center">Online Menu</button>
            </section>
            <section className="home-content2-menu-container">
                {menuItems.map(menu => (
                    <ProductCard1 key={menu.id} menu={menu} handleOrder={handleOrder}/>
                ))}
            </section>
        </main>
    )
}