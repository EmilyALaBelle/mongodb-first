import { MongoClient } from 'mongodb';

import { uri } from "./credentials.js"

const client = new MongoClient(uri)
const db = client.db("sample_mflix")
const moviesCollection = db.collection("movies")


//console.log( await moviesCollection.findOne({}) )
let query = { title: { $regex: /terminator/i } } //searches for terminator anywhere in the title i means case insensitive 
let movieArray = await moviesCollection.find(query).limit(3).toArray()

for(let i = 0; i < movieArray.length; i++){
    console.log(movieArray[i].title)
}
// let firstMovie = movieArray[0]
// console.log(firstMovie.title)
console.log(`there are ${movieArray.length} movies`)