
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('drums').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('drums').insert({btn_id: 1, sound: '/samples/ drum_sounds/bdrum1.WAV'}),
        knex('drums').insert({btn_id: 2, sound: '/samples/ drum_sounds/clap1.WAV'}),
        knex('drums').insert({btn_id: 3, sound: '/samples/ drum_sounds/crash.WAV'}),
        knex('drums').insert({btn_id: 4, sound: '/samples/ drum_sounds/hhclose.WAV'}),
        knex('drums').insert({btn_id: 5, sound: '/samples/ drum_sounds/perca.WAV'}),
        knex('drums').insert({btn_id: 6, sound: '/samples/ drum_sounds/ride.WAV'}),
        knex('drums').insert({btn_id: 7, sound: '/samples/ drum_sounds/rimshot.WAV'}),
        knex('drums').insert({btn_id: 8, sound: '/samples/ drum_sounds/snare.WAV'})
      ]);
    });
};
