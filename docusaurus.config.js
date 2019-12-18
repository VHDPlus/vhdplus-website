/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.

const { Plugin: Embed } = require('remarkable-embed');

// Our custom remarkable plugin factory.
const createVariableInjectionPlugin = variables => {
    // `let` binding used to initialize the `Embed` plugin only once for efficiency.
    // See `if` statement below.
    let initializedPlugin;

    const embed = new Embed();
    embed.register({
        // Call the render method to process the corresponding variable with
        // the passed Remarkable instance.
        // -> the Markdown markup in the variable will be converted to HTML.
        inject: key => initializedPlugin.render(variables[key])
    });

    return (md, options) => {
        if (!initializedPlugin) {
            initializedPlugin = {
                render: md.render.bind(md),
                hook: embed.hook(md, options)
            };
        }

        return initializedPlugin.hook;
    };
};

const IDEVersion = '0.9.5.0';

const siteVariables = {
    Win32Download: '[VHDPlus-' + IDEVersion + '-x86.msi](/download/VHDPlus-' + IDEVersion + '-x86.msi)', 
    Win64Download: '[VHDPlus-' + IDEVersion + '-x64.msi](/download/VHDPlus-' + IDEVersion + '-x64.msi)', 
    DEB64Download: '[VHDPlus-' + IDEVersion + '-x64.deb](/download/VHDPlus-' + IDEVersion + '-x64.deb)', 
    RPM64Download: '[VHDPlus-' + IDEVersion + '-x64.rpm](/download/VHDPlus-' + IDEVersion + '-x64.rpm)', 
    TAR64Download: '[VHDPlus-' + IDEVersion + '-x64.tar.gz](/download/VHDPlus-' + IDEVersion + '-x64.tar.gz)',
    Win32ZipDownload: '[VHDPlus-v' + IDEVersion + '-Win86.zip](/download/VHDPlus-v' + IDEVersion + '-Win86.zip)',
    Win64ZipDownload: '[VHDPlus-v' + IDEVersion + '-Win64.zip](/download/VHDPlus-v' + IDEVersion + '-Win64.zip)',
};

var vhdp = require('./vhdpHighlight');

const siteConfig = {

  title: 'VHDPlus', // Title for your website.
  tagline: 'The FPGA Programming Revolution',
  url: 'https://vhdplus.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  favicon: 'img/favicon.ico',
  projectName: 'vhdp',
  organizationName: 'Protop Solutions UG',

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    
  ],  

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs',
          sidebarPath: require.resolve('./sidebars.json'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,

          remarkPlugidns: [createVariableInjectionPlugin(siteVariables)],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          postsPerPage: 10,
        },
      },
    ],
  ],

  themeConfig: {
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guides',
              to: 'docs/getstarted',
            },
            {
              label: 'Components',
              to: 'docs/components_overview',
            },
            {
              label: 'VHDP Overview',
              to: 'docs/vhdp_overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/vhdp',
            },
            {
              label: 'Project chat',
              href: 'https://join.slack.com/t/vhdplus/shared_invite/enQtNzUyNTkzMDA4OTk4LTM4MWI0NzAxZDA4NzNiMDkxZWM4MzViMDQ5NzcxYWI2NTA1MzM2ZDlkNmQ5ZDQ5MzIwM2E4NjZmMGI3MjhhZWE',
            },
            {
              label: 'Youtube',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/vhdplus/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Privacy Policy',
              to: 'docs/privacy',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/vhdplus',
            },
          ],
        },
      ],
      logo: {
        alt: 'VHDPlus Logo',
        src: 'img/footer-logo.png',
        href: 'https://vhdplus.com',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Protop Solutions UG`,
    },
    navbar: {
      style: 'dark',
      title: 'VHDPlus',
      logo: {
        alt: 'VHDPlus Logo',
        src: 'img/vhdp.svg',
      },
      links: [
        {to: 'docs/getstarted', label: 'Getting Started', position: 'left'},
        {to: 'docs/components_overview', label: 'Components', position: 'left'},
        {to: 'docs/community_overview', label: 'Community', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'docs/contact', label: 'Contact', position: 'right'},
      ],
    },
    image: 'img/vhdp.svg',
    // Equivalent to `docsSideNavCollapsible`
    sidebarCollapsible: true,
    // ...
    algolia: {
      apiKey: '7b0a00c4049dd8b10c7a97d5f74d9c4e',
      indexName: 'vhdplus',
      algoliaOptions: {},
    },
  },
};

module.exports = siteConfig;