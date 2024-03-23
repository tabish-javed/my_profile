'use strict'

const header = document.querySelector('.header')
const navLinks = document.querySelectorAll('.nav-link')
const companies = document.querySelectorAll('.company-logo')
const underlines = document.querySelectorAll('.underline')


function onScrollNavBar () {
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


function experienceAccordion () {
  const companyLogos = document.querySelector('.company-logos')
  companyLogos.addEventListener('click', (e) => {
    const companies = document.querySelectorAll('.company-logo')

    if (e.target.classList.contains('company-logo')) {
      companies.forEach(company => company.closest('div').classList.remove('company-active'))
      e.target.closest('div').classList.add('company-active')
    }
  })
}

onScrollNavBar()
experienceAccordion()
