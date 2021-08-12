#!/usr/bin/env zx

console.log(`┏━━━ 📨 Test script ${await $`pwd`} ━━━━━━━━━━━━━━━━━━━`);

console.log(await $`${__dirname}/get-updated-workspaces.mjs`);
