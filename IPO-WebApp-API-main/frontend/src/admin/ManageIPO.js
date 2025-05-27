import React, { useState } from "react";
import Menu from "../components/Menu";
import Topbar from "../components/Topbar";
import { FaTrash, FaEye } from "react-icons/fa"; // Import icons
import "../styles/ManageIPO.css";

const ManageIPO = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ipos, setIpos] = useState([
    { id: 1, company: "Adani Power", price: "₹ 129 - 136", open: "2024-06-03", close: "2024-06-05", size: "130.15 Cr.", type: "Book Built", listing: "2024-06-10", status: "Ongoing" },
    { id: 2, company: "VBL LTD", price: "₹ 129 - 136", open: "2024-06-03", close: "2024-06-05", size: "130.15 Cr.", type: "Book Built", listing: "2024-06-10", status: "Coming" },
    { id: 3, company: "Tata Motor", price: "₹ 129 - 136", open: "2024-06-03", close: "2024-06-05", size: "130.15 Cr.", type: "Book Built", listing: "2024-06-10", status: "New Listed" }
  ]);

  const handleDelete = (id) => {
    setIpos(ipos.filter(ipo => ipo.id !== id));
  };

  return (
    <div className="container">
      {/* Sidebar Toggle Button for Mobile */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`menubar ${menuOpen ? "open" : ""}`}>
        <Menu />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Topbar />
        <section className="dashboard">
          <h2 className="title">Upcoming IPO | Dashboard</h2>
          <table className="striped-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Price Band</th>
                <th>Open</th>
                <th>Close</th>
                <th>Issue Size</th>
                <th>Issue Type</th>
                <th>Listing Date</th>
                <th>Status</th>
                <th>Action</th>
                <th>Delete/View</th>
              </tr>
            </thead>
            <tbody>
              {ipos.map((ipo) => (
                <tr key={ipo.id}>
                  <td>{ipo.company}</td>
                  <td>{ipo.price}</td>
                  <td>{ipo.open}</td>
                  <td>{ipo.close}</td>
                  <td>{ipo.size}</td>
                  <td>{ipo.type}</td>
                  <td>{ipo.listing}</td>
                  <td className={`status ${ipo.status.toLowerCase()}`}>{ipo.status}</td>
                  <td><button className="update-btn">Update</button></td>
                  <td className="icons">
                    
                    <FaTrash className="delete-icon" title="Delete" onClick={() => handleDelete(ipo.id)} />
                    <FaEye className="view-icon" title="View" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

         
        </section>
      </div>
    </div>
  );
};

export default ManageIPO;
