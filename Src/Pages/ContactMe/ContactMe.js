import { addNewClassestoHeader } from '../../Components/NewClassesHeader/NewClassHeader'
import dataAssets from '../../Data/DataAssets/DataAssets'
import './ContactMe.css'

const contactMeTemplate = () => {
  return `<article class='boxTitle'>
<h1>CONTACT </h1> 
<p>Let's put you on the map of the digital world with a web application, made with the latest technologies available.</p>

<img src=${dataAssets.separator} alt="separator img">
</article
<div class='boxForm'>
<form class='boxForm' action="/enviar_datos" method="post">
    
        <input type="text" id="nombre" name="name" placeholder="Enter your name*" required>
        <input type="email" id="correo" name="correo" placeholder="Enter your email*" required>
   
        <input type="tel" id="telefono" name="telefono" placeholder="Phone number" required>
        <textarea id="comentario" name="comentario" placeholder="Your message*"></textarea>
   
    <button type="submit">SUBMIT</button>
</form>
</div>
  `
}

export const printContactMeTemplate = () => {
  main.innerHTML = ''
  const sectionContactMe = document.createElement('section')
  sectionContactMe.className = 'flexContainer'
  sectionContactMe.id = 'contaMeSection'
  sectionContactMe.innerHTML = contactMeTemplate()
  main.append(sectionContactMe)
  addNewClassestoHeader()
}
