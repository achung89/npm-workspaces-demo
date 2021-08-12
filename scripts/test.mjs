#!/usr/bin/env zx

console.log(`┏━━━ 📨 Test script ${await $`pwd`} ━━━━━━━━━━━━━━━━━━━`);

const changed = JSON.parse(
  (await $`${__dirname}/get-updated-workspaces.mjs`).stdout
);

await $`npm run test -w ${changed}`;
