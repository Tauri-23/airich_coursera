import { useEffect, useState } from "react";
import GuestHomeSection1 from "../components/sections/guest/home_section_1";
import GuestHomeSection2 from "../components/sections/guest/home_section2";
import { useOutletContext } from "react-router-dom";


export default function GuestHome() {
    const {setActiveNavLink} = useOutletContext();
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



    useEffect(() => {
        setActiveNavLink("Home");
    }, []);



    return (
        <>
            <GuestHomeSection1/>
            <GuestHomeSection2 menuItems={menuItems}/>
        </>
    )
}