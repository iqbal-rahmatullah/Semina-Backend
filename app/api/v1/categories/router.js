const express = require('express')
const routes = express()
const { create, index, find, destroy, update } = require('./controller')

routes.get('/categories', index)
routes.post('/categories', create)
routes.get('/categories/:id', find)
routes.put('/categories/:id', update)
routes.delete('/categories/:id', destroy)

module.exports = routes