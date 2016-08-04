var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  bank1: bank1
}

function bank1 (req, res) {
  res.render('index')
  // knex('bank_1')
  //   .select()
  //   .then(function (samples) {
  //   })
  //   .catch(function (err) {
  //     res.status(500).send('DATABASE ERROR: ' + err.message)
  //   })
}

function error (req, res) {
  res.send('SOMETHING REALLY REALLY BAD HAPPENED')
}
