import React from 'react';

const IPODashboard = () => {
  // These styles can't easily be replaced with Bootstrap classes
  // and are necessary to maintain the exact visual output
  const circleStyles = {
    circlesContainer: {
      position: 'relative',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    totalCircle: {
      position: 'relative',
      top: '20px',
      left: '100px',
      width: '250px',
      height: '250px',
      borderRadius: '50%',
      backgroundColor: '#f97316',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1
    },
    totalArc: {
      position: 'absolute',
      top: '-5px',
      right: '-5px',
      width: '260px',
      height: '260px',
      borderRadius: '50%',
      border: '4px solid #fdba74',
      borderTopColor: 'transparent',
      transform: 'rotate(300deg)'
    },
    lossCircle: {
      position: 'absolute',
      top: '20px',
      left: '80px',
      width: '160px',
      height: '160px',
      borderRadius: '50%',
      backgroundColor: '#a78bfa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 3
    },
    lossArc: {
      position: 'absolute',
      top: '-5px',
      right: '-5px',
      width: '170px',
      height: '170px',
      borderRadius: '50%',
      border: '4px solid #c4b5fd',
      borderTopColor: 'transparent',
      transform: 'rotate(320deg)'
    },
    gainCircle: {
      position: 'absolute',
      top: '200px',
      left: '0px',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      backgroundColor: '#22d3ee',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 3
    },
    gainArc: {
      position: 'absolute',
      top: '-5px',
      right: '-5px',
      width: '210px',
      height: '210px',
      borderRadius: '50%',
      border: '4px solid #67e8f9',
      borderTopColor: 'transparent',
      transform: 'rotate(300deg)'
    }
  };

  return (
    <div className="d-flex flex-column p-4" style={{ maxWidth: '500px', height: '601px', fontFamily: 'Arial, sans-serif' }}>
      <h2 className="fw-bold mb-4">IPO Dashboard India</h2>
      
      <div className="d-flex align-items-center mb-4">
        <span className="text-success me-2">↑</span>
        <span className="text-success fw-bold fs-4 me-2">20</span>
        <span className="text-secondary">IPO in Gain</span>
      </div>
      
      <div style={circleStyles.circlesContainer}>
        {/* Total IPO Circle - Orange */}
        <div style={circleStyles.totalCircle}>
          <div className="text-center text-white">
            <p className="fs-1 fw-bold m-0" style={{ fontSize: '60px' }}>30</p>
            <p className="m-0" style={{ fontSize: '20px' }}>Total IPO</p>
          </div>
          <div style={circleStyles.totalArc}></div>
        </div>
        
        {/* IPO in Loss Circle - Purple */}
        <div style={circleStyles.lossCircle}>
          <div className="text-center text-white">
            <p className="fw-bold m-0" style={{ fontSize: '36px' }}>9</p>
            <p className="m-0" style={{ fontSize: '14px' }}>IPO in Loss</p>
          </div>
          <div style={circleStyles.lossArc}></div>
        </div>
        
        {/* IPO in Gain Circle - Cyan */}
        <div style={circleStyles.gainCircle}>
          <div className="text-center text-white">
            <p className="fw-bold m-0" style={{ fontSize: '48px' }}>20</p>
            <p className="m-0" style={{ fontSize: '14px' }}>IPO in Gain</p>
          </div>
          <div style={circleStyles.gainArc}></div>
        </div>
      </div>
    </div>
  );
};

export default IPODashboard;
