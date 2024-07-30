import React from 'react';
import './About.css';

function About() {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-text'>
          <h2 className='about-title fs-26 ls-1'>
            About BookFinder
          </h2>
          <p className='fs-17'>
            Welcome to BookFinder, your ultimate destination for discovering books from across the world. Our platform leverages the the OpenLibrary API to help you explore a vast collection of books, ranging from classic literature to the latest bestsellers.
          </p>
          <p className='fs-17'>
            Whether you are an avid reader looking for your next great read or a student researching for academic purposes, BookFinder is designed to meet all your literary needs. With our easy-to-use search functionality, you can quickly find detailed information about books, including author details, publication history, and much more.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About