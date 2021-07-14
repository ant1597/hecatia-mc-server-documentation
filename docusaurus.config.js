const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Hecatia Minecraft server documentation",
  tagline: ">_- Kira🌟",
  url: "https://docs.hecatia.moe/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "NibiruResearchCenter",
  projectName: "server-documentation", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "赫卡Tia Minecraft 服务器文档",
      logo: {
        alt: "Logo",
        src: "img/hecaspy.png",
      },
      items: [
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/NibiruResearchCenter/server-documentation",
          label: "GitHub repo",
          position: "right",
        },
        {
          href: "https://github.com/NibiruResearchCenter",
          label: "GitHub organization",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Hecatia | 赫卡Tia",
          items: [
            {
              label: "Bilibili",
              href: "https://space.bilibili.com/693",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/Hecatiaz",
            },
            {
              label: "Twitch",
              href: "https://www.twitch.tv/hecatiaz",
            },
            {
              label: "Patreon",
              href: "https://www.patreon.com/Hecatia",
            },
            {
              label: "Pixiv",
              href: "https://www.pixiv.net/users/66875796",
            },
            {
              label: "Weibo",
              href: "https://weibo.com/u/7363797389",
            },
          ],
        },
        {
          title: "Community | 社区",
          items: [
            {
              label: "Discord (English)",
              href: "https://discord.gg/hecatia",
            },
            {
              label: "Kaiheila (中文)",
              href: "https://kaihei.co/w0wd4H",
            },
          ],
        },
        {
          title: "Nibiru Research Center | 尼比鲁研究中心",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/NibiruResearchCenter",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nibiru Research Center. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  i18n: {
    defaultLocale: "zh",
    locales: ["en", "zh"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
