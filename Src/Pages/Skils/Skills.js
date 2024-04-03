import dataAssets from '../../Data/DataAssets/DataAssets'
import { addNewClassestoHeader } from '../../Components/NewClassesHeader/NewClassHeader'
import './skills.css'

const skillsTemplate = () => {
  return `
  
  <h1>SKILLS</h1>
  <section class="" id="UsingNowSection">
  <h3>USING NOW:</h3>
  <ul class="">
  <li><img src=${dataAssets.iconHTML}><p>HTML5</p></li>
  <li><img src=${dataAssets.iconCSS}><p></p>CSS3</li>
  <li><img src=${dataAssets.iconJS}><p>JAVASCRIPT</p></li>
  <li><img src=${dataAssets.iconGit3}><p>GIT</p></li>
  <li><img src=${dataAssets.iconFigma}><p>FIGMA</p></li>
  </ul>
         </section >
  <section class="" id="learningSection">
         <h3>LEARNING:</h3>
         <ul class="">
         <li><img src=${dataAssets.iconReact}><p>REACT</p></li>
         <li><img src=${dataAssets.iconNode}><p>NODE</p></li>
         <li><img src=${dataAssets.iconBootstrap}><p>MONGO</p></li>
         <li><img src=${dataAssets.iconTS}><p>TYPESCRIPT</p></li>
         
         </ul>
</section >
<section class="" id="othersSection">
<h3>OTHER SKILLS :</h3>
<ul class="">
<li><img src=${dataAssets.iconEnglish}><p>ENGLISH intermedio</p></li>
<li><img src=${dataAssets.iconSpanish}><p>ESPAÑOL nativo</p></li>
</ul>
</section >`
}

export const printskillsTemplate = () => {
  main.innerHTML = ''
  const sectionSkills = document.createElement('section')
  sectionSkills.className = 'flexContainer'
  sectionSkills.id = 'skillsSection'
  sectionSkills.innerHTML = skillsTemplate()
  main.append(sectionSkills)
  addNewClassestoHeader()
}
