const mock = require('./mock')

const basePath = '/adverts'

const all = {
  method: 'GET',
  path: `${basePath}`,
  handler: (req, reply) => reply(mock.adverts)
}

module.exports = {
  all
}
