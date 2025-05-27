import {React, useState} from "react";
import Menu from "../components/Menu";
import Topbar from "../components/Topbar";
import '../styles/Dashboard.css';
import IPODashboard from '../components/IPODashboard';
import IPOLinks from '../components/IPOLinks';
import MainBoardIPO from "../components/IPOBoard";

const AdminDashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className={`menubar ${menuOpen ? "open" : ""}`}>
                <Menu />
            </div>
            <div className="main-content">
                <Topbar></Topbar>
                <h3 style={{ marginTop: "33px" }}>Dashbaord</h3>
                <div className="w-100 d-flex main-dashboard">
                    <div className="h-100 w-100 dashboard-summarizer">
                        <IPODashboard />
                    </div>

                    <div className="h-100 w-100 dashboard-links">
                        <IPOLinks />
                    </div>

                    <div className="h-100 w-100 main-ipo">
                        <MainBoardIPO /> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;
