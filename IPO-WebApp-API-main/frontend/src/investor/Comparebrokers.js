import React, { useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const BrokerComparison = () => {
  useEffect(() => {
    const createChart = (id, type, data, options) => {
      const ctx = document.getElementById(id).getContext("2d");
      new Chart(ctx, { type, data, options });
    };

    createChart("activeClientsChart", "line", {
      labels: ["2020", "2021", "2022", "2023"],
      datasets: [
        {
          label: "Broker A",
          data: [1200, 1500, 1800, 2100],
          borderColor: "#1E90FF",
          backgroundColor: "rgba(30,144,255,0.2)",
          fill: true,
        },
        {
          label: "Broker B",
          data: [1300, 1600, 1700, 2000],
          borderColor: "#FF6347",
          backgroundColor: "rgba(255,99,71,0.2)",
          fill: true,
        },
      ],
    });

    createChart("complaintsChart", "bar", {
      labels: ["2020", "2021", "2022", "2023"],
      datasets: [
        { label: "Broker A", data: [5, 7, 4, 6], backgroundColor: "#1E90FF" },
        { label: "Broker B", data: [6, 8, 5, 7], backgroundColor: "#FF6347" },
      ],
    });

    createChart("shareholdersChart", "bar", {
      labels: ["Public", "Private"],
      datasets: [
        { label: "Broker A", data: [55, 45], backgroundColor: "#1E90FF" },
        { label: "Broker B", data: [60, 40], backgroundColor: "#FF6347" },
      ],
    });

    createChart("financialsChart", "bar", {
      labels: ["Revenue", "Profit/Loss"],
      datasets: [
        { label: "Broker A", data: [1200000, 300000], backgroundColor: "#1E90FF" },
        { label: "Broker B", data: [1100000, 280000], backgroundColor: "#FF6347" },
      ],
    });
  }, []);

  return (
    <div className="dashboard-container" style={{ padding: "20px" }}>
      <h1>BlueStock and Compare Brokers Page</h1>

      <div className="card">
        <h2>Active Clients (Year-wise)</h2>
        <canvas id="activeClientsChart"></canvas>
      </div>

      <div className="card">
        <h2>Account Opening & Maintenance Charges</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Broker A ($)</th>
              <th>Broker B ($)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account Opening</td>
              <td>500</td>
              <td>600</td>
            </tr>
            <tr>
              <td>Maintenance</td>
              <td>300</td>
              <td>350</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <h2>Brokerage Charges</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Broker A ($)</th>
              <th>Broker B ($)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Auto Square-off</td>
              <td>50</td>
              <td>60</td>
            </tr>
            <tr>
              <td>DP Charges</td>
              <td>40</td>
              <td>45</td>
            </tr>
            <tr>
              <td>Call & Trade</td>
              <td>30</td>
              <td>35</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <h2>Complaints</h2>
        <canvas id="complaintsChart"></canvas>
      </div>

      <div className="card">
        <h2>Shareholders</h2>
        <canvas id="shareholdersChart"></canvas>
      </div>

      <div className="card">
        <h2>Pros and Cons</h2>
        <table>
          <thead>
            <tr>
              <th>Broker</th>
              <th>Pros</th>
              <th>Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Broker A</td>
              <td>Low fees, Great platform</td>
              <td>Limited global markets</td>
            </tr>
            <tr>
              <td>Broker B</td>
              <td>Comprehensive research</td>
              <td>Higher fees</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <h2>Financials (Revenue & Profit/Loss)</h2>
        <canvas id="financialsChart"></canvas>
      </div>

      <div className="card">
        <h2>Broker Rating and Comparison</h2>
        <div className="broker-comparison" style={{ display: "flex", justifyContent: "space-around" }}>
          <div className="broker" style={{ textAlign: "center" }}>
            <h3>Broker A</h3>
            <p className="stars">★★★★☆ (4.7)</p>
            <button>Open Demat Account</button>
          </div>

          <div className="vs" style={{ fontSize: "24px", fontWeight: "bold" }}>vs</div>

          <div className="broker" style={{ textAlign: "center" }}>
            <h3>Broker B</h3>
            <p className="stars">★★★★☆ (4.6)</p>
            <button>Open Demat Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerComparison;
