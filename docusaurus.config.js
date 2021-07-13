const siteConfig = {
  title: "The FPGA Programming Revolution",
  tagline: "Software and Hardware that makes FPGA Programming easy",
  url: "https://vhdplus.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  projectName: "vhdp",
  organizationName: "Protop Solutions UG",

  stylesheets: [
    "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "./docs",
          sidebarPath: require.resolve("./sidebars.json"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: 'https://github.com/hendrikmennen/vhdplus-website/edit/master/'
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
        blog: {
          editUrl: ({locale, blogDirPath, blogPath}) => {
            return `https://github.com/hendrikmennen/vhdplus-website/edit/master/${blogDirPath}/${blogPath}`;
          },
          postsPerPage: 10,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
        }
      }
    ]
  ],

  themeConfig: {   
    announcementBar: {
      id: 'shop',
      content:
        '<span>⭐️ New Hardware <a href="https://shop.vhdplus.com/">available</a>! ⭐️</span>',
      backgroundColor: '#0091db',
      textColor: 'white',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require('./src/js/prism-themeLight'),
      darkTheme: require('./src/js/prism-themeDark'),
      additionalLanguages: ['powershell', 'vhdl', 'verilog'],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Guides",
              to: "docs/getstarted"
            },
            {
              label: "Components",
              to: "docs/components/overview"
            },
            {
              label: "VHDP Overview",
              to: "docs/getstarted/vhdp"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/vhdp"
            },
            {
              label: "Project chat",
              href:
                "https://discord.gg/NCN9VAh"
            },
            {
              label: "GitHub",
              href: "https://github.com/search?utf8=%E2%9C%93&q=vhdplus"
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UC7qiOvlaBSiWyAb7R1xTaEw"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/vhdplus"
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/vhdplus/"
            }
          ]
        },
        {
          title: "Legal",
          items: [   
            {
              label: "Contact",
              to: "docs/contact"
            },        
            {
              label: "Privacy Policy",
              to: "docs/privacy"
            }
          ]
        }
      ],
      logo: {
        alt: "VHDPlus Logo",
        src: "img/footer-logo.webp",
        href: "https://vhdplus.com"
      },
      copyright: `Copyright © ${new Date().getFullYear()} Protop Solutions UG`
    },
    navbar: {
      title: "VHDPlus",
      logo: {
        alt: "VHDPlus Logo",
        src: "img/vhdp.svg"
      },
      hideOnScroll: false,
      items: [
        { 
          label: "Guides", 
          position: "left",
          to: "/docs/getstarted",
          items: 
          [
            {
              label: "Software Setup",
              to: "/docs/getstarted"
            },
            {
              label: "Hello World",
              to: "/docs/getstarted/helloworld"
            },
            {
              label: "Simulation",
              to: "/docs/getstarted/ghdl"
            },
            {
              label: "VHDP Overview",
              to: "docs/getstarted/vhdp"
            },
          ],
        },
        { 
          label: "Components", 
          position: "left",
          to: "docs/components/overview",
          items: 
          [
            {
              label: "Overview",
              to: "docs/components/overview"
            },
            {
              label: "Max10",
              to: "/docs/components/vhdpcore_max10",
            },
            {
              label: "Max1000",
              to: "/docs/components/max1000",
            },
            {
              label: "Cyc1000",
              to: "/docs/components/cyc1000",
            },
            {
              label: "Extensions",
              to: "/docs/components/overview#vhdplus-camera-extension"
            }
          ],
        },
        { 
          label: "Community", 
          position: "left",
          to: "docs/community/overview",
          items: 
          [
            {
              label: "Projects",
              to: "docs/community/overview#example-projects-with-tutorial",
            },   
            {
              label: "Discord",
              to: "https://github.com/search?utf8=%E2%9C%93&q=vhdplus"
            },
            {
              label: "Youtube",
              to: "https://www.youtube.com/channel/UC7qiOvlaBSiWyAb7R1xTaEw",
            },      
          ],
        },
        { to: "blog", label: "Blog", position: "left" },
        { to: "https://shop.vhdplus.com", label: "Shop", position: "left" },
        { to: "docs/contact", label: "Contact", position: "right" },
        {
          href: 'https://www.youtube.com/channel/UC7qiOvlaBSiWyAb7R1xTaEw',
          position: 'right',
          className: 'youtubeLogo header-youtube-link',
          'aria-label': 'Youtube Channel',
        },
      ]
    },
    image: "img/ogimage.png",
    // Equivalent to `docsSideNavCollapsible`
    sidebarCollapsible: true,
    hideableSidebar: false,
    // ...
    algolia: {
      apiKey: "7b0a00c4049dd8b10c7a97d5f74d9c4e",
      indexName: "vhdplus",
      algoliaOptions: {}
    }
  }
};

module.exports = siteConfig;
