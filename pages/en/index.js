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
                  content: `The [VHDP IDE](docs/getstarted) makes FPGA programming as simple as possible. 
                            With features such as programming suggestions, automatic signal creation, simulation assistant, internal vendor-independent libraries and seamless integration of Quartus, we offer possibilities you get with no other programming environment. 
                            Try it now and create your first project with our tutorials in three minutes!`,
                  imageAlign: 'right',
                  image: `${siteConfig.baseUrl}img/idevid.gif`,
                  imageAlt: 'VHDP IDE',
                  title: 'Use our powerful IDE',
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
                  content: `We offer special [development Boards](docs/components_overview) that save you the trouble 
                  of wiring with jumper cables and using breadboards to connect all your devices. 
                  By using the [VHDP Shield](docs/component_vhdpshield) you can enjoy a plug and play experience and don't have to worry about the power supply.`,
                  imageAlign: 'left',
                  image: `${siteConfig.baseUrl}img/FastDevelopmentComponents.webp`,
                  imageAlt: 'VHDP Core',
                  title: 'Fast development boards',
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
            content: 'Maximum Performance for every Task',
            image: `${baseUrl}img/cpu_icon.svg`,
            imageAlign: 'top',
            title: 'Unlimited Threads',
          },
          {
            content: 'Just add a Component and focus on your main code',
            image: `${baseUrl}img/extension_icon.svg`,
            imageAlign: 'top',
            title: 'Build in libraries',
          },
          {
            content: 'Profit from the simple syntax, clean IDE and Tutorials',
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
