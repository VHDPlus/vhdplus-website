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
            <Button href="docs/getstarted#vhdp-ide" id="downloadButton" >DOWNLOAD</Button>  
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
                  content: `The VHDP IDE makes FPGA programming as simple as possible. 
                            Features like code suggestions, automated signal creation, simulation assistant, internal vendor-independent libraries and a seamless integration of Quartus, deliver an incomparable IDE experience. 
                            [Get started](docs/getstarted).`,
                  imageAlign: 'right',
                  image: `${siteConfig.baseUrl}img/idevid.gif`,
                  imageAlt: 'VHDP IDE',
                  title: 'Our Cutting-Edge IDE',
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
                  content: `Do not waste your time by wiring up all components of your project. We deliver a full plug and play experience. Our [VHDP Core](docs/component_vhdpcore) in combination with our [VHDP Shield](docs/component_vhdpshield) will save your time and money.
                  Click [here](docs/components_overview) to see all extensions.`,
                  imageAlign: 'left',
                  image: `${siteConfig.baseUrl}img/FastDevelopmentComponents.webp`,
                  imageAlt: 'VHDP Core',
                  title: 'Our Development Boards',
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
            title: 'Build in libraries',
          },
          {
            content: 'Benefit from Simple Syntax, a Clean IDE and a Variety of Tutorials',
            image: `${baseUrl}img/programming_icon.svg`,
            imageAlign: 'top',
            title: 'Easy to use',
          }
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <hr style={{width: '60%', margin: 'auto', height: '1px', border: 'none', background: '#f0f0f0'}}/>
          <Description />
          <hr style={{width: '60%', margin: 'auto', height: '1px', border: 'none', background: '#f0f0f0'}}/>
          <VHDPBoard />
        </div>
      </div>
    );
  }
}

module.exports = Index;
