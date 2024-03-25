import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";


const Header = () => {
    return (
        <div>
            <Navbar></Navbar> 
            <Outlet></Outlet>
        </div>
    );
};

export default Header;