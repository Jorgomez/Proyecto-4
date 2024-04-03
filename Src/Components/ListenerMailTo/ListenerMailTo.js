export const mailTo = () => {
  document.addEventListener('DOMContentLoaded', () => {
    document
      .querySelector('#email')
      .addEventListener('click', function (event) {
        event.preventDefault()
        window.open(
          'mailto:Jorgomez@protonmail.com?subject=Asunto del correo&body=Dear Jorge'
        )
      })

    document
      .querySelector('.email')
      .addEventListener('click', function (event) {
        event.preventDefault()
        window.open(
          'mailto:Jorgomez@protonmail.com?subject=Asunto del correo&body=Dear Jorge'
        )
      })
    document
      .querySelector('.smallEmailFooter')
      .addEventListener('click', function (event) {
        event.preventDefault()
        window.open(
          'mailto:Jorgomez@protonmail.com?subject=Asunto del correo&body=Dear Jorge'
        )
      })
  })
}
