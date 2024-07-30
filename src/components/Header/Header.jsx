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
            Discover Your Next Great Read
          </h2><br />
          <p className='header-text fs-18 fw-3'>
            Explore an extensive collection of books and find your next favorite.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header