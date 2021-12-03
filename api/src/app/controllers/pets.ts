import { Router } from 'express'
import { Pet, PetType } from '../../../../models/Pet'

const pets: Pet[] = [
  {
    name: 'Little Dog',
    petType: PetType.Dog,
    meals: [
      {
        name: 'morning snick',
        time: '0900',
        description: `
                    - wet food
                    - 1/2 vetmedin
                    - 1/4 lasix
                `,
      },
      {
        name: 'brekist',
        time: '1600',
        description: `
                    - dry food
                    - wet food
                    - 1 vetmedin
                    - 1/2 lasix
                `,
      },
    ],
  },
  {
    name: 'Mia',
    petType: PetType.Cat,
    meals: [
      {
        name: 'morning snick',
        time: '0900',
        description: `
                    - wet food
                `,
      },
      {
        name: 'brekist',
        time: '1600',
        description: `
                    - wet food
                `,
      },
      {
        name: 'Midnight snick',
        time: '0000',
        description: `
                    - dry food
                `,
      },
    ],
  },
]

const PetsApi = Router()

PetsApi.get('/pets', async (req, res) => {
  res.send(pets)
})

export default PetsApi
