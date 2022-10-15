import React, { useEffect, useState } from "react";
import "./header.css";
import headerImg1 from "../../assets/Header-image-1.webp";
import headerImg2 from "../../assets/Header-image-2.webp";
import rainbowimg from "../../assets/Rainbow.webp";
import buttonbtnimg from "../../assets/Header-btn-background.webp";
import { Link } from "react-router-dom";

const Header = () => {
  const [windowSize, setWindowSize] = useState(
    window.innerWidth < 600 ? true : false
  );

  console.log(windowSize);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 600) {
        setWindowSize(true);
      } else {
        setWindowSize(false);
      }
    });
  }, []);

  return (
    <header>
      <div className="header-container">
        <div className="image-container">
          {windowSize ? (
            <img
              src={headerImg2}
              width={600}
              height={800}
              fetchpriority="high"
              alt=""
              className="header-img"
            />
          ) : (
            <img
              src={headerImg1}
              width={1920}
              height={1440}
              fetchpriority="high"
              alt=""
              className="header-img"
            />
          )}
        </div>
        <h3>Monterey Bay, CA</h3>
        <div className="rainbow-img-container">
          <img
            src={rainbowimg}
            width={500}
            height={281}
            alt=""
            className="rainbow-img"
          />
        </div>
        <div className="header-info">
          <h1 className="heading-1">Hi.</h1>
          <h1 className="heading-2">Hi.</h1>
          <h2>
            Sensory Play{" "}
            <span>
              <br />{" "}
            </span>
            for All Ages
          </h2>
          <div className="header-btn-background">
            <button type="button" className="header-btn">
              <img
                width={350}
                height={150}
                src={buttonbtnimg}
                fetchpriority="high"
                alt=""
              />
              <Link to="/products" style={{ color: "white" }}>
                Shop Now!
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
