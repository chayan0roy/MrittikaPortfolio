import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Education = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "education" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Education</h2>
              <p>
              I currently pursuing my B.Sc In Multimedia, Animation And Graphics from NSHM knowledge campus in kolkata
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2017-2018</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Seconadry Education(10th)</h4>
                    <p className="fz-18 pra d-block">Bagnan Adarsha Balika Vidyalaya</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2021-2022</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Bangalpur jyotirmoyee girls high school</h4>
                    <p className="fz-18 pra d-block">Higher Seconadry Education(12th)</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2022-2025</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">B.Sc In Multimedia, Animation And Graphics</h4>
                    <p className="fz-18 pra d-block">NSHM knowledge campus in kolkata</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
