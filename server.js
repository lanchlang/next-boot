const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
//const dev = process.env.NODE_ENV !== 'production'
const dev=true
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/', (req, res) => {
      const page=req.query.page ? req.query.page : 1
      return app.render(req, res, '/', {page:page})
    })

    server.get('/popular', (req, res) => {
      const page=req.query.page ? req.query.page : 1
      return app.render(req, res, '/popular', {page:page})
    })
    server.get('/favorite', (req, res) => {
      const page=req.query.page ? req.query.page : 1
      return app.render(req, res, '/favorite', {page:page})
    })
    server.get('/tag/:tag', (req, res) => {
      const tag=req.params.tag
      const page=req.query.page ? req.query.page : 1
      return app.render(req, res, '/tag', {tag:tag,page:page})
    })
    server.get('/category/:id', (req, res) => {
      const id=req.params.id
      const page=req.query.page ? req.query.page : 1
      return app.render(req, res, '/category', {id:id,page:page})
    })
    server.get('/blogs/:id', (req, res) => {
      const id=req.params.id
      return app.render(req, res, '/blog', { id: id})
    })
    server.get('/users/:id', (req, res) => {
      const id=req.params.id
      const page=req.query.page ? req.query.page : 1
      return app.render(req, res, '/user', { id: id,page:page})
    })

    server.get('*', (req, res) => {
      const page=req.query.page ? req.query.page : 1
      return app.render(req, res, '/', {page:page})
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })