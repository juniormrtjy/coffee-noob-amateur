const nav = document.querySelector('#header nav')
const troca = document.querySelectorAll('#header .trocando')
const link = document.querySelectorAll('#header nav ul li a')

for (const trc of troca) {
  trc.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
for (const links of link) {
  links.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
