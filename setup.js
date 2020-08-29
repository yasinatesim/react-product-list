#!/usr/bin / env node
/* eslint-disable */
const { exec } = require('child_process');
const fs = require('fs');

/**
 * This functions are automatic install client and server dependencies
 * @param {String} cwd - This value is the micro app folder name
 */
function execute({ cwd }) {
  /**
   * Exists "node_modules" folder in the "cwd" directory, install the node dependencies
   */
  if (fs.existsSync('./server/node_modules') && fs.existsSync('./client/node_modules')) {
    run({ cwd });
    return;
  }

  /**
   *  Else
   ** Install the node dependencies
   * -------------------------------------
   */
  exec('yarn', { cwd }, () => {
    run({ cwd });
  });
}

function run({ cwd }) {
  const process = exec('yarn start', { cwd });
  process.stdout.on('data', (code) => {
    console.log(code);
  });
}

// Server
execute({ cwd: './server' });

// Client
execute({ cwd: './client' });
