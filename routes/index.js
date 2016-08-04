var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  get: get

}

function get (req, res) {
  knex('drums')
    .select()
    .then(function (drums) {
      res.render('index', { drums: drums })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}
