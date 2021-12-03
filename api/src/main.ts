/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

 import express from 'express'
 import cors from 'cors'
 import Api from './app/controllers/api'
 
 const app = express()

 //TODO Enable cors for all origins for now
 app.use(cors())

 app.use(Api)
 
 const port = process.env.port || 3333

 const server = app.listen(port, () => {
   console.log(`Listening at http://localhost:${port}/api`)
 })

 server.on('error', console.error)
 