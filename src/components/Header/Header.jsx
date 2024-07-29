import React from 'react'
import NavBar from '../NavBar/NavBar';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

function Header() {
  return (
    <div className='holder'>
      <header className='header'>
        <NavBar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>
            Find your book of choice.
          </h2><br />
          <p className='header-text fs-18 fw-3'>
            Lorem ipsum
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header