require("dotenv").config()

const fastify = require('fastify')({
    logger: true
  })
  // Declare a route
  fastify.post('/', (request, reply) => {
    request.log.info(JSON.stringify(request.body))
    reply.send({ hello: JSON.stringify(request.body) })
  })
  
  // Run the server!
  fastify.listen(3000,"0.0.0.0",(err, address) => {
    if (err) throw err
    fastify.log.info(`server listening on ${address}`)
  })