exports.up = function(knex) {
    return knex.schema.createTable("keanu_movies", keanu_movies => {
        keanu_movies.increments()
        keanu_movies.string("name")
        keanu_movies.integer("year")
        keanu_movies.integer("rating")
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("keanue_movies");
};
