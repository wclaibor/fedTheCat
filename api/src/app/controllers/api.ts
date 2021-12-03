import { Router } from 'express'
import PetsApi from './pets'

const router = Router()

router.use('/api', PetsApi)

router.get('/api', (req, res) => {
  res.send({ message: 'Welcome to who-fed-the-cat api!' })
})

export default router
