import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./App/store.ts";
import App from "./App.tsx";
import Home from "./Routes/Home.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Switches from "./Routes/Switches.tsx";
import About from "./Routes/About.tsx";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/switches",
                element: <Switches />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
