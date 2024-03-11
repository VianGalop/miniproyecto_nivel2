// import e from 'express'
import { pool } from './db.js'
import fs from 'node:fs/promises'
import path from 'node:path'

export const index = async (req, res) => {
  try {
    const pathFile = path.resolve('./public/index.html')
    const html = await fs.readFile(pathFile, 'utf-8')

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(html)
  } catch (error) {
    console.log(error)
    const pathFile500 = path.resolve('./public/error.html')
    const htmlError = fs.readFile(pathFile500, 'utf-8')

    res.writeHead(500, { 'Content-Type': 'text/html' })
    res.end(htmlError)
  }
}

export const getUser = async (req, res) => {
  try {
    // Haciendo consulta a Base de Datos
    const result = await pool.query('SELECT * FROM usuarios')

    // Tomando solo lo valores validos
    const rows = result[0]

    // Mostrarlos en formato JSON
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(rows))
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante la consulta
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end('Not Found Data Form JSON')
  }
}

export const exportUser = async (req, res) => {
  try {
    // Haciendo consulta a la Base de Datos y extraer los datos
    const result = await pool.query('SELECT * FROM usuarios')

    // Formatear los datos y ponerlos en un arreglo
    const arrayRegistros = []
    const arrayAux = []
    result[0].forEach(dato => {
      for (const llave in dato) {
        arrayAux.push(dato[llave])
      }

      const regUnaFila = arrayAux.join(',')
      arrayRegistros.push(regUnaFila)
      arrayAux.length = 0
    })

    // Obteniendo el nombre de las columnas de la tabla.
    const arrayColum = []
    for (let i = 0; i < result[1].length; i++) {
      arrayColum.push(result[1][i].name)
    }

    // Colocar las columnas en una fila
    const cabecera = arrayColum.join(',')

    // Añadir los encabezados al arreglo
    const tamanoArray = arrayRegistros.unshift(cabecera)
    console.log(tamanoArray)
    console.log(arrayRegistros)

    // Escribir los datos en el nuevo archivo con extension csv
    fs.writeFile('usuarios.csv', arrayRegistros.join('\n'), err => {
      if (err) { console.log(err) }
    })

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>Se creo el archivo CSV</h1>')
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/html' })
    res.end('<h1>Not Found Data Export</h1>')
  }
}

export const importUser = async (req, res) => {
  try {
    // Ruta al archivo usuarios.csv
    const pathCsv = path.resolve('./usuarios.csv')

    // leer la data del archivo CSV y guardarla en un array de objetos.
    const csv = await fs.readFile(pathCsv, 'utf-8')
    const csvData = csv.split('\n')

    // Quitar cabecera del CSV
    csvData.shift()

    // Formatear el String
    for (const row of csvData) {
      const data = row.split(',')

      const correo = data[4]

      if (!validarEmail(correo)) continue

      // verificar Repetidos de correo e id
      try {
        const existeUsuario = await pool.execute('SELECT * FROM usuarios WHERE id = ? AND correo_electronico = ?', [data[0], data[4]])

        if (existeUsuario[0].length === 0) {
          const query = 'INSERT INTO usuarios (id, nombres, apellidos, direccion, correo_electronico, dni,edad, fecha_creacion,telefono, genero) VALUES (?, ?, ?, ?,?,?,?,?,?,?)'
          pool.execute(query, data)
        }
      } catch (error) {
        console.error(error)
        res.writeHead(500, { 'Content-Type': 'text/html' })
        res.end('<h1>Not Found Data Imported X</h1>')
      }
    }

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1> Data Imported successfully </h1>')
  } catch (error) {
    console.log(error)
    res.writeHead(500, { 'Content-Type': 'text/html' })
    res.end('<h1>Not Found Data Imported X</h1>')
  }
}

function validarEmail (dato) {
  // Expresión regular para validar un correo electrónico
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,6}$/
  return regex.test(dato)
}
