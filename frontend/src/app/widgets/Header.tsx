import React from 'react'
import AuthOption from '../components/Header/AuthOption'

const Header = () => {
  return (
    <>
      <header className='header border-bottom'>
        <div className="logo">MCode</div>
        <div className="navbar">
          <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
          </ul>
        </div>
        <div className="right-option">
          <AuthOption />
        </div>
      </header>
      <style>{`
      .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .logo{
        font-size:30px;
        font-weight: 900;
      }
    `}</style>
    </>
  )
}

export default Header
