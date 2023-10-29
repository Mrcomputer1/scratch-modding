// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Scratch Modding Tutorials',
    tagline: 'Tutorial for modding Scratch 3.0 and 2.0',
    //favicon: 'img/favicon.ico',
    
    // Set the production url of your site here
    url: 'https://mrcomputer1.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/scratch-modding/',
    
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    trailingSlash: false,
    
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/Mrcomputer1/scratch-modding/tree/master/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        // Replace with your project's social card
        //image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Scratch Modding Tutorials',
            /*logo: {
                alt: 'Scratch 3.0 Modding Tutorial',
                src: 'img/logo.svg',
            },*/
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Tutorial (3.0)',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorial2Sidebar',
                    position: 'left',
                    label: 'Tutorial (2.0)',
                }
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: "Community",
                    items: [
                        {
                            label: "Forum Topic",
                            href: "https://scratch.mit.edu/discuss/topic/703721/"
                        },
                        {
                            label: "Credits",
                            to: "/credits"
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/Mrcomputer1/scratch-modding"
                        }
                    ]
                },
                {
                    title: "Modding Tutorials",
                    items: [
                        {
                            label: "3.0 Tutorial",
                            to: "/tutorial/getting-started/prerequisites"
                        },
                        {
                            label: "2.0 Tutorial",
                            to: "/tutorial-2.0/getting-started/prerequisites"
                        }
                    ]
                },
                {
                    title: "Mrcomputer1",
                    items: [
                        {
                            label: "Scratch",
                            href: "https://scratch.mit.edu/users/Mrcomputer1"
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/Mrcomputer1"
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Mrcomputer1 &bullet; <a href="/scratch-modding/license">License</a>`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ["bash", "batch", "json", "markup", "yaml", "groovy", "actionscript"]
        },
    }),
};

module.exports = config;
