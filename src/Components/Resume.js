import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const seller = this.props.data.seller.map(function (seller) {
      return (
        <div key={seller.company}>
          <h3>{seller.company}</h3>
          <p className="info">
            {seller.title}
            <span>&bull;</span> <em className="date">{seller.years}</em>
          </p>
          <p>{seller.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Butcher Sign-In</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
              <div>
                    <button className="submit">Butcher Sign-In</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>User Sign-In</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{work}</div>
              </div>
              <div>
                    <button className="submit">User Sign-In</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Seller Sign-In</span>
              </h1>
            </div>
            
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{seller}</div>
              </div>
              <div>
                
                
              <button className="submit" onClick={() => window.location.href = 'signup.html'}>Sellers Sign-In</button>

                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
