import dataAssets from '../../Data/DataAssets/DataAssets'
import './Footer.css'

export const printFooterTemplate = () => {
  document.body.innerHTML += `
<footer> 
<a class='backToTopo' href="#headerMovile"><img src=${dataAssets.iconBacktotop} alt=""/>

</a>
<ul class="flexContainer" id="ulContactFooter"> 
<li><a href=""><img src=${dataAssets.iconFacebook} alt="facebook Icon"/> </a></li>
<li><a href="https://www.linkedin.com/in/jorge-g%C3%B3mez-m%C3%A9ndezz-5a7524a1/" target="_blank"><img src=${dataAssets.iconSmallLinkedin} alt="linkedin Icon"/></a></li>
<li><a href=""><img src=${dataAssets.iconInsta} alt="insta Icon"/></a></li>
<li><a href="" class="smallEmailFooter"><img src=${dataAssets.iconSmallEmail} alt="email Icon"/></a></li></ul>
<h3>@2024 - JorGomez, Inspired by T. Gajda.</h3>  </footer>`
}
