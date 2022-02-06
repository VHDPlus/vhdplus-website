const siteConfig = {
  title: "The FPGA Programming Revolution",
  tagline: "Software and Hardware that makes FPGA Programming easy",
  url: "https://vhdplus.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  projectName: "vhdp",
  organizationName: "VHDPlus",
  trailingSlash: "true",

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
          editUrl: 'https://github.com/VHDPlus/vhdplus-website/edit/master/'
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
        blog: {
          editUrl: ({ locale, blogDirPath, blogPath }) => {
            return `https://github.com/VHDPlus/vhdplus-website/edit/master/${blogDirPath}/${blogPath}`;
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
            },
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/MAX1000plus/"
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
        src: "img/ProtopLogo.png",
        href: "https://protop-solutions.com"
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
                to: "/docs/guides/helloworld"
              },
              {
                label: "Simulation",
                to: "/docs/guides/helloworld_simulate"
              },
              {
                label: "VHDP Overview",
                to: "/docs/getstarted/vhdp"
              },
            ],
        },
        {
          label: "Components",
          position: "left",
          to: "/docs/components/overview",
          items:
            [
              {
                label: "Overview",
                to: "/docs/components/overview"
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
          to: "/docs/community/overview",
          items:
            [
              {
                label: "Projects",
                to: "/docs/community/overview#example-projects-with-tutorial",
              },
              {
                label: "Discord",
                href: "https://discord.gg/NCN9VAh"
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UC7qiOvlaBSiWyAb7R1xTaEw",
              },
            ],
        },
        { to: "blog", label: "Blog", position: "left" },
        { href: "https://shop.vhdplus.com", label: "Shop", position: "left" },
        { to: "/docs/contact", label: "Contact", position: "right" },
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
    hideableSidebar: false,
    // ...
    algolia: {
      appId: '3KHT2UBW5O',
      apiKey: '8cd7dd9def5767ab344acdfa2d4f68e4',
      indexName: 'vhdplus',
      contextualSearch: false,
    }
  },
  
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/vhdp.svg',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(0, 170, 255)',
          },
        ],
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1218, // max resized image's size. 
        min: 640, // min resized image's size. if original is lower, use that size. 
        steps: 2, // the max number of images generated between min and max (inclusive) 
      },
    ]
  ],
};

module.exports = siteConfig;