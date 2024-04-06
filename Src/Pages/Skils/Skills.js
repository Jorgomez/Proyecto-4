import { addNewClassestoHeader } from '../../Components/NewClassesHeader/NewClassHeader'
import './skills.css'
import data from '../../Data/DataCreator/Data'

const skillsTemplate = (section) => {
  section.innerHTML += `<h1>SKILLS</h1>`
  for (const array in data.skills) {
    const sectionSkillType = document.createElement('section')
    sectionSkillType.id = array + 'Section'
    const titleSectionSkill = document.createElement('h3')
    titleSectionSkill.textContent = array
    const ulBoxIcon = document.createElement('ul')

    for (const element of data.skills[array]) {
      ulBoxIcon.innerHTML += ` <li class="boxIcons"><img src=${element.icon}><p>${element.skill}</p></li>
    `
    }

    sectionSkillType.append(titleSectionSkill, ulBoxIcon)
    section.append(sectionSkillType)
  }
}

export const printskillsTemplate = () => {
  main.innerHTML = ''
  const sectionSkills = document.createElement('section')
  sectionSkills.className = 'flexContainer'
  sectionSkills.id = 'skillsSection'
  skillsTemplate(sectionSkills)
  main.append(sectionSkills)
  addNewClassestoHeader()
}
