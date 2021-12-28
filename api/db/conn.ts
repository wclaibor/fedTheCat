import { Db, MongoClient } from 'mongodb'
// TODO Get this from the environment variables
// const dbUri = process.env.ATLAS_URI
const dbUri =
  'mongodb+srv://wclaiborne:admin@fedthecat.m0q4h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
console.log(dbUri)
const client = new MongoClient(dbUri)

let _db: Db | null = null

export default {
  connectToServer: callback => {
    client.connect((err, db) => {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db('FedTheCat')
        console.log('Successfully connected to MongoDB.')
      }
      return callback(err)
    })
  },

  getDb: () => {
    return _db
  },
}
