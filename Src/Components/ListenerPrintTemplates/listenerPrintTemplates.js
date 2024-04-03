import { removethemeSwitcherClasses } from '../RemoveThemeClasses/RemoveThemeClasses'

export const listenerPrintTemplates = (button, funcion) => {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(button).addEventListener('click', () => {
      funcion()
      removethemeSwitcherClasses()
    })
  })
}
