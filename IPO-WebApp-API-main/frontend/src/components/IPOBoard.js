import React, { useState } from 'react';

const MainBoardIPO = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  // Some minimal CSS is still needed for the donut chart and hover effects
  const chartStyles = {
    donutContainer: {
      position: 'relative',
      width: '300px',
      height: '300px',
      margin: '0 auto'
    },
    donut: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: 'conic-gradient(#3f51b5 0deg 120deg, #8c9eff 120deg 210deg, #e8eaff 210deg 360deg)',
      position: 'relative'
    },
    donutHole: {
      position: 'absolute',
      width: '60%',
      height: '60%',
      backgroundColor: 'white',
      borderRadius: '50%',
      top: '20%',
      left: '20%'
    },
    interactiveSegment: {
      position: 'absolute',
      width: '50%',
      height: '50%',
      top: '0',
      left: '0',
      transform: 'rotate(30deg)',
      transformOrigin: 'bottom right',
      cursor: 'pointer',
      zIndex: 5
    },
    popup: {
      display: showPopup ? 'block' : 'none',
      position: 'absolute',
      width: '150px',
      zIndex: 10,
      top: '10%',
      left: '55%'
    },
    legendDot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      display: 'inline-block',
      marginRight: '8px'
    }
  };

  return (
    <div className="d-flex flex-column py-4">
      <div className="row mb-4 align-items-center">
        <div className="col">
          <h2 className="fw-bold m-0">Main Board IPO</h2>
          <p className="text-muted small mt-1 mb-0">From 01 Jan 2024</p>
        </div>
        <div className="col-auto">
          <button className="btn btn-outline-primary btn-sm">View Report</button>
        </div>
      </div>
      
      <div className="row justify-content-center my-5">
        <div className="col-auto">
          <div style={chartStyles.donutContainer}>
            <div style={chartStyles.donut}>
              <div style={chartStyles.donutHole}></div>
              <div 
                style={chartStyles.interactiveSegment} 
                onMouseEnter={() => setShowPopup(true)}
                onMouseLeave={() => setShowPopup(false)}
              ></div>
            </div>
            
            <div 
              className="bg-dark text-white p-3 rounded shadow" 
              style={chartStyles.popup}
            >
              <p className="m-0">Afternoon</p>
              <p className="text-muted small m-0">IPO NSE & BSE</p>
              <p className="fs-3 fw-bold m-0">15</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row justify-content-center mt-2">
        <div className="col-auto">
          <div className="d-flex gap-4">
            <div>
              <p className="mb-1">
                <span style={{...chartStyles.legendDot, backgroundColor: '#3f51b5'}}></span>
                Upcomming
              </p>
              <p className="fw-bold text-center">15</p>
            </div>
            
            <div>
              <p className="mb-1">
                <span style={{...chartStyles.legendDot, backgroundColor: '#8c9eff'}}></span>
                New Listed
              </p>
              <p className="fw-bold text-center">25</p>
            </div>
            
            <div>
              <p className="mb-1">
                <span style={{...chartStyles.legendDot, backgroundColor: '#e8eaff'}}></span>
                Ongoing
              </p>
              <p className="fw-bold text-center">2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBoardIPO;
