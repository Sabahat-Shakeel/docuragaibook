// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

require('dotenv').config();

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sabahat-Hackathon-project',
  tagline: 'A Physical AI and Humanoid Robotics textbook site with three structured chapters and an integrated RAG chatbot.',
  favicon: 'img/favicon.ico',

  customFields: {
    chatbotApiBaseUrl: "http://localhost:8000",
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://Sabahat-Shakeel.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docuragaibook/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sabahat-Shakeel', // Usually your GitHub org/user name.
  projectName: 'docuragaibook', // Usually your repo name.

  trailingSlash: true,
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
         sitemap: {
          changefreq: 'monthly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Authored by Sabahat Shakeel',
        logo: {
          alt: 'AI-Powered Textbook Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Textbook',
          },
          {
          type: 'localeDropdown',
        },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Sabahat-Shakeel/docusaurus-rag-chatbot-hackathon.git',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Textbook',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Contact / Support',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/syeda-sabahat-shakeel/',
              },
              {
                label: 'Discord',
                href: 'https://github.com/sabahat-shakeel',
              },
              
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Book',
                to: '/docs/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Sabahat-Shakeel/docuragai.git',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sabahat Shakeel. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
