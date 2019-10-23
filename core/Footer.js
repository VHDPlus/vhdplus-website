/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('getstarted.html')}>
              Getting Started
            </a>
            <a href={this.docUrl('components_overview')}>
              Components
            </a>
             <a href={this.docUrl('getstarted_vhdp')}>
              VHDP Overview
            </a>
          </div>
                <div>
                    <h5>Community</h5>
                    <a href="https://stackoverflow.com/questions/tagged/vhdp" target="_blank" rel="noreferrer noopener">Stack Overflow</a>
                    <a href="https://join.slack.com/t/vhdplus/shared_invite/enQtNzUyNTkzMDA4OTk4LTM4MWI0NzAxZDA4NzNiMDkxZWM4MzViMDQ5NzcxYWI2NTA1MzM2ZDlkNmQ5ZDQ5MzIwM2E4NjZmMGI3MjhhZWE">Project Chat</a>
                    <a href="https://www.youtube.com/channel/UC7qiOvlaBSiWyAb7R1xTaEw" target="_blank">Youtube</a>
                    <a href="https://www.instagram.com/vhdplus/" target="_blank">Instagram</a>                   
                </div>
                <div>
                    <h5>More</h5>
                    <a href={`${this.props.config.baseUrl}docs/privacy`}>Privacy Policy</a>
                    <a href={`${this.props.config.baseUrl}blog`}>Blog</a>              
                    <a href="https://github.com/search?q=vhdplus" target="_blank">Projects using VHDPlus</a>
                    <a href="https://twitter.com/VHDPlus?ref_src=twsrc%5Etfw" target="_blank" className="twitter-follow-button" data-show-count="false">Follow @VHDPlus</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
