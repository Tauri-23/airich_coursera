import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

// CSS
import "./assets/css/app.css";
import "./assets/css/elements.css";
import "./assets/css/nav.css";
import "./assets/css/footer.css";
import "./assets/css/modals.css";

createRoot(document.getElementById("root")).render(
  	<StrictMode>
    	<RouterProvider router={router} />
  	</StrictMode>
);
