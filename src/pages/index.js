/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const features = [
  {
    title: <>Unlimited Threads</>,
    imageUrl: 'img/cpu_icon.svg',
    description: (
      <>
        Use Maximum Performance for Every Task
      </>
    ),
  },
  {
    title: <>Built-in libraries</>,
    imageUrl: 'img/extension_icon.svg',
    description: (
      <>
        Add Components and Focus on Creating Your Code.
      </>
    ),
  },
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/programming_icon.svg',
    description: (
      <>
        Benefit from Simple Syntax, a Clean IDE and a Variety of Tutorials
      </>
    ),
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">

            <div className={styles.heroLogo}>
                <img
              alt="VHDPlus Logo"
              src={'img/vhdp.svg'}
              className={styles.heroLogoImage}
            />
            </div>
            
          <div className={styles.PromoSection}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
          <Link
              className={classnames(
                'button button--primary',
                styles.getStarted,
              )}
              to={'docs/getstarted#install-vhdp-ide'}
            >
              DOWNLOAD
            </Link>
            <div style={{width: 20}}></div> 
            <Link
              className={classnames(
                'button button--outline getStartedButton',
                styles.getStarted,
              )}
              to={'docs/getstarted'}
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
            <div className="container bottomsplit padding-vert--lg">
              <div className="row padding-vert--lg">
                {features.map(({ imageUrl, title, description }, idx) => (
                  <div
                    key={idx}
                    className={classnames('col col--4', styles.feature)}
                  >
                    {imageUrl && (
                      <div className="text--center">
                        <img
                          className={styles.featureImage}
                          src={imageUrl}
                          alt={title}
                        />
                        <h3 style={{padding: "10px"}}>{title}</h3>
                        <p>{description}</p>
                      </div>

                    )}
                    
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="container bottomsplit padding-vert--lg">
          <div className="row padding-vert--lg">
            <div className="col padding-horiz--lg">
            <div className="vcenter"></div>            
                <img src="/img/FPGAStarter.png" style={{verticalAlign: "middle"}}/>            
            </div>
            <div className="col padding--lg">

                <h2>About VHDPlus</h2>

                FPGAs complete operations at astonishing rates and are not limited by thread count, because you program the hardware. 
                That leads to incomparable performance especially in multi threaded tasks, like for robots, AI, 
                audio and video processing or Crypto mining.<br></br><br></br>

                This is why FPGAs are already widely used in the professional environment, 
                but due to the high price and difficult programming, for private users FPGAs have not been established yet. 
                This is why we started this project.
              </div>
          </div>
        </div>
        <div className="container bottomsplit padding-vert--lg">
          <div className="row padding-vert--lg">           
            <div className="col padding--lg">

                <h2>Our Cutting-Edge Cross Platform IDE</h2>

                VHDPlus IDE creates a simple FPGA programming platform. 
                Features like code suggestions and corrections, automated signal creation, simulation assistant, 
                internal vendor-independent libraries and a seamless integration of Quartus, 
                deliver an incomparable FPGA programming experience.<br></br><br></br>
                <h4>Available for Windows and Linux</h4>
                
                <div style={{float: "left", marginRight: 10}}> 
                        <img src="/img/icon-colored-windows.svg" height = "50px"/>
                </div>
                   
                <div style={{marginLeft: 10}}> 
                        <img src="/img/icon-colored-linux.svg" height = "50px" />
                </div>
                <Link
                  className="button button--primary button--lg margin-vert--sm"
                  to={'docs/getstarted#install-vhdp-ide'}
                >
                  Download VHDPlus IDE for free!
                </Link>
            </div>
            <div className="col padding-horiz--lg">
                <div className="vcenter"></div>            
                <img src="/img/VHDPIDE2.png" style={{verticalAlign: "middle"}}/>          
            </div>
          </div>
        </div>
        <div className="container padding-vert--lg">
          <div className="row padding-vert--lg">
            <div className="col padding-horiz--lg">
            <div className="vcenter"></div>            
                <img src="/img/FPGAStarter.png" style={{verticalAlign: "middle"}}/>            
            </div>
            <div className="col padding--lg">

                <h2>Our Hardware</h2>

                Professional grade hardware designed for inexperienced users and professionals. 
                A full plug and play experience made in germany.<br></br><br></br>

                <Link
                  className="button button--outline button--lg margin-vert--sm"
                  to={'docs/components_overview'}
                >
                  Find out more
                </Link>
              </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;