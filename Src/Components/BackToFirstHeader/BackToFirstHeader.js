export const backToFirstHeader = () => {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.logoMovile').addEventListener('click', () => {
      document.querySelector('body').classList.remove('boxNavAlt')
      document.querySelector('header').classList.remove('header2')
      document.querySelector('#boxLogo-Button').classList.remove('newClass')
      document.querySelector('.boxSwitcher').classList.remove('displayNone')
      document.querySelector('.logo').classList.remove('displayNone')
      document.querySelector('.logoMovile').classList.remove('display')
      document.querySelector('footer').classList.remove('footerAlternative')
      document.querySelector('footer').classList.remove('display')
    })
  })
}
