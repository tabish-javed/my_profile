'use strict'

const header = document.querySelector('.header')
const navLinks = document.querySelectorAll('.nav-link')
const companies = document.querySelectorAll('.company-logo')
const companyRnRs = document.querySelectorAll('.company-rnr')
const copyright = document.querySelector(".copyright")

// Helpers
/**
 * Get index of element in NodeList
 * @param {Object} element - DOM element
 * @param {Object} NodeList - NodeList of DOM elements
 * @return {number} index of element in NodeList
 */
function getIndex (element, NodeList) {
  return Array.from(NodeList).indexOf(element)
}

/**
 * Activate Navbar on scroll
 */
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

/**
 * Activate Company Accordion
 */
function experienceAccordion () {
  const companyLogos = document.querySelector('.company-logos')
  companyLogos.addEventListener('click', (e) => {
    const companyNumber = getIndex(e.target, companies)

    if (e.target.classList.contains('company-logo')) {
      companies.forEach(company => company.closest('div').classList.remove('company-active'))
      e.target.closest('div').classList.add('company-active')
      companyRnRs.forEach(rnr => rnr.classList.add('disabled'))
      companyRnRs[companyNumber].classList.remove('disabled')
    }
  })
}

copyright.innerHTML = `&copy; <strong>${ new Date().getFullYear() }</strong> TABISH JAVED`

onScrollNavBar()
experienceAccordion()
