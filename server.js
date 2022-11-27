const express = require('express')
const mongoose = require('mongoose')
const app = express()

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/dbMovie');
}

const moviesSchema = new mongoose.Schema({
    name: String,
    year: Number,
    actors: String
});
const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteMovie: moviesSchema
});
const Movies = mongoose.model('Movies', moviesSchema);
const People = mongoose.model('People', peopleSchema);

const PulpFiction = new Movies({
    name: "Pulp Fiction",
    year: "1997",
    actors: "Samuel Lee Jackson"
})
const Interstellar = new Movies({
    name: "Interstellar",
    year: 2013,
    actors: 'Mac Caunaugey'
})
const Avengers = new Movies({
    name: "Avengers",
    year: 2016,
    actors: "Dauney JR"
})

const Jayce = new Movies({
    name: "Jayce et les conquerants de la lumière",
    year: 1983,
    actors: "Jayce"
})

const Scarface = new Movies({
    name: "Scarface",
    year: 1983,
    actors: "Al-pacino"
})

const StarWars = new Movies({
    name: "StarWars",
    year: 1983,
    actors: "Darth Vador"
})

const Avatar = new Movies({
    name: "Avatar",
    year: 2015,
    actors: "Coluche"
})

const Marie = new People({
    name: "Marie",
    age: 44,
    favoriteMovie: Avengers
})
Marie.save();

/*

Movies.updateOne({ name: "Jayce et les conquerants de la lumière" }, { name: "dents de la mer" }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("mise à jour effectuée");
    }
})

//Movies.insertMany([Avengers1, Avengers2, Avengers3, Avengers4]) 

/*
Movies.deleteMany({ name: "Avengers" }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("tout a fonctionné");
    }
})


//PulpeFiction.save(); 
//Interstellar.save(); 
Movies.find({}, (err, movies) => {
    if (err) {
        console.log(err)
    } else {
        console.log(movies)
    }
}
)

*/

app.listen(3000, () => {
    console.log('serveur lancé sur le port 3000')
})