import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HousingsPage from "./ui/pages/HousingsPage/HousingsPage.jsx"
import HostsPage from "./ui/pages/HostsPage/HostsPage.jsx"
import CountriesPage from "./ui/pages/CountriesPage/CountriesPage.jsx"
import HomePage from "./ui/pages/HomePage/HomePage.jsx";
import Layout from "./ui/components/layout/Layout/Layout.jsx";
import HousingDetails from "./ui/components/housings/HousingDetails/HousingDetails.jsx";
import HostDetails from "./ui/components/hosts/HostDetails/HostDetails.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}></Route>
                    <Route path={"/housings"} element={<HousingsPage/>}></Route>
                    <Route path={"/housings/:id"} element={<HousingDetails/>}></Route>
                    <Route path={"/hosts/:id"} element={<HostDetails/>}></Route>
                    <Route path={"/hosts"} element={<HostsPage/>}></Route>
                    <Route path={"/country"} element={<CountriesPage/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App
