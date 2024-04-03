import { printFooterTemplate } from './Src/Components/Footer/Footer'
import { printHeaderTemplate } from './Src/Components/Header/Header'
import { printHeroTemplate } from './Src/Components/Hero/Hero'

import './style.css'
printHeaderTemplate()

// body.className = 'boxNavAlt'
const main = document.createElement('main')
main.className = 'flexContainer'
main.id = 'main'
printHeroTemplate(main)
document.body.append(main)

printFooterTemplate()

// printHeaderTemplate()
// // body.className = 'boxNavAlt'
// const main = document.createElement('main')
// main.className = 'flexContainer'
// main.id = 'main'
// document.body.append(main)
// printHeroTemplate(main)

// printFooterTemplate()

// export const printMainWeb = () => {
//   // body.className = 'boxNavAlt'
//   const main = document.createElement('main')
//   main.className = 'flexContainer'
//   main.id = 'main'
//   printHeroTemplate(main)
//   document.body.append(main)
// }
