import { ThemeManager } from './theme'
import { LanguageManager } from './lang'

export interface IApp {
  name: string
  author: {
    name: string
    link: string
  }
}

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: 'Pytalent',
    author: {
      name: 'dunghgt',
      link: 'https://github.com/dunghgt',
    },
  }
  useState('app', () => app)

  // use theme manager
  const themeManager = ThemeManager()

  // use language manager
  const languageManager = LanguageManager()

  return {
    app,
    themeManager,
    languageManager,
  }
}
