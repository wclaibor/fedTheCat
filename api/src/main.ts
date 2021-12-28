import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import dbo from '../db/conn'
import Api from './app/controllers/api'

dotenv.config({ path: './config.env' })

const app = express()

//TODO Enable cors for all origins for now
app.use(cors())

app.use(Api)

const port = process.env.port || 3333

const server = app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(err => {
    if (err) {
      console.error(err)
    }
    // setup initial data
  })

  console.log(`Listening at http://localhost:${port}/api`)
})

server.on('error', console.error)
