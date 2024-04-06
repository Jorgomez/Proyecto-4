import { removethemeSwitcherClasses } from '../RemoveThemeClasses/RemoveThemeClasses'

export const listenerPrintTemplates = (button, funcion) => {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(button).addEventListener('click', () => {
      funcion()

      removethemeSwitcherClasses()
      document.querySelector('.menuBar').classList.toggle('menuBarMovile')
      document.querySelector('.boxSmallMenu').classList.toggle('smallMenuHide')
      document
        .querySelector('.boxCloseMenu')
        .classList.toggle('boxCloseMenuShow')
    })
  })
}
