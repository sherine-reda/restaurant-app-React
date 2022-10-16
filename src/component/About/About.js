import React, { Fragment } from "react";
import "./About.css";
import img1 from "./../../assets/1.png";
import img2 from "./../../assets/2.png";

const About = () => {
  return (
    <section className="About">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <img src={img1} title="img_about" />
          </div>
          <div className="col-md-4 about">
            <h2>We pride ourselves on making real food from the best ingredients.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            <button> <a href="#">Learn More</a></button>
          </div>
        </div>

        <div className="row cont2">
          <div className="col-md-4 about2">
            <h2>We make everything by hand with the best possible ingredients.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <ul className="List">
              <li>
                <i className="fa fa-check" />
                Etiam sed dolor ac diam volutpat.
              </li>
              <li>
                <i className="fa fa-check" />
                Erat volutpat aliquet imperdiet.
              </li>
              <li>
                <i className="fa fa-check" />
                purus a odio finibus bibendum.
              </li>
            </ul>
            <button> <a href="#">Learn More</a></button>
          </div>
          <div className="col-md-7  img2">
            <img src={img2} title="img_about" />
          </div>
        </div>
      </div>

      <section>
        <div className="row about3">
          <div className=" cont3">
              <h2>When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              <a href="#">Watch Our Story</a>

          </div>
        </div>
        </section>
    </section>

  )
}

export default About