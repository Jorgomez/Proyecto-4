export const themeSwitcher = () => {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#switcherButton').addEventListener('click', () => {
      document.querySelector('.boxSwitcher').classList.toggle('boxSwitcher2')
      document.body.classList.toggle('bgBody2')
      document.querySelector('#mainNav>ul').classList.toggle('textColor2header')
      document.querySelector('.contacMe').classList.toggle('bcColor2Button')
      document.querySelector('.logo').classList.toggle('logo2mode')
      document.querySelector('#mainInfo').classList.toggle('colorTextCahnge')
    })
  })
}
