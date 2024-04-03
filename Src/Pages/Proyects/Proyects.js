import { addNewClassestoHeader } from '../../Components/NewClassesHeader/NewClassHeader'
import './Proyects.css'
import data from '../../Data/DataCreator/Data'

const proyectsTemplate = (section) => {
  section.innerHTML += `<h1> Take a look to my learning proyects :</h1>`
  const boxProyects = document.createElement('section')
  boxProyects.className = 'boxProyects'

  for (let i = 0; i < data.projects.length; i++) {
    boxProyects.innerHTML += ` <div class="cardProyects">

  <div class="boxImg">
  <a href="${data.projects[i].linkWeb}"  target="_blank"> <img class="landingImage" src="${data.projects[i].preview}"> </a></div>

   <div class="boxInformation">
 <h3 class="title">${data.projects[i].title}</h3>
   <p class="description">${data.projects[i].description}</p>

   <a href="${data.projects[i].link}"  target="_blank">  <button class="repositoryButton" style="">  Accede al repositorio</button></a>
   </div>
   </div>

 `
  }

  section.append(boxProyects)
}

export const printProyectsTemplate = () => {
  main.innerHTML = ''
  const sectionProyects = document.createElement('section')
  sectionProyects.className = 'flexContainer'
  sectionProyects.id = 'proyectsSection'
  proyectsTemplate(sectionProyects)
  main.append(sectionProyects)
  addNewClassestoHeader()
}

// return ` <div class="cardProyects">

//   <div class="boxImg">
//   <a href="${data.projects[2].linkWeb}"  target="_blank"> <img class="landingImage" src="${dataAssets.previewProyecto3}"> </a></div>

//    <div class="boxInformation">
//  <h3 class="title">${data.projects[1].title}</h3>
//    <p class="description">${data.projects[1].description}</p>
//    <p class="sources"> Sources: ${data.projects[1].sources}</p>
//    <a href="${data.projects[1].link}"  target="_blank">  <button class="repositoryButton" style="">  Accede al repositorio</button></a>
//    </div>
//    </div>

//  `
