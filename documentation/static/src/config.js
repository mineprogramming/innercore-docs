window.$docsify = {
  name: 'InnerCore v2.1 Docs',
  repo: 'mineprogramming/innercore-docs',
  loadSidebar: 'config/_sidebar.md',
  loadNavbar: 'config/_navbar.md',
  subMaxLevel: 4,
  relativePath: true,
  // autoHeader: true,
  // routerMode: 'history',
  nameLink: {
    '/ru/': '#/ru/',
    '/en/': '#/en/',
    '/': '#/'
  },
  alias: {
    '.*?': 'https://raw.githubusercontent.com/mineprogramming/innercore-docs/master/',
    '/ru/.*?config/_navbar.md':
      'https://raw.githubusercontent.com/mineprogramming/innercore-docs/gh-pages/ru/config/_navbar.md',
    '/ru/.*?config/_sidebar.md':
      'https://raw.githubusercontent.com/mineprogramming/innercore-docs/gh-pages/ru/config/_sidebar.md',
    '/.*?config/_navbar.md':
      'https://raw.githubusercontent.com/mineprogramming/innercore-docs/gh-pages/en/config/_navbar.md',
    '/.*?config/_sidebar.md':
      'https://raw.githubusercontent.com/mineprogramming/innercore-docs/gh-pages/en/config/_sidebar.md'
    // '.*README.md': './README.md',
    // '/': '#/en/',
    // '.*/en/(_navbar)|(.)': 'https://raw.githubusercontent.com/mineprogramming/innercore-docs/gh-pages/$2',
    // '.*/ru/(_sidebar)|(.)': 'https://raw.githubusercontent.com/mineprogramming/innercore-docs/gh-pages/$2'
  },
  themeable: {
    readyTransition: true, // default
    responsiveTables: true // default
  },
  copyCode: {
    //https://github.com/jperasmus/docsify-copy-code
    buttonText: {
      '/zh-cn/': '点击复制',
      '/ru/': 'Скопировать в буфер обмена',
      '/de-de/': 'Klicken Sie zum Kopieren',
      '/es/': 'Haga clic para copiar',
      '/': 'Copy to clipboard'
    },
    errorText: {
      '/zh-cn/': '错误',
      '/ru/': 'ошибка',
      '/': 'Error'
    },
    successText: {
      '/zh-cn/': '复制',
      '/ru/': 'Скопировано',
      '/de-de/': 'Kopiert',
      '/es/': 'Copiado',
      '/': 'Copied'
    }
  },
  tabs: {
    // https://jhildenbiddle.github.io/docsify-tabs/#/
    persist: true, // default
    sync: true, // default
    theme: 'classic', // default
    tabComments: true, // default
    tabHeadings: true // default
  },
  timeUpdater: {
    text: '>Last Modify: {docsify-updated}',
    formatUpdated: '{YYYY}/{MM}/{DD}'
  }
};
