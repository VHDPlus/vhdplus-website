/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import Particles from "react-particles-js";
import { Box, Flex, Image } from "rebass";
import Slider from "react-slick";

const features = [
  {
    title: <>Unlimited Threads</>,
    imageUrl: "img/icons/cpu_icon.svg",
    description: <>Use Maximum Performance for Every Task</>
  },
  {
    title: <>Built-in libraries</>,
    imageUrl: "img/icons/extension_icon.svg",
    description: <>Add Components and Focus on Creating Your Code.</>
  },
  {
    title: <>Easy to Use</>,
    imageUrl: "img/icons/programming_icon.svg",
    description: (
      <>Benefit from Simple Syntax, a Clean IDE and a Variety of Tutorials</>
    )
  }
];

function handleBeforeChange(oldindex, index) {
  var slide1 = document.getElementById("slide1");
  var slide2 = document.getElementById("slide2");
  var slide3 = document.getElementById("slide3");

  if (index == 0) {
    slide2.classList.remove("activeslide");
    slide3.classList.remove("activeslide");
    slide1.classList.add("activeslide");
  } else if (index == 1) {
    slide1.classList.remove("activeslide");
    slide3.classList.remove("activeslide");
    slide2.classList.add("activeslide");
  } else {
    slide1.classList.remove("activeslide");
    slide2.classList.remove("activeslide");
    slide3.classList.add("activeslide");
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.slickRef = React.createRef();
    this.state = { scrollTop: 0 };
  }

  componentDidMount() {
    var slide1 = document.getElementById("slide1");
    var slide2 = document.getElementById("slide2");
    var slide3 = document.getElementById("slide3");

    var slickR = this.slickRef;

    slide1.onclick = function() {
      slickR.slickGoTo(0);
    };
    slide2.onclick = function() {
      slickR.slickGoTo(1);
    };
    slide3.onclick = function() {
      slickR.slickGoTo(2);
    };

    window.addEventListener("scroll", this.setNav, true);

    this.setNav();
  }

  setNav() {
    var x = document.getElementsByClassName("navbar");
    if (window.location.pathname == "/" || window.location.pathname == "") {
      if (window.scrollY <= 100) {
        x[0].style.pointerEvents = "none";
        x[0].style.backgroundColor = "transparent";
      } else {
        x[0].style.pointerEvents = "all";
        x[0].style.backgroundColor = "#20232a";
      }
    }
  }

  render() {
    var settings = {
      dots: true,
      arrows: true,
      autoplaySpeed: 8000,
      infinite: true,
      autoplay: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: handleBeforeChange,
      lazyLoad: "ondemand"
    };

    return (
      <Layout
        title="VHDPlus | The FPGA Revolution"
        description="Software and Hardware that makes FPGA Programming easy"
      >
        <Particles
          className="particlebackground"
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
                    "button button--primary button--lg",
                    styles.getStarted
                  )}
                  to={"docs/getstarted#install-vhdp-ide"}
                >
                  DOWNLOAD
                </Link>
                <div style={{ width: 20 }}></div>
                <Link
                  className={classnames(
                    "button button--outline getStartedButton button--lg",
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
          <div className="container" style={{minHeight: "460px"}}>
            <Slider
              id="SlickSlide"
              ref={slider => (this.slickRef = slider)}
              {...settings}
            >
              <div>
                <video muted autoPlay loop>
                  <source src="/img/IntegratedQuartus.mp4" type="video/webm" />
                  Your browser does not support the video tag. You can download
                  the video anyway.
                </video>
                <div>
                  <div className="hideDesktop slidecaption">
                  <h3>Seamless Quartus Integration</h3>

                    Connect Pins, Compile and Program directly from the IDE. All
                    important Features from Quartus are built-in and ready to
                    use in VHDPlus IDE, which makes it comfortable to use as you
                    don't have to use multiple programs at once. Now ready for
                    Linux and Windows.
                  </div>
                </div>
              </div>
              <div>
                <video muted autoPlay loop>
                  <source src="/img/CodeAssistant.mp4" type="video/webm" />
                  Your browser does not support the video tag. You can download
                  the video anyway.
                </video>
                <div>
                  <div className="hideDesktop slidecaption">
                  <h3>Code Assistant</h3>
                  
                  VHDPlus IDE makes writing code as easy as possible. Multiple
                  Features like Code Suggestions, Auto-Correction and Error list
                  are working together to help you program your FPGA easy and
                  efficiently. Hints, Warnings and Errors give you suggestions
                  on what to improve.
                  </div>
                </div>
              </div>
              <div>
                <video muted autoPlay loop>
                  <source src="/img/Website_Sim.webm" type="video/webm" />
                  Your browser does not support the video tag. You can download
                  the video anyway.
                </video>
                <div>
                  <div className="hideDesktop slidecaption">
                  <h3>Simulate your projects</h3>
                  
                  If you ever had tried programming FPGAs you probably have
                  noticed that the HDL Synthesis takes very long once your
                  project gets bigger. Instead of using Trial & Error you can
                  simulate your Program to fix mistakes. VHDPlus IDE helps you
                  with that as it features an integrated Simulation system.
                  </div>
                </div>
              </div>
            </Slider>
            <div className="row padding-vert--lg padding-horiz--md hideMobile">
              <div
                className="col padding-vert--lg slidebutton activeslide"
                id="slide1"
              >
                <h3>Seamless Quartus Integration</h3>                
                <span>
                  Connect Pins, Compile and Program directly from the IDE. All
                  important Features from Quartus are built-in and ready to use
                  in VHDPlus IDE, which makes it comfortable to use as you don't
                  have to use multiple programs at once. Now ready for Linux and
                  Windows.
                </span>
                <div className="padding-top--sm">
                  <div style={{ float: "left", marginRight: 10 }}>
                    <img
                      src="/img/icons/icon-colored-windows.svg"
                      height="20px"
                    />
                  </div>

                  <div style={{ marginLeft: 10 }}>
                    <img
                      src="/img/icons/icon-colored-linux.svg"
                      height="20px"
                    />
                  </div>
                </div>
              </div>
              <div className="col slidebutton padding-vert--lg" id="slide2">
                <h3>Code Assistant</h3>
                <span>
                  VHDPlus IDE makes writing code as easy as possible. Multiple
                  Features like Code Suggestions, Auto-Correction and Error list
                  are working together to help you program your FPGA easy and
                  efficiently. Hints, Warnings and Errors give you suggestions
                  on what to improve.
                </span>
              </div>

              <div className="col slidebutton padding-vert--lg" id="slide3">
                <h3>Simulate your projects</h3>              
                <span>
                  If you ever had tried programming FPGAs you probably have
                  noticed that the HDL Synthesis takes very long once your
                  project gets bigger. Instead of using Trial & Error you can
                  simulate your Program to fix mistakes. VHDPlus IDE helps you
                  with that as it features an integrated Simulation system.
                </span>
              </div>
            </div>
          </div>

          <div className="altcolor">
            <div className="container padding-vert--lg bottomsplit">
              <div className="row padding-vert--lg">
                <div className="col padding--lg coltext">
                  <h2>What is an FPGA?</h2>
                  FPGAs complete operations at astonishing rates and are not
                  limited by thread count, because you program the hardware.
                  That leads to incomparable performance especially in multi
                  threaded tasks, like for robots, AI, audio and video
                  processing or Crypto mining.<br></br>
                  <br></br>
                  This is why FPGAs are already widely used in the professional
                  environment, but due to the high price and difficult
                  programming, for private users FPGAs have not been established
                  yet. This is why we started this project .
                </div>
                <div className="col padding-horiz--lg colimage">
                  <img
                    src="/img/About_VHDPlus.webp"
                    style={{ verticalAlign: "middle" }}
                  />
                </div>
              </div>
            </div>

            <div className="container padding-vert--lg">
              <div className="row padding-vert--lg ">
                <div className="col padding-horiz--lg colimage">
                  <div className="vcenter"></div>
                  <img
                    src="/img/VHDP.webp"
                    className="shadow"
                    style={{ verticalAlign: "middle" }}
                  />
                </div>
                <div className="col padding--lg coltext">
                  <h2>VHDP Programming Language</h2>
                  By automatically creating statemachines, including
                  synthesizable loops, delays and functions and due to a much
                  simpler syntax, you can experience up to 95% code reduction at
                  100% of the performance! <br />
                  <br />
                  VHDP is not a completely different language but it extends the
                  features of VHDL, so everything you could do with VHDL is also
                  possible with VHDP and of course you can still use your old
                  VHDL files.
                  <br />
                  <br />
                  <h4>Download our IDE now and convince yourself!</h4>
                  <Link
                    className="button button--lg button--outline margin-vert--sm"
                    to={"docs/getstarted"}
                  >
                    Get Started
                  </Link>
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
                  className="button button--lg button--outline margin-vert--sm"
                  to={"docs/components_all"}
                >
                  Learn more
                </Link>
              </div>
              <div className="col padding-horiz--lg colimage">
                <div className="vcenter"></div>
                <img
                  src="/img/vhdpcore/max10_img.jpg"
                  className="shadow"
                  style={{ verticalAlign: "middle" }}
                />
              </div>
            </div>
          </div>
          <div className="container padding-vert--lg">
            <div className="row padding-vert--lg">
              <div className="col padding--lg colimage">
                <div className="vcenter"></div>
                <img
                  src="/img/community/US_Connect.png"
                  style={{ verticalAlign: "middle" }}
                />
              </div>
              <div className="col padding-horiz--lg coltext">
                <h2>Easy to learn</h2>
                Interested but don't know how to start? Check out our
                documentation and example projects! Learn how to program your
                own robot and make it yours. Do projects you couldn't have
                thought of while working with microcontrollers!<br></br>
                <br></br>
                <div
                  className={styles.buttons}
                  style={{ justifyContent: "left" }}
                >
                  <Link
                    className="button button--outline button--lg margin-vert--sm"
                    to={"docs/getstarted_vhdp"}
                  >
                    Documentation
                  </Link>
                  <div style={{ width: 20 }}></div>
                  <Link
                    className="button button--outline button--lg margin-vert--sm"
                    to={"docs/community_overview"}
                  >
                    Example Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="altcolor altcolorend">
            <div className="container padding-vert--lg">
              <div className="row padding-vert--lg">
                <div className="col padding--lg coltext">
                  <h2>Video Tutorials</h2>
                  You don't like to read? Then try our video tutorials in that
                  you learn all important features of the IDE. From simple blink
                  tutorials to implementing processors and programming them with
                  Arduino - there is something for everybody.
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
                  <img
                    src="/img/Youtube.webp"
                    className="shadow"
                    style={{ verticalAlign: "middle" }}
                  />
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
