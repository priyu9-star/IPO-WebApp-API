import React from 'react';
import nse from '../assets/nse.png';
import bse from '../assets/bse.png';
import sebi from '../assets/sebi.png';
import moneycontrollogo from '../assets/moneycontrollogo.png';

const QuickLinks = () => {
  const links = [
    {
      id: 1,
      name: "NSE India",
      logo: nse, // Replace with actual logo URL
      color: "#FF4500" // Orange-red color for NSE
    },
    {
      id: 2,
      name: "BSE India",
      logo: bse, // Replace with actual logo URL
      color: "#483D8B" // Dark slate blue for BSE
    },
    {
      id: 3,
      name: "SEBI",
      logo: sebi, // Replace with actual logo URL
      color: "#2E2EFE" // Blue for SEBI
    },
    {
      id: 4,
      name: "Money Control",
      logo: moneycontrollogo, // Replace with actual logo URL
      color: "#0275d8" // Bootstrap primary blue
    }
  ];

  return (
    <div className="d-flex flex-column py-4" style={{ height: "601px" }}>
      <h2 className="fw-bold mb-2">Quick Links</h2>
      <p className="text-muted mb-4">Adipiscing elit, sed do eiusmod tempor</p>
      
      <div className="card m-0 px-0 shadow-none border-0 my-4 w-100">
        <div className="card-body p-0">
          {links.map((link, index) => (
            <div key={link.id} stlye={{ heigth: "100px" }} className={`d-flex align-items-center justify-content-between p-3 ${index !== links.length - 1 ? 'border-bottom' : ''}`}>
              <div className="d-flex align-items-center">
                <img style={{ width: "30px", height: "30px" }} src={link.logo}></img>
                <h6 className="fw-bold mb-0">{link.name}</h6>
              </div>
              <a href="#" className="text-decoration-none text-secondary">Visit Now</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
