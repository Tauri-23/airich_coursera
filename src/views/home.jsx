import { useState } from "react";
import GuestHomeSection1 from "../components/sections/guest/home_section_1";
import GuestHomeSection2 from "../components/sections/guest/home_section2";
import Footer1 from "../components/footer/footer1";


export default function GuestHome() {
    const [menuItems] = useState([
        {
            id: 1,
            name: 'Greek Salad',
            desc: 'Lorem ipsum dolor sit amet consectur.',
            price: 12.99,
            image: 'greek salad.jpg'
        },
        {
            id: 2,
            name: 'Bruchetta',
            desc: 'Lorem ipsum dolor sit amet consectur.',
            price: 5.99,
            image: 'bruchetta.svg'
        },
        {
            id: 3,
            name: 'Lemon Dessert',
            desc: 'Lorem ipsum dolor sit amet consectur.',
            price: 5,
            image: 'lemon dessert.jpg'
        },
    ]);

    return (
        <>
            <GuestHomeSection1/>
            <GuestHomeSection2 menuItems={menuItems}/>
            <Footer1/>        
        </>
    )
}