#!/usr/bin/env node

'use strict'

const print = require('chalk-printer')
const command = require('meow')
const fs = require('fs-extra')

// Command line definition.
const cli = command(`
  Usage
    $ ngsw-fixer <ng-ouput> <base-href> <deploy-url>
  Examples
    $ ngsw-fixer ./demo/dist/apps/demo /Account/Dashboard /Scripts/Accounts/Dashboard/demo
`)

const [output, baseHref, depoyUrl] = cli.input

Promise.resolve()
  .then(() => output || Promise.reject('The output path is required.'))
  .then(() => baseHref || Promise.reject('The base href is required.'))
  .then(() => depoyUrl || Promise.reject('The deploy url is required.'))
  .then(() => readManifest(output))
  .then((manifest) => generateNewConfig(manifest))
  .catch((error) => {
    print.error(error)
    process.exit(1)
  })

  function readManifest(output) {
    console.log(`reading ${output}`)
    return fs.readdir(output)
  }

  function generateNewConfig(file){
      console.log(file)
  }