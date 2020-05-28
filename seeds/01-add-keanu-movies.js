exports.seed = (knex) => {
  return knex('keanu_movies').del()
    .then(() => {
      return knex('keanu_movies').insert([{
        name: "The Matrix",
        year: 1999,
        rating: 5
      }, {
        name: "The Bad Bitch",
        year: 2016,
        rating: 4
      }, {
        name: "Swedish Dicks",
        year: 2016,
        rating: 3
      }]);
    });
};
