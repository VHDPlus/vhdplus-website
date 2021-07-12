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
import { Container, Row, Col } from 'react-bootstrap';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const snippetVHDP = {
  code: `Main
(
    led : OUT STD_LOGIC := '0'; --Output signal
)
{ 
    Process() --Infinite loop
    {
        Thread --Automatic state machine
        {
            led <= '0'; --turn LED on
            Wait(250ms); --Wait for 250ms
            led <= '1'; --turn LED off
            Wait(250ms); --Wait for 250ms
        }
    }
}`,
  header: 'VHDP',
  language: 'language-vhdp'
}

const snippetVHDL = {
  code: `library IEEE;
use IEEE.std_logic_1164.all;
use IEEE.numeric_std.all;
  
entity FirstProjectVHDL is
    port(
        CLK : in     std_logic;
        LED : buffer std_logic := '0'
    );
end entity FirstProjectVHDL;

architecture rtl of FirstProjectVHDL is
    signal counter : integer range 0 to 1000000 := 0;
begin
  
    blink: process(clk)
    begin
        if rising_edge(clk) then
            if counter < 1000000 then
                counter <= counter + 1;
            else
                counter <= 0;
                LED     <= NOT LED;
            end if;
        end if;
    end process blink;
  
end architecture rtl;`,
  header: 'VHDL',
  language: 'language-vhdl'
}

const snippetVerilog = {
  code: `module blink (clk, LED);

input clk;
output LED;
  
reg [31:0] counter;
reg LED_status;
  
initial begin
    counter <= 32'b0;
    LED_status <= 1'b0;
end
  
always @ (posedge clk) 
begin
    counter <= counter + 1'b1;
    if (counter > 1000000)
    begin
        LED_status <= !LED_status;
        counter <= 32'b0;
    end
end
  
assign LED = LED_status;
  
endmodule `,
  header: 'VERILOG',
  language: 'language-verilog'
}

const features = [
  {
    title: "Maximum Performance",
    imageUrl: "img/icons/cpu_icon.svg",
    description: <>Every Thread Is Like a New Processor<br></br>Same Performance as Low-Level Languages</>
  },
  {
    title: "High Compatibility",
    imageUrl: "img/icons/extension_icon.svg",
    description: <>Use VHDP together with VHDL or Verilog</>
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
    imageSrc: "/img/slides/VHDP.png",
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
    imageSrc: "/img/slides/Connection.jpg",
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
    imageSrc: "/img/slides/Simulation.png",
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
    imageSrc: "/img/slides/Debugging.png",
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

  setNav(): void {
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
          <Container>
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
                  className={classnames("button button--primary button--lg", styles.getStarted)}
                  to={"docs/getstarted#install-vhdplus-ide"}>
                  DOWNLOAD
                </Link>
                <Link
                  className={classnames("button button--secondary button--outline button--lg", styles.getStartedAlternative, styles.getStarted)}
                  to={"docs/getstarted"}>
                  GET STARTED
                </Link>
              </div>
            </div>
          </Container>
        </header>

        <main>
          {features && features.length && (
            <Container>
              <Row className="padding-vert--xl">
                {features.map(({ imageUrl, title, description }, idx) => (
                  <Col key={idx}>
                    {imageUrl && (
                      <div className="text--center">
                        <img
                          className={styles.featureImage}
                          src={imageUrl}
                          alt={title}
                        />
                        <h3 className="p-2">{title}</h3>
                        <p>{description}</p>
                      </div>
                    )}
                  </Col>
                ))}
              </Row>
            </Container>
          )}
          {sliders && sliders.length && (
            <Container>
              <Slider
                id="SlickSlide"
                className="roundcorner"
                ref={slider => (this.slickRef = slider)}
                {...settings}
              >
                {sliders.map(({ imageSrc, title, description }, idx) => (
                  <div key={idx}>
                    <img src={imageSrc} className="roundcorner"></img>
                    <div className={classnames("hideDesktop", styles.slidecaption)}>
                      <h3>{title}</h3>
                      {description}
                    </div>
                  </div>
                ))}
              </Slider>
              <Row className="margin-vert--xl hideMobile">
                {sliders.map(({ title, description }, idx) => (
                  <Col
                    key={idx}
                    className={classnames("col", "padding-vert--lg", styles.slidebutton)}
                    id={"slide" + idx}>
                    <h3>{title}</h3>
                    <span>{description}</span>
                  </Col>
                ))}
              </Row>
            </Container>
          )}

          <div className={styles.altcolor}>
            <Container>
              <Row className="bottomsplit padding-vert--lg">
                <Col className="padding-vert--md mobileorder-1">
                  <h1>What is an FPGA?</h1>
                  FPGAs complete operations at astonishing rates. They are not
                  limited by thread count, because you program the hardware.
                  This leads to <strong>incomparable performance</strong>, especially in
                  multi-threaded tasks, such as for robots, AI, audio and video
                  processing or Crypto mining.<br></br>
                  <br></br>
                  This is why FPGAs are already widely used in the professional
                  environment. But due to the high price and difficulty of
                  programming for private users, FPGAs have not yet been
                  established. This is why we started this project.
                </Col>
                <Col className="padding-vert--md mobileorder-0">
                  <img src="/img/About_VHDPlus.png" />
                </Col>
              </Row>
              <Row className="padding-vert--lg">
                <Col className="mobileorder-1 padding-vert--md">
                  <CustomCodeBlock header='Blink' snippets={[snippetVHDP, snippetVHDL, snippetVerilog]} />
                </Col>
                <Col className="mobileorder-0 padding-vert--md">
                  <h2>VHDP Programming Language</h2>
                  By automatically creating state machines, including
                  synthesizable loops, delays, and functions, and due to a much
                  simpler syntax, you can experience up to 95% code reduction at
                  100% of the performance!
                  <br />
                  <br />
                  VHDP is not a completely different language, but it extends
                  the features of VHDL. So everything you could do with VHDL is
                  also possible with VHDP, and of course, you can still use your
                  old VHDL files.
                  <br />
                  <br />
                  <ul>
                    <li><strong>100% Compatibility to classic HDLs ✔</strong></li>
                    <li><strong>Automatic State machines ✔</strong></li>
                    <li><strong>Simple Syntax ✔</strong></li>
                    <li><strong>Full FPGA Performance ✔</strong></li>
                  </ul>
                  <Link
                    className="customLink"
                    to={"docs/getstarted/comparison"}>
                    🡒 Comparison between VHDP with VHDL
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>

          <Container>
            <Row className="bottomsplit padding-vert--lg">
              <Col className="padding-vert--md mobileorder-1">
                <h2>High Speed Hardware</h2>
                <p>
                  Professional grade hardware designed for inexperienced users and
                  professionals. One board for all your projects, faster than
                  processors and the perfect companion for the VHDPlus IDE.
                </p>
                <ul>
                  <li><strong>VHDPlus IDE Integration ✔</strong></li>
                  <li><strong>On-Board Programmer ✔</strong></li>
                  <li><strong>Plug&Play experience ✔</strong></li>
                </ul>
                <Link
                  className="button button--outline button--md"
                  to={"docs/components/overview"}>
                  Learn more
                </Link>
                <Link
                  className="button button--outline button--md margin-left--sm"
                  to={"https://shop.vhdplus.com"}>
                  Visit our Store
                </Link>
              </Col>
              <Col className="padding-vert--md mobileorder-0">
                <video muted loop autoPlay><source src="/img/vhdpshield/Shield.webm" type="video/mp4" />Your browser does not support the video tag. You can download the video anyway.</video>
              </Col>
            </Row>
            <Row className="padding-vert--lg">
              <Col className="padding-vert--md">
                <img src="/img/US_Connect.png" />
              </Col>
              <Col className="padding-vert--md">
                <h2>Easy to learn</h2>
                <p>
                  Interested but don't know how to start? Check out our
                  documentation and example projects! Learn how to program your
                  robot and make it yours. Do projects you may not have thought of
                  while working with microcontrollers!
                </p>
                <Link
                  className="button button--outline button--md"
                  to={"docs/getstarted/vhdp"}>
                  Documentation
                </Link>
                <Link
                  className="button button--outline button--md margin-left--sm"
                  to={"docs/community/overview"}>
                  Example Projects
                </Link>
              </Col>
            </Row>
          </Container>

          <div className={classnames(styles.altcolor, styles.altcolorend)}>
            <Container>
              <Row className="padding-vert--lg">
                <Col className="padding-vert--md mobileorder-1">
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
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span style={{}}>YouTube Channel</span>
                      <svg style={{ marginLeft: "10px" }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" viewBox="0 0 16 16">
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                      </svg>
                    </div>
                  </a>
                </Col>
                <Col className="padding-vert--md mobileorder-0">
                  <img
                    src="/img/Youtube.webp"
                    style={{ verticalAlign: "middle" }}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </main>
      </Layout>
    );
  }
}

export default Home;
