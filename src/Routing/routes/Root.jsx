import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {Outlet} from "react-router-dom";

export default function Root() {
    return(
        <div>
            <Navbar />
                <div style={{minHeight: '100vh'}}>
                    <Outlet />
                </div>
            <Footer />
        </div>
    )
}