import React from 'react';

const BrokersPage = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Bluestock Fintech</title>
      <style dangerouslySetInnerHTML={{__html: `
        body {
            background: url('C:\\Users\\krish\\OneDrive\\Pictures\\Bluestock\\DALL·E 2025-02-24 11.45.37 - a high-definition background with the Bluestock company logo centered and semi-transparent, designed to cover the entire webpage. The logo is modern a.webp') no-repeat center center;
            background-size: cover;
        }
      `}} />
      <div className="container mx-auto p-4 max-w-screen-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          BLUESTOCK <span className="text-green-500">FIN</span>
        </h1>
        
        {/* Indian Brokers Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Indian Brokers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Zerodha */}
          <div className="bg-blue-100 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <img src="#" alt="Zerodha Logo" className="w-16 h-16 object-contain" />
            <ul className="text-gray-600 mt-2">
              <li>Equity ✅</li>
              <li>Commodity ✅</li>
              <li>Currency ✅</li>
              <li>Futures ✅</li>
              <li>Options ✅</li>
            </ul>
            <a href="zerodha.html" className="text-lg font-semibold text-blue-600 hover:underline mt-2">Zerodha</a>
          </div>
          
          {/* ICICI Direct */}
          <div className="bg-blue-100 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <img src="#" alt="ICICI Logo" className="w-16 h-16 object-contain" />
            <ul className="text-gray-600 mt-2">
              <li>Equity ✅</li>
              <li>Commodity ✅</li>
              <li>Currency ✅</li>
              <li>Futures ✅</li>
              <li>Options ✅</li>
            </ul>
            <a href="icici.html" className="text-lg font-semibold text-blue-600 hover:underline mt-2">ICICI Direct</a>
          </div>
          
          {/* HDFC Securities */}
          <div className="bg-blue-100 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <img src="#" alt="HDFC Logo" className="w-16 h-16 object-contain" />
            <ul className="text-gray-600 mt-2">
              <li>Equity ✅</li>
              <li>Commodity ✅</li>
              <li>Currency ✅</li>
              <li>Futures ✅</li>
              <li>Options ✅</li>
            </ul>
            <a href="hdfc.html" className="text-lg font-semibold text-blue-600 hover:underline mt-2">HDFC Securities</a>
          </div>
        </div>
        
        {/* International Brokers Section */}
        <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">International Brokers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Robinhood */}
          <div className="bg-blue-100 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <img src="#" alt="Robinhood Logo" className="w-16 h-16 object-contain" />
            <ul className="text-gray-600 mt-2">
              <li>Equity ✅</li>
              <li>Options ✅</li>
              <li>Crypto ✅</li>
            </ul>
            <a href="robinhood.html" className="text-lg font-semibold text-blue-600 hover:underline mt-2">Robinhood</a>
          </div>
          
          {/* E*TRADE */}
          <div className="bg-blue-100 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <img src="#" alt="E*TRADE Logo" className="w-16 h-16 object-contain" />
            <ul className="text-gray-600 mt-2">
              <li>Equity ✅</li>
              <li>Options ✅</li>
              <li>Futures ✅</li>
            </ul>
            <a href="etrade.html" className="text-lg font-semibold text-blue-600 hover:underline mt-2">E*TRADE</a>
          </div>
          
          {/* Charles Schwab */}
          <div className="bg-blue-100 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <img src="#" alt="Charles Schwab Logo" className="w-16 h-16 object-contain" />
            <ul className="text-gray-600 mt-2">
              <li>Equity ✅</li>
              <li>Options ✅</li>
              <li>Futures ✅</li>
              <li>Mutual Funds ✅</li>
            </ul>
            <a href="charlesschwab.html" className="text-lg font-semibold text-blue-600 hover:underline mt-2">Charles Schwab</a>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white shadow-inner mt-12 py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2025 Bluestock Fin. All rights reserved.</p>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <a href="#top" className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
        ⬆️
      </a>
    </div>
  );
};

export default BrokersPage;
