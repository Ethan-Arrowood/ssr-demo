import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './client/App'
import Html from './client/Html'
import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request, reply) => {
  const body = renderToString(<App />)
  const title = 'SSR with Fastify'

  reply
    .code(200)
    .header('Content-Type', 'text/html')
    .send(
      Html({
        body, 
        title
      })
    )
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