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

const IDEVersion = '0.9.3.7';

const siteVariables = {
    Win32Download: '[VHDPlus-' + IDEVersion + '-x86.msi](/download/VHDPlus-' + IDEVersion + '-x86.msi)', 
    Win64Download: '[VHDPlus-' + IDEVersion + '-x64.msi](/download/VHDPlus-' + IDEVersion + '-x64.msi)', 
    DEB64Download: '[VHDPlus-' + IDEVersion + '-x64.deb](/download/VHDPlus-' + IDEVersion + '-x64.deb)', 
    RPM64Download: '[VHDPlus-' + IDEVersion + '-x64.rpm](/download/VHDPlus-' + IDEVersion + '-x64.rpm)', 
    TAR64Download: '[VHDPlus-' + IDEVersion + '-x64.tar.gz](/download/VHDPlus-' + IDEVersion + '-x64.tar.gz)',
    Win32ZipDownload: '[VHDPlus-v' + IDEVersion + '-Win86.zip](/download/VHDPlus-v' + IDEVersion + '-Win86.zip)',
    Win64ZipDownload: '[VHDPlus-v' + IDEVersion + '-Win64.zip](/download/VHDPlus-v' + IDEVersion + '-Win64.zip)',
};

const users = [
  {
    caption: 'VHDP Project 1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/vhdp.svg',
    infoLink: '',
    pinned: true,
  },
];

var vhdp = require('./vhdpHighlight');
const siteConfig = {
    markdownPlugins: [
        createVariableInjectionPlugin(siteVariables)
    ],

  title: 'VHDPlus', // Title for your website.
  tagline: 'The FPGA Programming Revolution',
  url: 'https://vhdplus.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'vhdp',
  organizationName: 'Protop Solutions UG',

  docsSideNavCollapsible: true,
  scrollToTop: true,
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'getstarted', label: 'Guides' },
    { doc: 'components_overview', label: 'Components' },
    { doc: 'community_overview', label: 'Community' },
    { blog: true, label: 'Blog' },
    { doc: 'contact', label: 'Contact' },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/vhdp.svg',
  footerIcon: 'img/vhdp.svg',
  favicon: 'img/favicon.png',
  customDocsPath: 'website/docs',
  /* Colors for website */
  colors: {
    primaryColor: '#20232a',
    secondaryColor: '#15171c',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} VHDPlus.com`,
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
    hljs: function(hljs) {
      hljs.registerLanguage('vhdp', function(hljs) {         
          return vhdp.syntax(hljs);
      });
    }
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
  ],  
  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/logo.png',
  twitter: true,
  twitterImage: 'img/logo.png',
  twitterUsername: 'VHDPlus',
  enableUpdateTime: true,
  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  algolia: {
    apiKey: '7b0a00c4049dd8b10c7a97d5f74d9c4e',
    indexName: 'vhdplus',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

};

module.exports = siteConfig;
