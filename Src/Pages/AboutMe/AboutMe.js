import dataAssets from '../../Data/DataAssets/DataAssets'
import data from '../../Data/DataCreator/Data'
import { addNewClassestoHeader } from '../../Components/NewClassesHeader/NewClassHeader'
import './AboutMe.css'

const aboutMeTemplate = (section) => {
  section.innerHTML += `<section class="" id="sectionAboutMe">
  <article id="boxAboutMe">
           <h1>ABOUT ME</h1>
           <p>${data.aboutMe}</p>
</article>

 <img src=${dataAssets.separator} alt="separator img">
  </section >`

  const sectionServices = document.createElement('section')
  sectionServices.className = 'sectionServices'
  sectionServices.innerHTML += `<h2>SERVICES</h2>`

  for (let i = 0; i < data.services.length; i++) {
    sectionServices.innerHTML += ` <article class="flexContainer services" id="boxDesign">
  <h3>${data.services[i].service}</h3>
  <p>${data.services[i].description}</p>
</article>`
  }

  sectionServices.innerHTML += ` <img src=${dataAssets.separator} alt="separator img">`

  section.append(sectionServices)
}

export const printAboutMeTemplate = () => {
  main.innerHTML = ''
  const sectionAboutMe = document.createElement('section')
  sectionAboutMe.className = 'flexContainer'
  sectionAboutMe.id = 'aboutMeSection'
  aboutMeTemplate(sectionAboutMe)
  main.append(sectionAboutMe)
  addNewClassestoHeader()
}
