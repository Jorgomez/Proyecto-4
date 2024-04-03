import dataAssets from '../../Data/DataAssets/DataAssets'
import { printAboutMeTemplate } from '../../Pages/AboutMe/AboutMe'
import { hideMenuBar, showMenuBar } from '../MenuBar/MenuBar'
import { themeSwitcher } from '../Themeswitcher/Themeswitcher'
import { listenerPrintTemplates } from '../ListenerPrintTemplates/listenerPrintTemplates'
import './Header.css'
import { printskillsTemplate } from '../../Pages/Skils/Skills'
import { printProyectsTemplate } from '../../Pages/Proyects/Proyects'
import { printContactMeTemplate } from '../../Pages/ContactMe/ContactMe'

import { backToHero } from '../ListenerBacktoMain/ListenerBackToMain'
import { backToFirstHeader } from '../BackToFirstHeader/BackToFirstHeader'

const headerTemplate = () => {
  return ` <div id="boxLogo-Button" class="flexContainer" > <img
    src="${dataAssets.logo}"
    alt="Logo-image"
  class="logo"
  /> 
  <img
    src="${dataAssets.logo2}"
    alt="Logo-image"
  class="logoMovile"
  /> 
  
  <div class="boxSwitcher">
  <button id="switcherButton"></button></div> </div>

<nav id="mainNav" class="flexContainer" >
<ul class="menuBar " >
<li id='aboutMeButton'><a>About me</a></li>
<li id='skillsButton'><a>Skills</a></li>
<li id='proyectsButton'><a>PortFolio</a></li>
<li><button class="contacMe" id='contactMeButton'>Contact me</button>
</li>
</ul>
<div class="boxSmallMenu" class="flexContainer" > <img
    src="${dataAssets.smallMenubar}"
    alt="menu-image"
  class="smallMenu"
  /> </div>
  
  <div class="boxCloseMenu" class="flexContainer" > <img
    src="${dataAssets.crossCloseMenubar}"
    alt="menu-image"
  class="closeMenu"
  /> </div>

  </nav>
    `
}

export const printHeaderTemplate = () => {
  const header = document.createElement('header')
  header.className = 'flexContainer'
  header.id = 'headerMovile'
  header.innerHTML = headerTemplate()
  document.body.append(header)
  themeSwitcher()
  showMenuBar()
  hideMenuBar()
  listenerPrintTemplates('#aboutMeButton', printAboutMeTemplate)
  listenerPrintTemplates('#skillsButton', printskillsTemplate)
  listenerPrintTemplates('#proyectsButton', printProyectsTemplate)
  listenerPrintTemplates('#contactMeButton', printContactMeTemplate)
  backToHero()
  backToFirstHeader()
}
