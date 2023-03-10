import { MongoClient } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
'mongodb+srv://Arek:QwM3uVZ2lJmZ86l8@cluster0.rkohgbp.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    // find code goes here
    // iterate code goes here
    const db = client.db("Leaderboard")
    const coll = db.collection("scores")

    const score = coll.find({ name : 'Arek' })

    await score.forEach(console.log)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);