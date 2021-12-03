export enum PetType {
  Cat = 'Cat',
  Dog = 'Dog',
}

export type Meal = {
  name: string
  time: string
  description: string
}

export type Pet = {
  name: string
  petType: PetType
  meals: Meal[]
}
