import React, { useCallback, useRef } from "react";
import type { Engine, Container as ParticlesContainer } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Row, Col } from 'react-bootstrap';
import AOS from "aos";
import styles from "../css/index.module.css";
import "aos/dist/aos.css";
import FPGA from '../components/FPGA';
import CustomCodeBlock, { Snippet } from '../components/CustomCodeBlock';
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Slider from "react-slick";
import { useEffect } from "react";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const snippetVHDP: Snippet = {
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

const snippetVHDL: Snippet = {
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

const snippetVerilog: Snippet = {
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
    title: "Everything in One",
    imageUrl: "img/icons/cpu_icon.svg",
    description: <>Program, Simulate and Debug<br></br>FPGAs or Processors on Your FPGA</>
  },
  {
    title: "High Compatibility",
    imageUrl: "img/icons/extension_icon.svg",
    description: <>Use the IDE to Program Our Language VHDP,<br></br>VHDL, Verilog or other Languages</>
  },
  {
    title: "Easy to Use",
    imageUrl: "img/icons/programming_icon.svg",
    description: (
      <>Benefit from Simple Syntax, Clean IDE<br></br>and a Variety of Tutorials</>
    )
  }
];

const sliders = [
  {
    title: "Code Assistant",
    imageSrc: <img alt="Code Assistant" src="/img/slides/VHDP.png" />,
    description: (
      <>
        VHDPlus IDE makes writing code as easy as possible. Multiple Features
        like code suggestions, autocorrection and error listing work together to
        help you program your FPGA.
      </>
    )
  },
  {
    title: "Simulation Assistant",
    imageSrc: <img alt="Simulation Assistant" src="/img/slides/Simulation.png" />,
    description: (
      <>
        If you ever tried programming FPGAs you probably noticed that the HDL
        Synthesis takes very long once your project extends. Instead of using
        trial & error you can simulate your Program to fix mistakes.
      </>
    )
  },
  {
    title: "Seamless Quartus Integration",
    imageSrc: <img alt="Quartus Integration" src="/img/slides/Connection_Light.png" />,
    description: (
      <>
        Connect pins, compile and program directly from our IDE. All important
        features of Quartus are built-in and ready to use in VHDPlus IDE. Now
        available on Linux and Windows.
      </>
    )
  },
  {
    title: "Software Support",
    imageSrc: <img alt="Software Support" src="/img/slides/Debugging.png" />,
    description: (
      <>
        For some applications using an FPGA can have disadvantages. In this case you can use the NIOS II Softcore processor and program it like an Arduino.
        VHDPlus IDE offers first class C++ support including a debugger.
      </>
    )
  }
];

var tsp;

const App = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: ParticlesContainer | undefined) => {
    await console.log(container);
  }, []);

  const slickRef = useRef<Slider>(null);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      AOS.init();
    }

    //Scroll
    document.addEventListener('scroll', debounce(storeScroll), { passive: true });

    // Update scroll position for first time
    storeScroll();

    document.documentElement.dataset.isindex = "1";
    return () => {
      // Anything in here is fired on component unmount.
      document.documentElement.dataset.isindex = "0";
    }
  });

  const debounce = (fn: Function) => {
    let frame: number;
    return (...params: any[]) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      frame = requestAnimationFrame(() => {
        fn(...params);
      });
    }
  };

  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY.toString();
  }

  return (
    <Layout
      title="VHDPlus"
      description="Software and Hardware that makes FPGA Programming easy"
    >
      <div className={classnames(styles.heroBackground)}>
        <Particles
          className={classnames("hideMobile", styles.particles)}
          canvasClassName={styles.particlesCanvas}
          loaded={particlesLoaded}
          init={particlesInit}
          options={{
            fullScreen: {
              enable: false
            },
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
                enable: true,
                outModes: {
                  default: "out"
                },
                size: true,
                speed: {
                  min: 0.1,
                  max: 0.3
                }
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
            detectRetina: true,
            fpsLimit: 120,
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
              <h1 className="hero__title" >VHDPlus</h1>
              <p className="hero__subtitle" >The FPGA Programming Revolution</p>
              <Link
                className={classnames("button button--primary button--lg hideMobile", styles.getStarted)}
                to={"/docs/getstarted#install-vhdplus-ide"}>
                DOWNLOAD
              </Link>
              <Link
                className={classnames("button button--secondary button--outline button--lg", styles.getStartedAlternative, styles.getStarted)}
                to={"/docs/getstarted"}>
                GET STARTED
              </Link>
            </div>
          </Container>
        </header>
      </div>

      <main style={{ overflowX: "hidden" }}>
        {features && features.length && (
          <Container className="margin-vert--lg">
            <Row>
              {features.map(({ imageUrl, title, description }, idx) => (
                <Col key={idx} className="padding-vert--md">
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
          <Container className="margin-vert--lg">
            <Slider
              ref={slickRef}
              dots={true}
              arrows={false}
              autoplaySpeed={20000}
              infinite={true}
              autoplay={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              beforeChange={(_c, n) => {
                var slideCount = sliders.length;
                for (var i = 0; i < slideCount; i++) {
                  var slide = document.getElementById("slide" + i);
                  if (slide) {
                    if (i == n) slide.classList.add(styles.activeslide ?? "");
                    else slide.classList.remove(styles.activeslide ?? "");
                  }
                }
              }}>

              {sliders.map(({ imageSrc, title, description }, idx) => (
                <div key={idx}>
                  {imageSrc}
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
                  key={idx} onClick={() => slickRef.current?.slickGoTo(idx)}
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
              <Col className="padding-vert--md mobileorder-1" data-aos="fade-right">
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
              <Col className="padding-vert--md mobileorder-0" data-aos="fade-left">
                <FPGA />
              </Col>
            </Row>
            <Row className="padding-vert--lg" data-aos="fade-right">
              <Col className="padding-vert--md display-flex">
                <img alt="About VHDPlus" className="margin-auto" src="/img/About_VHDPlus.png" />
              </Col>
              <Col className="padding-vert--md" data-aos="fade-left">
                <h1>What is VHDPlus?</h1>
                <p>
                  VHDPlus is the name for a combination of different solutions we came up with to make FPGA Programming a lot easier.

                  <Container style={{ overflowY: "hidden" }}>
                    <Row className="margin-top--md">
                      <Col className={styles.card} data-aos="fade-up" data-aos-delay="100">
                        <div className={styles.cardTitle}>VHDPlus IDE 💡</div>
                        <div className={styles.cardSubTitle}>VHDPlus IDE is a modern approach to make FPGA Programming faster and more
                          beginner friendly.
                        </div>
                      </Col>
                      <Col className={styles.card} data-aos="fade-up" data-aos-delay="100">
                        <div className={styles.cardTitle}>VHDP Language 📑</div>
                        <div className={styles.cardSubTitle}>VHDP is a superset of VHDL, which makes Programming easier
                          by extending its features and simplifying syntax.
                        </div>
                      </Col>
                    </Row>
                    <Row className="margin-bottom--md">
                      <Col className={styles.card} data-aos="fade-up" data-aos-delay="100">
                        <div className={styles.cardTitle}>Plug&Play Hardware ⚡</div>
                        <div className={styles.cardSubTitle}>We offer hardware and useful extensions which provide,
                          together with VHDPlus IDE, a Plug&Play Experience.
                        </div>
                      </Col>
                      <Col className={styles.card} data-aos="fade-up" data-aos-delay="100">
                        <div className={styles.cardTitle}>VHDPlus Learning Platform 📚</div>
                        <div className={styles.cardSubTitle}>We offer a lot of Examples and Guides for free on our Website,
                          which we are expanding continuously.
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row className="bottomsplit padding-vert--lg">
            <Col className="mobileorder-0 padding-vert--md" data-aos="fade-right">
              <h2>VHDP Programming Language</h2>
              By automatically creating state machines, including
              synthesizable loops, delays, and functions, and due to a much
              simpler syntax, you can experience up to 95% code reduction at
              100% of the performance!
              <br />
              <br />
              VHDP is not a completely different language, but it extends
              the features of VHDL. So everything you could do with VHDL is
              also possible with VHDP. Nevertheless, you can program with the IDE in
              almost every HDL language and add code from different languages.
              Feel free to convice yourself!
              <ul className="padding-vert--md">
                <li><strong>100% Compatibility to classic HDLs ✔</strong></li>
                <li><strong>Automatic State machines ✔</strong></li>
                <li><strong>Simple Syntax ✔</strong></li>
                <li><strong>Full FPGA Performance ✔</strong></li>
              </ul>
              <div className="buttons">
                <Link
                  className="button button--outline customLink"
                  to={"/docs/getstarted/comparison"}>
                  Compare VHDP to VHDL
                </Link>
              </div>
            </Col>
            <Col className="mobileorder-1 padding-vert--md" data-aos="fade-left">
              <CustomCodeBlock header='Blink' snippets={[snippetVHDP, snippetVHDL, snippetVerilog]} />
            </Col>
          </Row>
          <Row className="padding-vert--lg">
            <Col className="padding-vert--md display-flex hideMobile" data-aos="fade-right">
              <video className="margin-auto" muted loop autoPlay><source src="/img/vhdpshield/Shield.webm" type="video/webm" />Your browser does not support the video tag. You can download the video anyway.</video>
            </Col>
            <Col className="padding-vert--md hideDesktop">
              <img alt="VHDPlus Core Max10" src="/img/vhdpcore/Core.png" />
            </Col>
            <Col className="padding-vert--md mobileorder-1" data-aos="fade-left">
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
              <div className="buttons">
                <Link
                  className="button button--outline customLink"
                  to={"/docs/components/overview"}>
                  Components Overview
                </Link>
                <Link
                  className="button button--outline customLink"
                  href={"https://shop.vhdplus.com"}>
                  Visit our Shop 🛒
                </Link>
              </div>
            </Col>

          </Row>
        </Container>

        <div className={classnames(styles.altcolor, styles.altcolorend)}>
          <Container>
            <Row className="padding-vert--lg">
              <Col className="padding-vert--md mobileorder-1" data-aos="fade-right">
                <h2>Tutorials</h2>
                <p>
                  Interested but don't know how to start? Check out our documentation and example projects!
                  Learn how to program your robot and make it yours. Do projects you may not have thought of while working with microcontrollers!
                </p>
                <p>
                  You don't like to read? Then try our video tutorials in which
                  you can learn all important features of our IDE. From simple
                  blink tutorials to implementing processors and programming
                  them with Arduino - there is something for everybody.
                </p>
                <p>
                  Make sure to subscribe so you don't miss any new videos ❤
                </p>

                <div className="buttons">
                  <Link
                    className="button button--outline customLink"
                    to={"/docs/community/overview"}>
                    Example Projects
                  </Link>
                  <Link
                    className="button button--outline customLink"
                    href="https://www.youtube.com/channel/UC7qiOvlaBSiWyAb7R1xTaEw"
                  >
                    Youtube Channel
                    <div className="youtubeLogo margin-left--sm" style={{ float: "right" }}></div>
                  </Link>
                </div>
              </Col>
              <Col className="padding-vert--md mobileorder-0" data-aos="fade-left">
                <img src="/img/US_Connect.png" alt="VHDPlus Tutorials" />
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </Layout >
  );
};
export default App;