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
            BookFinder uses the OpenLibrary API to find books.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About