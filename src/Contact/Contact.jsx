import React, { useState } from "react";
import style from "./Contact.module.css";
export default function Contact() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  function handler(set, value) { 
    set(value);
  }
  return (
    <div className={style.contact}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className={style.text}>CONATCT SECTION</h2>
            <div className={style.hrlin}>
              <i className="fa-solid fa-star "></i>
            </div>
          </div>
          <div className="  col-md-12 ">
            <form
              action=""
              className="mt-4 p-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <div class="form-group w-50  mx-auto my-3">
                <label
                  htmlFor="inputName"
                  className="position-relative top-0"
                  style={name ? { display: "block" } : { display: "none" }}
                >
                  userName:
                </label>
                <input
                  type="text"
                  placeholder="userName"
                  className={` ${style.inpu} form-control border-0 border-bottom py-3 position-relative`}
                  id="inputName"
                  onChange={(e) => {
                    handler(setName, e.target.value);
                  }}
                />
              </div>
              <div class="form-group w-50  mx-auto my-3">
                <label
                  htmlFor="inputAge"
                  className="position-relative top-0"
                  style={age ? { display: "block" } : { display: "none" }}
                >
                  userAge:
                </label>
                <input
                  type="text"
                  placeholder="userAge"
                  className={` ${style.inpu} form-control border-0 border-bottom py-3 position-relative`}
                  id="inputAge"
                  onChange={(e) => {
                    handler(setAge, e.target.value);
                  }}
                />
              </div>
              <div class="form-group w-50  mx-auto my-3">
                <label
                  htmlFor="inputAge"
                  className="position-relative top-0"
                  style={email ? { display: "block" } : { display: "none" }}
                >
                  userEmail:
                </label>
                <input
                  type="email"
                  placeholder="userEmail"
                  className={` ${style.inpu} form-control border-0 border-bottom py-3 position-relative`}
                  id="inputEmail"
                  onChange={(e) => {
                    handler(setEmail, e.target.value);
                  }}
                />
              </div>
              <div class="form-group w-50  mx-auto my-3">
                <label
                  htmlFor="inputPass"
                  className="position-relative top-0"
                  style={pass ? { display: "block" } : { display: "none" }}
                >
                  userPassword:
                </label>
                <input
                  type="password"
                  placeholder="userPassword"
                  className={` ${style.inpu} form-control border-0 border-bottom py-3 position-relative`}
                  id="inputPass"
                  onChange={(e) => {
                    handler(setPass, e.target.value);
                  }}
                />
              </div>
              <div className="form-group w-50  mx-auto">
                <button
                  className="btn mt-4 text-white "
                  style={{ backgroundColor: "#1abc9c" }}
                >
                  send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
