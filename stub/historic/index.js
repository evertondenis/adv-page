const mock = require('./mock')

const basePath = '/historic'

const all = {
  method: 'GET',
  path: `${basePath}`,
  handler: (req, reply) => reply(mock.historic)
}

module.exports = {
  all
}
