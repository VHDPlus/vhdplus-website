const siteConfig = {

  title: 'VHDPlus',
  tagline: 'The FPGA Programming Revolution',
  url: 'https://vhdplus.com',
  baseUrl: '/', 
  favicon: 'img/favicon.ico',
  projectName: 'vhdp',
  organizationName: 'Protop Solutions UG',

  scripts: [
    'js/indexscripts.js'
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
    prism: {
      theme: require('./src/js/prism-vhdplus'),
    },
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
              to: 'docs/components_all',
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
              label: 'GitHub',
              href: 'https://github.com/search?utf8=%E2%9C%93&q=vhdplus',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UC7qiOvlaBSiWyAb7R1xTaEw',
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
              label: 'Twitter',
              href: 'https://twitter.com/vhdplus',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/vhdplus/',
            },
            {
              label: 'Privacy Policy',
              to: 'docs/privacy',
            },
          ],
        },
      ],
      logo: {
        alt: 'VHDPlus Logo',
        src: 'img/footer-logo.webp',
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
        {to: 'docs/getstarted', label: 'Guides', position: 'left'},
        {to: 'docs/components_all', label: 'Components', position: 'left'},
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