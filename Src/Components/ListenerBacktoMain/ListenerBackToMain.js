import { printHeroTemplate } from '../Hero/Hero'

export const backToHero = () => {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.logoMovile').addEventListener('click', () => {
      main.innerHTML = ''
      printHeroTemplate(main)
    })

    document.querySelector('.logo').addEventListener('click', () => {
      main.innerHTML = ''
      printHeroTemplate(main)
    })
  })
}
