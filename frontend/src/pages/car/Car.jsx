import React, { useState } from "react";
import "./car.css";
import {
  advancedCarSlide,
  carCharacteristics,
} from "../../constants/car";

const Car = () => {
  const [nick, setNick] = useState("side");
  const [color, setColor] = useState("white");
  const res = advancedCarSlide[0].carImageSlider.filter(
    (v) => v.passwords === nick
  );
  return (
    <div className="main-common-style column-center mt-20">
      <h1 className="car-name mb-20">{advancedCarSlide[0].name}</h1>
      <div className="container-common-style center gap-50 mt-20">
        <div className="column-center left-car-info mb-20">
          <div className="center gap-20">
            <div className="column-center gap-20">
              {advancedCarSlide[0].colors.map((v, i) => (
                <div
                  id={v === color && "active-box"}
                  className={`${v} color-box`}
                  onClick={() => setColor(v)}
                  key={i}
                ></div>
              ))}
            </div>
            <div className="center main-image-box">
              <div className="main-image-holder">
                {res.map((v, i) => (
                  <img key={i} src={v[`${color}`]} className="car-image-slide" />
                ))}
              </div>
            </div>
          </div>
          <div className="center gap-10">
            {advancedCarSlide[0].carImageSlider.map((c, i) => (
              <div key={i} className="column-center gap-5">
                <img
                  onClick={() => setNick(c.passwords)}
                  id={c.passwords === nick && "active"}
                  src={c.boxImg}
                  className="image-slide-mini-boxes"
                />
                <h5 className="bold">{c.title}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className="column-start characteristics-box left-car-info gap-10 mb-20">
          {carCharacteristics.map((v, i) => (
            <div className="center gap-10" key={i}>
              <p className="car-charasterictics bold">{v.termin}:</p>
              <p className="car-charasterictics">{v.info}</p>
            </div>
          ))}
          <p className="price">49 999.99 $</p>
          <div className="center gap-20">
            <button className="button-common-style bg-black w-120 buy-button-car mt-10">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
