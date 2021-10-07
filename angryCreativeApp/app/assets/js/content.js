import { fragment, query } from './base.js'

const loadContent = () => {

  const template = query('#content').content
  const content = query('.content')

  for (let i = 0; i < 15; i++) {
    content.append(template.cloneNode(true))
  }

  clickContent()
}

const clickContent = () => {

  query('.content').addEventListener('click', (e) => {
    if (e.target.classList.contains('button')) {
      const element = e.target.parentNode.nextElementSibling
      const icon = query('.chevron', e.target.parentNode)
      element.classList.toggle('content__separator--show')
      icon.classList.toggle('chevron-up')
    }
  })
}

export { loadContent }
