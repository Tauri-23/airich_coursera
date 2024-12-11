import { createBrowserRouter } from "react-router-dom";
import GuestDefault from "./views/default";
import GuestHome from "./views/home";

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
            }
        ]
    }
]);

export default router;