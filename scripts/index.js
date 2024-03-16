'use strict'

function onScroll () {
  const header = document.querySelector('header')
  window.addEventListener('scroll', () => {
    if (window.scrollY < 2) {
      header.classList.remove('hidden')
    }
    window.scrollY >= 2 ? header.classList.add('scrolled') : header.classList.remove('scrolled')
    // setTimeout(() => {
    //   header.classList.add('hidden')
    // }, 1_000 * 2)
  })
}


onScroll()
