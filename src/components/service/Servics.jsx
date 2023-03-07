import React, { useState } from 'react'
import "./services.css"

const Service = () => {
  const[toggleState, setToggleState] = useState(0);

  const toggleTab = (index) =>{
    setToggleState(index);
  }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">이 회사에 필요한 이유</span>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">성실 <br />sincerely</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>View More
            <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal" }>
              <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>


                <h3 className="services__modal-title">성실함</h3>
                <p className="services__modal-description">성실함은 프로젝트를 완수하는 데 매우 중요한 요소라고 생각합니다.</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">세심한 작업과 지속적인 성장을 하겠습니다.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">성실함과 열정으로 완성하는 개발자가 되겠습니다.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">디자인과 기능의 조화를 맞춘 개발자가 되겠습니다.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">꼼꼼하게 만들어내는 개발자가 되겠습니다.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">사용친화적인 웹사이트를 만들겠습니다.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">변화 <br /> change</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>View More
            <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal" }>
              <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>


                <h3 className="services__modal-title">변화</h3>
                <p className="services__modal-description">빠르게 변화하는 속에서 새로운 기술을 배우고 트랜드에 열려있겠습니다.</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">새로운 기술과 프레임워크의 등장에 맞춰 다가가겠습니다.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">사용자에게 쉽게 접근 가능하도록 만들겠습니다.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">모바일 기기에 최적화된 웹/애플리케이션을 만들겠습니다.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-edit services__icon"></i>
              <h3 className="services__title">소통 <br /> communication</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)} >View More
            <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal" }>
              <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>


                <h3 className="services__modal-title">소통</h3>
                <p className="services__modal-description">서로 다른 역할을 수행하며, 서로의 업무를 이해하고 협력하는 것이 중요합니다.</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">자신의 역학과 책임을 명확하게 이해하고 프로젝트 진행에 필요한 정보를 얻겠습니다.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">프로젝트의 목표와 일정, 우선순위 등을 명확하게 이해하고 공유하여 정보를 빠르게 전달받겠습니다.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">적극적으로 의견을 제시하고, 문제해결에 참여하겠습니다.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">상호 존중과 협력적인 태도를 가지겠습니다.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Service