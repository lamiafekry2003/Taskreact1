import React from 'react'
import img from '../Assesst/avataaars.svg'
import style from "./Start.module.css"
export default function Start() {
  return (
      <div className={style.header}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={img} className=''/>
              <h2 className={style.cont}>Start Framework</h2>
              <div className={style.hrlin}>
                <i className="fa-solid fa-star "></i>
              </div>
              <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
        </div>
      </div>
  )
}
