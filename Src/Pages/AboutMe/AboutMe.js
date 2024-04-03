import dataAssets from '../../Data/DataAssets/DataAssets'
import data from '../../Data/DataCreator/Data'
import { addNewClassestoHeader } from '../../Components/NewClassesHeader/NewClassHeader'
import './AboutMe.css'

const aboutMeTemplate = () => {
  return `<section class="" id="sectionAboutMe">
    <article id="boxAboutMe">
             <h1>ABOUT ME</h1>
             <p>${data.aboutMe}</p>
  </article>

   <img src=${dataAssets.separator} alt="separator img">
    </section >

    <section id="sectionServices">
    <h2>SERVICES</h2>

    <div>
    <article class="flexContainer services" id="boxDesign">
             <h3>${data.services[0].service}</h3>
             <p>${data.services[0].description}</p>
  </article>

  <article class="flexContainer services" id="boxDevelopment">
  <h3>${data.services[1].service}</h3>
  <p>${data.services[1].description}</p>
</article>

<article class="flexContainer services" id="boxMaintence">
<h3>${data.services[2].service}</h3>
<p>${data.services[2].description}</p>
</article>
</div>
   <img src=${dataAssets.separator} alt="separator img">

</section >`
}

export const printAboutMeTemplate = () => {
  main.innerHTML = ''
  const sectionAboutMe = document.createElement('section')
  sectionAboutMe.className = 'flexContainer'
  sectionAboutMe.id = 'aboutMeSection'
  sectionAboutMe.innerHTML = aboutMeTemplate()
  main.append(sectionAboutMe)
  addNewClassestoHeader()
}
