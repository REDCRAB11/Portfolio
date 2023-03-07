import React from 'react';
import "./work.css";
import Works from './Works';

const Work = () => {
  return (
   <section className="work section" id='portfolio'>
    <h2 className="section__title">PORTFOLIO</h2>
    <span className="section__subtitle">프로젝트 소개</span>

    <Works />
   </section>
  )
}

export default Work