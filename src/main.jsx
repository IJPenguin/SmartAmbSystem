import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
import Protected from "./Components/Protected";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="/" index element={<Home />} />
            {/* <Route path="/" element={<Protected />}>
                <Route path="/" index element={<Home />} />
            </Route> */}
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
