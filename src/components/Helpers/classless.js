const classless = () => {
  const elements = document.querySelectorAll('div:not([class]):not([id])')
  Array.from(elements, item => item.classList.add('classless'))
}

// react router creates empty div that conflicts with flex styles
// this func equired to retroactively add styles
// required so I can add flex styles retroactively in css
// will add 'classless' to ALL empty divs in app

export default classless
