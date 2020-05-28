const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

const knex = require('knex');
const config = require('./knexfile')[process.env.NODE_ENV || "development"];
const database = knex(config);

app.get("/keanu_movies", async (request, response) => {
    const keanu_movies = await database("keanu_movies").select();
    response.status(200).json( keanu_movies );
});

app.listen(port, () => console.log(`listening on port ${port}`));