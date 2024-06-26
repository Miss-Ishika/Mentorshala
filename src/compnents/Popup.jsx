import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Popup = () => {

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    {showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-5 rounded shadow-lg">
          <h2 className="text-xl mb-4">Hello!</h2>
          <p>This is a pop-up box that appears after 3 seconds.</p>
          <button 
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setShowPopup(false)}
          >
            Close
          </button>
        </div>
      </div>
    )}
  </div>
  );
}

export default Popup