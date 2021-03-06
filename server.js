const fastify = require('fastify')({ logger: { prettyPrint: true }})

fastify
  .register(require('./../fastify-react'), { dev: true })
  .after(() => {
    fastify.next('/index')
  })

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()