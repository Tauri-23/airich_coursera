import { createBrowserRouter } from "react-router-dom";
import GuestDefault from "./views/default";
import GuestHome from "./views/home";
import GuestReservations from "./views/reservations";

const router = createBrowserRouter([
    /*
    |----------------------------------------
    | Guest 
    |----------------------------------------
    */
    {
        path: '/',
        element: <GuestDefault/>,
        children: [
            {
                index: true,
                element: <GuestHome/>
            },
            {
                path: "reservations",
                element: <GuestReservations/>
            }
        ]
    }
]);

export default router;