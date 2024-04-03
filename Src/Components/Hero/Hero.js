import dataAssets from '../../Data/DataAssets/DataAssets'
import data from '../../Data/DataCreator/Data'
import { mailTo } from '../ListenerMailTo/ListenerMailTo'

import './Hero.css'

const HeroTemplate = () => {
  return `
    <section class="flexContainer" id="sectionInfo">
    <article id="mainInfo"> <h3>Hi I'm</h3>

    <div>
    <h1>${data.fullName}</h1>
    <p>Full Stack Developer in progres</p>
    </article></div>
<ul class="flexContainer" id="ulContact"> 
<li><a href="" id="email"><img src=${dataAssets.inconEmail} alt="Email Icon"/> </a></li>
<li><a href="https://github.com/Jorgomez?tab=repositories"  target="_blank"><img src=${dataAssets.iconGit} alt="Git Icon"/></a></li>
<li><a href="https://www.linkedin.com/in/jorge-g%C3%B3mez-m%C3%A9ndezz-5a7524a1/" target="_blank"><img src=${dataAssets.iconLinkedin} alt="linkedin Icon"/></a></li></ul>

<ul class="flexContainer" id="ulContactMovileV"> 
<li><a href="" class="email"><img src=${dataAssets.icon2Email} alt="Email Icon"/> </a></li>
<li><a href="https://github.com/Jorgomez?tab=repositories" target="_blank"><img src=${dataAssets.icon2Git} alt="Git Icon"/></a></li>
<li><a href="https://www.linkedin.com/in/jorge-g%C3%B3mez-m%C3%A9ndezz-5a7524a1/" target="_blank"><img src=${dataAssets.icon2Linkedin} alt="linkedin Icon"/></a></li></ul>

    </section>
    <section class="flexContainer" id="sectionPhoto"><div class="flexContainer" id="boxPhoto">  <img src=${dataAssets.photoCreator} alt="Creator Photo"/></div>
    </section>`
}

export const printHeroTemplate = (boxHero) => {
  const sectionHero = document.createElement('section')
  sectionHero.className = 'flexContainer'
  sectionHero.id = 'heroSection'
  sectionHero.innerHTML = HeroTemplate()
  boxHero.append(sectionHero)

  mailTo()
}
