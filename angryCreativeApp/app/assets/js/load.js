import { body, query, fragment, attribute } from './base.js'
import { loadContent } from './content.js'

const loadTemplate = async (...templates) => {
  const html = []

  for (const template of templates) {
    const petition     = await fetch(`assets/templates/${template}.html`)
    const textTemplate = await petition.text()
    html.push(textTemplate)
  }

  return html
}

const innerTemplate = (element, templates) => {

  for (const template of templates) {
    element.innerHTML += template
  }

  return element
}

const loadLink = (...templates) => {
  const links = []

  for (const template of templates) {
    const link = attribute(
                  true,
                  'link',
                  { key: 'rel',  value: 'stylesheet' },
                  { key: 'href', value: `assets/css/${template}.css`}
                 )

    links.push(link)
  }

  return links
}

const renderLink = () => {
  const head  = query('head')
  const links = loadLink(
                          'normalize',
                          'all.min',
                          'font',
                          'base',
                          'header',
                          'main',
                          'content',
                          'learn'
                        )
  fragment.append(...links)
  head.append(fragment)
}

const renderTemplate = async () => {
  const sectionContent = attribute(true, 'section', { key: 'class', value: 'content' })
  const templates = await loadTemplate('header', 'main', 'learn', 'content')
  innerTemplate(body, templates)
  body.append(sectionContent)
  loadContent()
}

const render = () => {
  renderLink()
  renderTemplate()
}

export { render }
