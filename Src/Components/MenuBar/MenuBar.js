export const showMenuBar = () => {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.smallMenu').addEventListener('click', () => {
      document.querySelector('.menuBar').classList.toggle('menuBarMovile')
      document.querySelector('.boxSmallMenu').classList.toggle('smallMenuHide')
      document
        .querySelector('.boxCloseMenu')
        .classList.toggle('boxCloseMenuShow')
    })
  })
}

export const hideMenuBar = () => {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.closeMenu').addEventListener('click', () => {
      document.querySelector('.menuBar').classList.toggle('menuBarMovile')
      document.querySelector('.boxSmallMenu').classList.toggle('smallMenuHide')
      document
        .querySelector('.boxCloseMenu')
        .classList.toggle('boxCloseMenuShow')
    })
  })
}
