import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React, { useCallback, useEffect, useState } from "react"

import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "../css/index.module.css";
import Particles from "react-particles-js";
import CustomCodeBlock from '../components/CustomCodeBlock'
import Slider from "react-slick";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const features = [
  {
    title: "Maximum Performance",
    imageUrl: "img/icons/cpu_icon.svg",
    description: <>Every Thread Is Like a New Processor<br></br>Same Performance as Low-Level Languages</>
  },
  {
    title: "Built-in libraries",
    imageUrl: "img/icons/extension_icon.svg",
    description: <>Add Components and Focus on Creating Your Code.</>
  },
  {
    title: "Easy to Use",
    imageUrl: "img/icons/programming_icon.svg",
    description: (
      <>Benefit from Simple Syntax, a Clean IDE and a Variety of Tutorials</>
    )
  }
];

const sliders = [
  {
    title: "Code Assistant",
    videoUrl: "/img/slides/VHDP.png",
    description: (
      <>
        VHDPlus IDE makes writing code as easy as possible. Multiple Features
        like code suggestions, autocorrection and error listing work together to
        help you program your FPGA.
      </>
    )
  },
  {
    title: "Seamless Quartus Integration",
    videoUrl: "/img/slides/Connection.jpg",
    description: (
      <>
        Connect pins, compile and program directly from our IDE. All important
        features of Quartus are built-in and ready to use in VHDPlus IDE. Now
        available on Linux and Windows.
      </>
    )
  },
  {
    title: "Simulation Assistant",
    videoUrl: "/img/slides/Simulation.png",
    description: (
      <>
        If you ever tried programming FPGAs you probably noticed that the HDL
        Synthesis takes very long once your project extends. Instead of using
        trial & error you can simulate your Program to fix mistakes.
      </>
    )
  }
  ,
  {
    title: "Software Support",
    videoUrl: "/img/slides/Debugging.png",
    description: (
      <>
        For some applications using an FPGA can have disadvantages. In this case you can use the NIOS II Softcore processor and program it like an Arduino.
        VHDPlus IDE offers first class C++ support including a debugger.
      </>
    )
  }
];

function handleBeforeChange(oldindex, index) {
  var slideCount = sliders.length;

  for (var i = 0; i < slideCount; i++) {
    var slide = document.getElementById("slide" + i);
    if (slide) {
      if (i == index) slide.classList.add(styles.activeslide);
      else slide.classList.remove(styles.activeslide);
    }
  }
}

class Home extends React.Component {

  slickRef;

  constructor(props) {
    super(props);

    this.slickRef = React.createRef();
    //this.state = { scrollTop: 0 };
  }

  componentDidMount() {
    var slide0 = document.getElementById("slide0");
    var slide1 = document.getElementById("slide1");
    var slide2 = document.getElementById("slide2");
    var slide3 = document.getElementById("slide3");

    var slickR = this.slickRef;

    slide0.onclick = function () {
      slickR.slickGoTo(0);
    };
    slide1.onclick = function () {
      slickR.slickGoTo(1);
    };
    slide2.onclick = function () {
      slickR.slickGoTo(2);
    };
    slide3.onclick = function () {
      slickR.slickGoTo(3);
    };

    window.addEventListener("scroll", this.setNav, true);
    this.setNav();

    slide0.classList.add(styles.activeslide);
  }

  setNav() {
    var x = document.getElementsByClassName("navbar");
    var navbar = x[0] as HTMLElement;

    if (window.location.pathname == "/" || window.location.pathname == "") {
      if (window.scrollY <= 100) {
        navbar.style.pointerEvents = "none";
        navbar.style.backgroundColor = "transparent";
      } else {
        navbar.style.pointerEvents = "all";
        navbar.style.backgroundColor = "#20232a";
      }
    }
  }

  render() {
    var settings = {
      dots: true,
      arrows: false,
      autoplaySpeed: 20000,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: handleBeforeChange
    };

    return (
      <Layout
        title="VHDPlus"
        description="Software and Hardware that makes FPGA Programming easy"
      >
        <Particles
          className={styles.particlebackground}
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 1500
                }
              },
              line_linked: {
                enable: true,
                opacity: 0.08
              },
              move: {
                direction: "bottom",
                speed: 0.05
              },
              size: {
                value: 1.7
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1
                }
              }
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push"
                },
                onhover: {
                  enable: true,
                  mode: "bubble"
                }
              },
              modes: {
                push: {
                  particles_nb: 1
                },
                bubble: {
                  size: 6,
                  distance: 40
                }
              }
            },
            retina_detect: true
          }}
        />

        <header className={classnames("hero", styles.heroBanner)}>
          <div className="container">
            <div className={styles.heroLogo}>
              <img
                alt="VHDPlus Logo"
                src={"img/vhdp.svg"}
                className={styles.heroLogoImage}
              />
            </div>

            <div className={styles.PromoSection}>
              <h1 className="hero__title">VHDPlus</h1>
              <p className="hero__subtitle">The FPGA Programming Revolution</p>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    "button button--primary button--lg hideMobile",
                    styles.getStarted
                  )}
                  to={"docs/getstarted#install-vhdplus-ide"}>
                  DOWNLOAD
                </Link>
                <Link
                  className={classnames(
                    "button button--secondary button--outline button--lg text-secondary",
                    styles.getStarted
                  )}
                  to={"docs/getstarted"}
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main>
          {features && features.length && (
            <section className={styles.features}>
              <div className="container padding-top--lg">
                <div className="row padding-top--lg">
                  {features.map(({ imageUrl, title, description }, idx) => (
                    <div
                      key={idx}
                      className={classnames("col col--4", styles.feature)}
                    >
                      {imageUrl && (
                        <div className="text--center">
                          <img
                            className={styles.featureImage}
                            src={imageUrl}
                            alt={title}
                          />
                          <h3 style={{ padding: "10px" }}>{title}</h3>
                          <p>{description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
          {sliders && sliders.length && (
            <div className="container">
              <Slider
                id="SlickSlide"
                className="roundcorner"
                ref={slider => (this.slickRef = slider)}
                {...settings}
              >
                {sliders.map(({ videoUrl, title, description }, idx) => (
                  <div key={idx}>

                    <img src={videoUrl} className="roundcorner"></img>

                    <div className={classnames("hideDesktop", styles.slidecaption)}>
                      <h3>{title}</h3>
                      {description}
                    </div>
                  </div>
                ))}
              </Slider>

              <div className="row padding-vert--lg padding-horiz--md hideMobile">
                {sliders.map(({ title, description }, idx) => (
                  <div
                    key={idx}
                    className={classnames("col", "padding-vert--lg", styles.slidebutton)}
                    id={"slide" + idx}
                  >
                    <h3>{title}</h3>
                    <span>{description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={styles.altcolor}>
            <div className="container padding-vert--lg bottomsplit">
              <div className="row padding-vert--lg">
                <div className="col padding--lg coltext">
                  <h2>What is an FPGA?</h2>
                  FPGAs complete operations at astonishing rates. They are not
                  limited by thread count, because you program the hardware.
                  This leads to incomparable performance, especially in
                  multi-threaded tasks, such as for robots, AI, audio and video
                  processing or Crypto mining.<br></br>
                  <br></br>
                  This is why FPGAs are already widely used in the professional
                  environment. But due to the high price and difficulty of
                  programming for private users, FPGAs have not yet been
                  established. This is why we started this project.
                </div>
                <div className="col padding-horiz--lg colimage">
                  <a href="/docs/community/overview">
                    <img
                      src="/img/About_VHDPlus.png"
                      style={{ verticalAlign: "middle" }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="container padding-vert--lg">
              <div className="row padding-vert--lg ">
                <div className="col padding-horiz--lg">
                  <img
                      src="/img/VHDP.webp"
                      style={{ verticalAlign: "middle" }}
                    />
                </div>
                <div className="col padding-horiz--lg">
                  <h2>VHDP Programming Language</h2>
                  By automatically creating state machines, including
                  synthesizable loops, delays, and functions, and due to a much
                  simpler syntax, you can experience up to 95% code reduction at
                  100% of the performance! <br />
                  <br />
                  VHDP is not a completely different language, but it extends
                  the features of VHDL. So everything you could do with VHDL is
                  also possible with VHDP, and of course, you can still use your
                  old VHDL files.
                  <br />
                  <br />
                  <h4>Download our IDE now and convince yourself!</h4>
                  <div
                    className={styles.buttons}
                    style={{ justifyContent: "left" }}
                  >
                    <Link
                      className="button button--outline button--md"
                      to={"docs/getstarted"}
                    >
                      Get Started
                    </Link>
                    <Link
                      className="button button--outline button--md margin-left--sm"
                      to={"docs/getstarted/comparison"}
                    >
                      Comparison
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="container bottomsplit padding-vert--lg">
            <div className="row padding-vert--lg">
              <div className="col padding--lg coltext">
                <h2>Our Hardware</h2>
                Professional grade hardware designed for inexperienced users and
                professionals. One board for all your projects, faster than
                processors and the perfect companion for the VHDPlus IDE.
                <br></br>
                <br></br>
                <h4>Quality Made in Germany</h4>
                <Link
                  className="button button--outline button--md"
                  to={"docs/components/overview"}
                >
                  Learn more
                </Link>

                <Link
                  className="button button--outline button--md margin-left--sm"
                  to={"https://shop.vhdplus.com"}
                >
                  Visit our Store
                </Link>
              </div>
              <div className="col padding-horiz--lg colimage">
                <div className="vcenter"></div>
                <a href="/docs/components/vhdpcore_max10">
                  <img src="/img/vhdpcore/max10_img.jpg" />
                </a>
              </div>
            </div>
          </div>
          <div className="container padding-vert--lg">
            <div className="row padding-vert--lg">
              <div className="col padding--lg colimage">
                <div className="vcenter"></div>
                <a href="/docs/community/motor">
                  <img
                    src="/img/US_Connect.png"
                    style={{ verticalAlign: "middle" }}
                  />
                </a>
              </div>
              <div className="col padding-horiz--lg coltext">
                <h2>Easy to learn</h2>
                Interested but don't know how to start? Check out our
                documentation and example projects! Learn how to program your
                robot and make it yours. Do projects you may not have thought of
                while working with microcontrollers!<br></br>
                <br></br>
                <br></br>
                <div
                  className={styles.buttons}
                  style={{ justifyContent: "left" }}
                >
                  <Link
                      className="button button--outline button--md"
                      to={"docs/getstarted/vhdp"}
                    >
                      Documentation
                    </Link>
                    <Link
                      className="button button--outline button--md margin-left--sm"
                      to={"docs/community/overview"}
                    >
                      Example Projects
                    </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={classnames(styles.altcolor, styles.altcolorend)}>
            <div className="container padding-vert--lg">
              <div className="row padding-vert--lg">
                <div className="col padding--lg coltext">
                  <h2>Video Tutorials</h2>
                  You don't like to read? Then try our video tutorials in which
                  you can learn all important features of our IDE. From simple
                  blink tutorials to implementing processors and programming
                  them with Arduino - there is something for everybody.
                  <br />
                  <br /> Make sure to subscribe so you don't miss any new videos
                  ❤<br />
                  <br />
                  <a
                    target="_blank"
                    className="button button--outline button--lg margin-vert--sm"
                    href="https://www.youtube.com/channel/UC7qiOvlaBSiWyAb7R1xTaEw"
                  >
                    YouTube Channel
                  </a>
                </div>
                <div className="col padding-horiz--lg colimage">
                  <div className="vcenter"></div>
                  <a href="https://www.youtube.com/channel/UC7qiOvlaBSiWyAb7R1xTaEw">
                    <img
                      src="/img/Youtube.webp"
                      style={{ verticalAlign: "middle" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

export default Home;
