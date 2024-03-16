'use strict'

const header = document.querySelector('header')
const navLinks = document.querySelectorAll('.nav-link')

function onScroll () {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 2) {
      header.classList.add('scrolled')
      navLinks.forEach(link => {
        link.classList.add('nav-on-scroll')
      })
    } else {
      header.classList.remove('scrolled')
      navLinks.forEach(link => {
        link.classList.remove('nav-on-scroll')
      })
    }
    // setTimeout(() => {
    //   header.classList.add('hidden')
    // }, 1000 * 2)
  })
}

onScroll()
