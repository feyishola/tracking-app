import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { NavBar } from "../layouts/drawer";
import { ServiceManager } from "../pages/service-manager";
import { Payment } from "../pages/payment";
import { Alerts } from "../pages/alert/alert";
import { Withdrawal } from "../pages/withdrawal";
import { ManageServices } from "../pages/manage-services";
import { Settings } from "../pages/settings";
import { Support } from "../pages/support";

export const AppRoutes = ()=>{
    return(
        <Box>
            <Routes>
                <Route 
                    path="/"
                    element={
                        <NavBar>
                            <ServiceManager/>
                        </NavBar>
                    }
                />
                 <Route 
                    path="/payment"
                    element={
                        <NavBar>
                            <Payment/>
                        </NavBar>
                    }
                />
                 <Route 
                    path="/alert"
                    element={
                        <NavBar>
                            <Alerts/>
                        </NavBar>
                    }
                />
                 <Route 
                    path="/withdrawal"
                    element={
                        <NavBar>
                            <Withdrawal/>
                        </NavBar>
                    }
                />
                 <Route 
                    path="/services"
                    element={
                        <NavBar>
                            <ManageServices/>
                        </NavBar>
                    }
                />
                 <Route 
                    path="/settings"
                    element={
                        <NavBar>
                            <Settings/>
                        </NavBar>
                    }
                />
                 <Route 
                    path="/support"
                    element={
                        <NavBar>
                            <Support/>
                        </NavBar>
                    }
                />
            </Routes>
        </Box>
    )
}