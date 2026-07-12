import React from 'react';
import './About.css';

function About() {
  return (
    <div className='container'>
      <div className='about-container'>
        <div className='about-left'>
          <h2>
            Miami best Real estate <span className='highlight'>here</span>
          </h2>
        </div>
        <div className='about-right'>
          <h3 className='title-text'>Over 50 years experience in love.</h3>
          <p className='right-text'>
            Mazel and VA Tsukkerman in his "Analysis of musical works."
            Pointillism, which originated in the music of the early twentieth
            century, microforms, found a distant historical.
          </p>
          <p className='right-text'>
            The market leader in real estate since 2003. Awards Real Estate
            Company, 2010, 2011, 2013. More than 200 satisfied customers premium
            segment. We focus only on new buildings and high-level doskanalno
            know this area better than other specialists.Working directly with
            developers - so have more useful information about the profitable
            deals.
          </p>
          <div className='finish-text'>
            <p>We will never be late!</p>
            <p>Guaranteed secure transaction - 100%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
