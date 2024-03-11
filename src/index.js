import http from 'node:http'
import { index, getUser, importUser, exportUser } from './library.js'
import { PORT } from './config.js'

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  if (method === 'GET') {
    switch (url) {
      case '/':
        // manejo de ruta
        index(req, res)
        break
      case '/api/usuarios':
        getUser(req, res)
        break
      case '/api/usuarios/export':
        exportUser(req, res)
        break
      case '/api/usuarios/import':
        importUser(req, res)
        break
    }
  }
})

server.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))
