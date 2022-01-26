module.exports = {
    head: [
        ["link", {rel: "icon", type: "image/png", size: "16x16", href: "/favicon-16x16.png"}],
        ["link", {rel: "manifest", href: "/site.webmanifest"}],
        ["meta", {name: "viewport", content: "width=device-width,initial-scale=1.0"}],
        ["meta", {name: "apple-mobile-web-app-title", content: "GameAI.win"}],
        ["meta", {name: "application-name", content: "GameAI.win"}],
        ["meta", {name: "msapplication-TileColor", content: "#da532c"}],
        ["meta", {name: "msapplication-TileColor", content: "#da532c"}]
    ],
    plugins: [
        'vuepress-plugin-mermaidjs',
        '@vuepress/back-to-top',
    ],
    locales: {
        '/zh_TW/': {
            lang: 'zh-TW',
            title: 'GameAI.win',
            description: 'GameAI.win 是一个工具集合，它可以帮助你更加轻松的游戏',
        },
        '/': {
            lang: 'en-US',
            title: 'GameAI.win',
            description: 'GameAI.win V is a collection of tools what will help you play game more enjoyably',
        }
    },
    themeConfig: {
        repo: 'gameai-win',
        docsRepo: 'gameai-win/gameai-win.github.io.git',
        logo: '/home.png',
        algolia: {
            apiKey: '1c152ce7991c1da9adc5413104752c5a',
            indexName: 'gameaiwin'
        },
        smoothScroll: true,
        docsDir: 'docs',
        editLinks: true,
        locales: {
            '/zh_TW/': {
                selectText: 'Languages',
                label: '简体中文',
                ariaLabel: 'Select language',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: [
                    {text: '快速开始', link: '/zh_TW/guide/start',},
                    {text: '脚本编写', link: '/zh_TW/developer/base',},
                ],
                sidebar: {
                    '/guide/': [
                        {
                            title: '快速开始',
                            collapsable: false,
                            children: [
                                'install',
                                'start',
                            ],
                        },
                        {
                            title:'开发手册',
                            collapsable:false,
                            children: [
                                'base',
                                'xbox',
                                'playstation',
                            ]
                        },
                        {
                            title: '更多',
                            collapsable: false,
                            children: [
                                'faq',
                                'help',
                            ],
                        },
                    ],
                    '/zh_TW/': 'auto',
                },
            },
            '/': {
                label: 'English',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: [
                    {text: 'Quick Start', link: '/en_US/guide/start',},
                    {text: 'Script', link: '/en_US/developer/base',},
                ], 
                sidebar: {
                    '/guide/': [
                        {
                            title: 'Quick Start',
                            collapsable: false,
                            children: [
                                'install',
                                'start',
                            ],
                        },
                        {
                            title:'Development Manual',
                            collapsable: false,
                            children: [
                                'base',
                                'xbox',
                                'playstation',
                            ]
                        },
                        {
                            title: 'more',
                            collapsable: false,
                            children: [
                                'faq',
                                'help',
                            ],
                        }, 
                    ],
                    '/': 'auto',
                },
            },
        },
    },
}
