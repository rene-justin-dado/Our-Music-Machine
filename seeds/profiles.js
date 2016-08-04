exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({id: 99901, url: 'https://google.co.nz', user_id: 99901}),
        knex('profiles').insert({id: 99902, url: 'https://wombats-are-awesome.com', user_id: 99902}),
        knex('profiles').insert({id: 99903, url: 'https://soupcon.com', user_id: 99903})
      ])
    })
}
