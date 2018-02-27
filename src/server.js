import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './client/App'
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
    .send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
        </head>
        <body style="margin:0">
          <div id="app">${body}</div>
        </body>
      </html>
    `)
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