import React, {useState} from 'react';
import "./qualification.css";


const Qualification = () => {
    const[toggleState, setToggleState] = useState(1);

  const toggleTab = (index) =>{
    setToggleState(index);
  }
  return (
    <section className="qualification section">
        <h2 className="section__title">QUALIFICATION</h2>
        <span className="section__subtitle">학력/경력(프로젝트)</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick = {() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>Eudcation
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                 onClick = {() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">금천고등학교</h3>
                            <span className="qualification__subtitle"></span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2011-2013
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">충청대학교</h3>
                            <span className="qualification__subtitle">경영회계학부/경영전공</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2016-2018
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">충북대학교</h3>
                            <span className="qualification__subtitle">경영학부</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2018-2021
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">KH정보교육원</h3>
                            <span className="qualification__subtitle">클라우드 융합 Full-stack 웹 개발자 양성과정</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2022.07.25-2022.12.23
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">세미 프로젝트</h3>
                            <span className="qualification__subtitle">프론트엔드</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2022.08.26 - 2022.10.24
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">파이널 프로젝트 </h3>
                            <span className="qualification__subtitle">백/프론트엔드</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2022.11.08-2022.12.23
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">토이 프로젝트</h3>
                            <span className="qualification__subtitle">프론트엔드</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2023.02.21 - ing
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification