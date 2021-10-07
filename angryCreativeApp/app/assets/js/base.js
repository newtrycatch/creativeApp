const fragment = document.createDocumentFragment()

const query = (selector, node = document) => node.querySelector(selector)

const attribute = (create, node, ...attributes) => {

  const element = create
                    ? document.createElement(node)
                    : document.querySelector(node)

  for (const { key, value } of attributes) {
    element.setAttribute(key, value)
  }

  return element
}

const body = attribute(false, 'body', { key: 'class', value: 'body' })

export { body, query, fragment, attribute }
