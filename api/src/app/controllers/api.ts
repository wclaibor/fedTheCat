import { Router } from 'express'

const router = Router()

router.get('/api', (req, res) => {
  res.send({ message: 'Welcome to who-fed-the-cat api!' })
})

export default router
