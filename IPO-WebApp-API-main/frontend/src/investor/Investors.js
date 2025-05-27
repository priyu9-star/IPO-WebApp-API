import React, { useState, useRef, useEffect } from "react";
import InvestorCard from "../components/InvestorCard";
import Navbar from "../components/Navbar";

const investors = [
    {
      name: "Rakesh Jhunjhunwala",
      description: "He started investing in the 90s... His inversement st...",
      image: require("../assets/Rakesh Jhunjhunwala.png"),
    },
    {
      name: "Anil Goel",
      description: "He started investing in the 90s... His inversement st...",
      image: require("../assets/Anil Goel.png"),
    },
    {
      name: "Ashish Dhawan",
      description: "He started investing in the 90s... His inversement st...",
      image: require("../assets/Ashish Dhawan.png"),
    },
    {
      name: "Ashish Kacholia",
      description: "He started investing in the 90s... His inversement st...",
      image: require("../assets/Ashish Kacholia.png"),
    },
    {
      name: "Dolly Rajeev Khanna",
      description: "He started investing in the 90s... His inversement st...",
      image: require("../assets/Dolly Rajeev Khanna.png"),
    },
    {
      name: "Hemendra Kothari",
      description: "He started investing in the 90s... His inversement st...",
      image: require("../assets/Hemendra Kothari.png"),
    },
    {
      name: "Nemish Shah",
      description: "He started investing in the 90s... His inversement st...",
      image: require("../assets/Nemish Shah.png"),
    },
    {
      name: "Porinju Veliyath",
      description: "He started investing in the 90s... His inversement st...",
      image: require("../assets/Porinju Veliyath.png"),
    },
    {
      name: "Radhakishan Damani",
      description: "He started investing in the 90s His inversement st...",
      image: require("../assets/Radhakishan Damani.png"),
    },
    {
      name: "Sunil Singhania",
      description: "He started investing in the 90s... His inversement st...",
      image: require("../assets/Sunil Singhania.png"),
    },
    {
      name: "Vijay Kedia",
      description: "He started investing in the 90s... His inversement st...",
      image: require("../assets/Vijay Kedia.png"),
    },
  ];
  
function InvestorApp() {
  const [search, setSearch] = useState("");
  const [filteredInvestors, setFilteredInvestors] = useState(investors);
  const searchRef = useRef(null);

  useEffect(() => {
    if (search) {
      setFilteredInvestors(
        investors.filter((investor) =>
          investor.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredInvestors(investors);
    }
  }, [search]);

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="container">
        <section className="investor-section">
          <div className="investor-header">
            <span className="sharks">Shark Investors</span>
            <div className="search-container" ref={searchRef}>
              <input
                className="search-input"
                type="text"
                placeholder="Search by investor name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <p>
            Look into the portfolio of these Super Investors to find out their
            favorite stocks.
          </p>
          <br />
          <br />
          <div className="investors">
            {filteredInvestors.map((investor, index) => (
              <InvestorCard key={index} investor={investor} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default InvestorApp;
