import React from "react";
import img1 from "../Assesst/poert1.png";
import img2 from "../Assesst/port2.png";
import img3 from "../Assesst/port3.png";
import style from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <div className="portfolio pb-4 ">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className={style.text}>PORTFOLIO COMPONENT</h2>
            <div className={style.hrlin}>
              <i className="fa-solid fa-star "></i>
            </div>
          </div>
          {/* <div className={`col-md-4  ${style.wrapper} `}>
            <div className={` ${style.imge}`}>
             <img className={`img-fluid  rounded-4`} src={img1} alt="" />
            </div>
            <div className={`${style.middlee} `}>
              <i className="text-white fa-solid fa-plus fa-5x"></i>
            </div>

          </div> */}
          <div className={`col-md-4 position-relative mt-5 ${style.back}`}>
            <div className={style.imge}>
             <img className={`w-100 mx-4 rounded-4 ${style.imgee}`} src={img1} alt="" />
            </div>
            <div className={`${style.middle}`}>
             <i className="text-white fa-solid fa-plus fa-3x"></i>
            </div>
          </div>
          <div className="col-md-4 position-relative mt-5">
          <div className={style.imge}>
             <img className={`w-100 mx-4 rounded-4 ${style.imgee}`} src={img2} alt="" />
            </div>
            <div className={style.middle}>
             <i class="text-white fa-solid fa-plus fa-3x"></i>
            </div>
          </div>

          <div className="col-md-4 position-relative mt-5">
          <div className={style.imge}>
             <img className={`w-100 mx-4 rounded-4 ${style.imgee}`} src={img3} alt="" />
            </div>
            <div className={style.middle}>
             <i class="text-white fa-solid fa-plus fa-3x"></i>
            </div>
          </div>
          <div className="col-md-4 position-relative mt-5">
          <div className={style.imge}>
             <img className={`w-100 mx-4 rounded-4 ${style.imgee}`} src={img1} alt="" />
            </div>
            <div className={style.middle}>
             <i class="text-white fa-solid fa-plus fa-3x"></i>
            </div>
          </div>
          <div className="col-md-4 position-relative mt-5">
          <div className={style.imge}>
             <img className={`w-100 mx-4 rounded-4 ${style.imgee}`} src={img2} alt="" />
            </div>
              <div className={style.middle}>
             <i class="text-white fa-solid fa-plus fa-3x"></i>
            </div>
          </div>

          <div className={`col-md-4 position-relative mt-5` }>
          <div className={style.imge}>
             <img className={`w-100 mx-4 rounded-4 ${style.imgee}`} src={img3} alt="" />
            </div>
              <div className={`${style.middle}`}>
             <i class="text-white fa-solid fa-plus fa-3x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
