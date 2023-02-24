import React from "react";
import { Route,BrowserRouter, Routes as ReactRouterRoutes } from "react-router-dom";
import HomePage from "../pages/home.page";
import Image from "../pages/image.page";
import Profile from "../pages/profile.page";
import Contacts from "../pages/contacts.page";
import Navs from "../Navigations/nav";
const Routes = () => {
    return(
        <div>
            <BrowserRouter>
            <div>
                <header>
                    <Navs/>
                </header>
                <div>
                    <ReactRouterRoutes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/image" element={<Image/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                    </ReactRouterRoutes>
                </div>
            </div>
            </BrowserRouter>
        </div>
    )
}

export default Routes