/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} id={props.id} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer background="dark">
        <Logo img_src={`${baseUrl}img/vhdp.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="docs/getstarted#install-vhdp-ide" id="downloadButton" >DOWNLOAD</Button>  
            <Button href="docs/getstarted">GET STARTED</Button>         
          </PromoSection>                
        </div>       
      </SplashContainer>      
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Description = () => (
      <Container padding={['bottom', 'top']}>
            <GridBlock
              contents={[
                {
                  content: `VHDP IDE creates a simple FPGA programming platform. Features like code suggestions and corrections, automated signal creation, simulation assistant, internal vendor-independent libraries and a seamless integration of Quartus, deliver an incomparable IDE experience. 
                            <br><br>Click [here](docs/getstarted) to get started on Windows or Linux.`,
                  imageAlign: 'right',
                  image: `${siteConfig.baseUrl}img/Programming_Example.gif`,
                  imageAlt: 'VHDPlus IDE Example',
                  title: 'Our Cutting-Edge Cross Platform IDE',
                },
              ]}
              layout="twoColumn"
            />
          </Container>
    );

    const VHDPBoard = () => (
      <Container padding={['bottom', 'top']}>
            <GridBlock
              contents={[
                {
                  content: `Professional grade hardware designed for inexperienced users and professionals. A full plug and play experience.  
                  <br><br>Click [here](docs/components_overview) to see see all products.`,
                  imageAlign: 'left',
                  image: `${siteConfig.baseUrl}img/FastDevelopmentComponents.webp`,
                  imageAlt: 'VHDP Core',
                  title: 'Our Hardware',
                },
              ]}
              layout="twoColumn"
            />
          </Container>
      );

      const Advantages = () => (
          <Container padding={['bottom', 'top']}>
              <GridBlock
                  contents={[
                      {
                          content: `FPGAs complete operations at astonishing rates and are not limited by thread count, because you program the hardware. That leads to incomparable performance in multi threaded tasks, like analysing camera data while runnig multiple motor control applications.<br/>
                          This is why FPGAs are already widely used in the professional environment, but due to the high price and difficult programming, for private users FPGAs have not been established yet. This is why we started this project.
<br><br>Click [here](docs/component_vhdpcore) to view our hardware specs.`,
                          imageAlign: 'left',
                          image: `${siteConfig.baseUrl}img/FPGAStarter.png`,
                          imageAlt: 'VHDP Core',
                          title: 'About VHDPlus',
                      },
                  ]}
                  layout="twoColumn"
              />
          </Container>
      );

    const Features = () => (
      <Block layout="threeColumn">
        {[
          {
            content: 'Use Maximum Performance for Every Task',
            image: `${baseUrl}img/cpu_icon.svg`,
            imageAlign: 'top',
            title: 'Unlimited Threads',
          },
          {
            content: 'Add Components and Focus on Creating Your Code',
            image: `${baseUrl}img/extension_icon.svg`,
            imageAlign: 'top',
            title: 'Built-in libraries',
          },
          {
            content: 'Benefit from Simple Syntax, a Clean IDE and a Variety of Tutorials',
            image: `${baseUrl}img/programming_icon.svg`,
            imageAlign: 'top',
            title: 'Easy to Use',
          }
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
            <div className="mainContainer">
            
          <Features />
                <hr style={{ width: '60%', margin: 'auto', height: '1px', border: 'none', background: '#f0f0f0' }} />
                <Advantages />
                <hr style={{ width: '60%', margin: 'auto', height: '1px', border: 'none', background: '#f0f0f0' }} />
          <Description />
          <hr style={{width: '60%', margin: 'auto', height: '1px', border: 'none', background: '#f0f0f0'}}/>
          <VHDPBoard />
        </div>
      </div>
    );
  }
}

module.exports = Index;
