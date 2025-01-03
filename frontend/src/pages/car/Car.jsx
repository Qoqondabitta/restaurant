import React, { useState } from "react";
import "./car.css";
import {
  carCharacteristics,
  carImageSlider,
  colors,
} from "../../constants/car";

const Car = () => {
  const [nick, setNick] = useState("side");
  const filteredCarImages = carImageSlider.filter((v) => v.passwords === nick);
  return (
    <div className="main-common-style column-center mt-20">
      <h1 className="car-name mb-20">Chevrolet Traverse 2027</h1>
      <div className="container-common-style center gap-50 mt-20">
        <div className="column-center left-car-info mb-20">
          <div className="center gap-20">
            <div className="column-center gap-20">
              {colors.map((v, i) => (
                <div className={`${v.availableColor} color-box`}></div>
              ))}
            </div>
            <div className="center main-image-box">
              <div className="main-image-holder">
                {filteredCarImages.map((v, i) => (
                  <img key={i} src={v.viewImg} className="car-image-slide" />
                ))}
              </div>
            </div>
          </div>
          <div className="center gap-10">
            {carImageSlider.map((c, i) => (
              <div key={i} className="column-center">
                <img
                  onClick={() => setNick(c.passwords)}
                  id={c.passwords === nick && "active"}
                  src={c.boxImg}
                  className="image-slide-mini-boxes"
                />
                <p className="bold">{c.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="column-start bg-grey left-car-info gap-10 mb-20">
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
