import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
      
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>

            <h3 className="about_-title">Experience</h3>
            <span className="about__subtitle">신입</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>

            <h3 className="about_-title">Completed</h3>
            <span className="about__subtitle">2  Projects</span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon'></i>

            <h3 className="about_-title">Support</h3>
            <span className="about__subtitle">none</span>
        </div>
    </div>
  )
}

export default info