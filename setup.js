#!/usr/bin / env node
/* eslint-disable */
const { exec } = require('child_process');
const fs = require('fs');

function execute({ cwd }) {
  exec('yarn', { cwd }, () => {
    const process = exec('yarn start', { cwd });
    process.stdout.on('data', (code) => {
      console.log(code);
    });
  });
}

// Main
execute({ cwd: './' });

// Server
execute({ cwd: './server' });

// Client
execute({ cwd: './client' });
