'use strict'

const header = document.querySelector('.header')
const navLinks = document.querySelectorAll('.nav-link')

function onScroll () {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 2) {
      header.classList.add('scrolled')
      if (navLinks) {
        navLinks.forEach(link => {
          link.classList.add('nav-on-scroll')
        })
      }
    } else {
      header.classList.remove('scrolled')
      if (navLinks) {
        navLinks.forEach(link => {
          link.classList.remove('nav-on-scroll')
        })
      }
    }
    // setTimeout(() => {
    //   header.style.transform = 'translateY(-6rem)'
    // }, 1000 * 3)
  })
}

onScroll()
