import { MongoClient,ObjectId } from 'mongodb';

import { uri } from "./credentials.js"

const client = new MongoClient(uri)
const db = client.db("sample_mflix")
const moviesCollection = db.collection("movies")


//console.log( await moviesCollection.findOne({}) )
let query = { title: { $regex: /star wars/i } } //searches for terminator anywhere in the title i means case insensitive 
let movieArray = await moviesCollection
    .find(query)
    //.limit(3)
    .toArray() //make it into an array

for (let i = 0; i < movieArray.length; i++) {
    console.log(movieArray[i].title)
}
// let firstMovie = movieArray[0]
// console.log(firstMovie.title)



//console.log(`there are ${movieArray.length} movies`)


//add a new movie
const newMovie = {
    title: "The Boca Code story",
    rating: "R",
    genre: "Comedy",
    releaseDate: "12/16/2022"
}

// const results = await moviesCollection.insertOne(newMovie)
// console.log("Results of insert",results)

const updateQuery = { _id: new ObjectId("6345ca9fbcb3ebbcba427051") }
const update = {$set: {title: "The New Boca Code Story"}}
const result = await moviesCollection.findOneAndUpdate(updateQuery,update);
console.log(result)
