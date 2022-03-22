import React from 'react'
//import Footer from './components/Footer.jsx'

export default function Layout({children}) {
    return (
        <div className="Page-outer">
        <div
          className="Page"
        >
          <div className="Frame-outer">
            <div
            className="Frame"
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    )
}