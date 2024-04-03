export const addNewClassestoHeader = () => {
  if (
    !document.querySelector('body').className ||
    document.querySelector('body').className === 'bgBody2'
  ) {
    document.querySelector('body').classList.add('boxNavAlt'),
      document.querySelector('header').classList.add('header2')
    document.querySelector('#boxLogo-Button').classList.add('newClass')
    document.querySelector('.boxSwitcher').classList.add('displayNone')
    document.querySelector('.logo').classList.add('displayNone')
    document.querySelector('.logoMovile').classList.add('display')
    // document.querySelector('footer').classList.add('display')
    document.querySelector('footer').classList.add('footerAlternative')
  }
}
