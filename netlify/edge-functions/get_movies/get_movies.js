const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

console.log("tut")
// const handler = async (event) => {
//   try {
//     const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
//     const collection = database.collection(process.env.MONGODB_COLLECTION);
//     console.log(collection.id)
//     // Function logic here ...
//   } catch (error) {
//     return { statusCode: 500, body: error.toString() }
//   }
// }

module.exports = { handler }