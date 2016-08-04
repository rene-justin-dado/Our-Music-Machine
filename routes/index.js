var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  add: add,
  edit: edit,
  error: error,
  get: get,
  send: send,
  update: update
}

function get (req, res) {
  knex('users')
    .select()
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function add (req, res) {
  res.render('add')
}

function send (req, res) {
  var name = req.body.name    
  var email = req.body.email
  knex('users')
    .insert({
      name: name,
      email: email
    })
    .then(function () {
      res.redirect('/')
    })
    .catch(function (err) {
      res.redirect('/error')
    })
}

function update (req, res) {
  var id = req.params.id
  var name = req.body.name
  var email = req.body.email
  knex('users')
    .update({
      name: name,
      email: email
    })
    .where('id', id)
    .then(function () {
      res.redirect('/')
    })
    .catch(function (err) {
      res.redirect('/error')
    })
}

// /edit/:id
// /edit/123
function edit (req, res) {
  var id = req.params.id
  knex('users')
    .select()
    .where('id', id)
    .then(function (user) {
      res.render('edit', { user: user[0] })
    })
    .catch(function (err) {
      res.redirect('/error')
    })
}

function error (req, res) {
  res.send('SOMETHING REALLY REALLY BAD HAPPENED')
}
