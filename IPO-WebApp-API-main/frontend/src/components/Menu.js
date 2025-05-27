import React, { useState, useEffect } from "react";
import "../styles/Menu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollVertical, faSquarePollHorizontal, faCartShopping, faCommentDots, faGear, faFolder, faCircleInfo, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768); // Open by default in desktop view

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".sidebar") && !event.target.closest(".menu-toggle")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    let navigate = useNavigate();

  const redirectToDashboard = () => {
    let path = "/admin/dashboard"
    navigate(path);
  }

  const redirectToManage = () => {
    let path = "/admin/manage"
    navigate(path);
  }

  const redirectToIPO = () => {
    let path = "/admin/ipo"
    navigate(path);
  }

  const redirectToAllotment = () => {
    let path = "/admin/allotment"
    navigate(path);
  }

  const redirectToSettings = () => {
    let path = "/admin/settings"
    navigate(path);
  }

  const redirectToAPI = () => {
    let path = "/admin/api"
    navigate(path);
  }

  const redirectToAccounts = () => {
    let path = "/admin/accounts"
    navigate(path);
  }

  const redirectToHelp = () => {
    let path = "/admin/help"
    navigate(path);
  }
  return (
    <>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
      </button>

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="heading-container">
          <div id="heading_bg"><span id="heading_text">BF</span></div>
          <span id="heading">Bluestock Fintech</span>
        </div>
        <hr />
        <ul className="mt-4 menu-list">
          <h6>MENU</h6>
          <li className="menu-elem" onClick={redirectToDashboard} ><FontAwesomeIcon className="menu-icons" size="lg" icon={faSquarePollVertical} flip="horizontal" /> <span>Dashboard</span></li>
          <li className="menu-elem" onClick={redirectToManage}><FontAwesomeIcon className="menu-icons" size="lg" icon={faCartShopping} /> <span>Manage IPO</span></li>
          <li className="menu-elem" onClick={redirectToIPO} ><FontAwesomeIcon className="menu-icons" size="lg" icon={faSquarePollHorizontal} flip="vertical" /> <span>IPO Subscription</span></li>
          <li className="menu-elem" onClick={redirectToAllotment}><FontAwesomeIcon className="menu-icons" size="lg" icon={faCommentDots} /> <span>IPO Allotment</span></li>
          <br></br>
          <h6>OTHERS</h6>
          <li className="menu-elem" onClick={redirectToSettings} ><FontAwesomeIcon className="menu-icons" size="lg" icon={faGear} /> <span>Settings</span></li>
          <li className="menu-elem" onClick={redirectToAPI} ><FontAwesomeIcon className="menu-icons" size="lg" icon={faFolder} /> <span>API Manager</span></li>
          <li className="menu-elem" onClick={redirectToAccounts} ><FontAwesomeIcon className="menu-icons" size="lg" icon={faUser} /> <span>Accounts</span></li>
          <li className="menu-elem" onClick={redirectToHelp} ><FontAwesomeIcon className="menu-icons" size="lg" icon={faCircleInfo} /> <span>Help</span></li>
        </ul>
      </aside>

      {isOpen && window.innerWidth <= 768 && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Menu;
