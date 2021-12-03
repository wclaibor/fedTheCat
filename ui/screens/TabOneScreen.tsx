import axios from 'axios'
import * as React from 'react'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Pet } from '../../models/Pet'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [pets, setPets] = useState([] as Pet[])

  axios.get('http://localhost:3333/api/pets').then(response => {
    setPets(response.data)
  })

  return (
    <View style={styles.container}>
      <Text>
        {pets.map(pet => (
          <React.Fragment>
            <h1>{pet.name}</h1>
            <h2>{pet.petType}</h2>
            {pet.meals.map(meal => (
              <React.Fragment>
                {meal.name}: {meal.time}
                <br />
                {meal.description}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
