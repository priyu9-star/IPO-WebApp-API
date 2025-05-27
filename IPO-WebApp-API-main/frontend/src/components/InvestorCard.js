import React from "react";
import "../styles/InvestorCard.css";

function InvestorCard({ investor }) {
  return (
    <div className="card">
      <img src={investor.image} alt={investor.name} />
      <h3 className="investor-name">{investor.name}</h3>
      <p>{investor.description}</p>
      <button className="view-holdings">View Holdings</button>
    </div>
  );
}

export default InvestorCard;
