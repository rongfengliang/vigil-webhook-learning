require("dotenv").config()
const fastify = require('fastify')({ logger: true })
const cacheManager = require('cache-manager')
// for cache some access token
const memoryCache = cacheManager.caching({
    store: "memory"
})
fastify.register(require('fastify-swagger'), {
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'webhok alert',
      description: 'webhok alert',
      version: '0.1.0'
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'webhook', description: 'webhok alert' }
    ]
  },
  exposeRoute: true
})
// Declare a route
fastify.post('/', {
  schema: {
    description: 'webhook for alert',
    tags: ['webhook'],
    body: {
      type: 'object',
      properties: {
        type: { type: 'string' },
        status: { type: 'string' },
        time: { type: 'string' },
        replicas: {
          type: "array", items: {
            type: "string"
          }
        },
        page: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            url: { type: 'string' },
          }
        }
      }
    },
    response: {
      201: {
        description: 'Successful response',
        type: 'object',
        properties: {
          status: { type: 'string' }
        }
      }
    }
  }
}, (request, reply) => {
  request.log.info(JSON.stringify(request.body))
  reply.send({ status: JSON.stringify(request.body) })
})

fastify.ready(err => {
  if (err) throw err
  fastify.swagger()
})
// Run the server!
fastify.listen(3000, "0.0.0.0", (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})