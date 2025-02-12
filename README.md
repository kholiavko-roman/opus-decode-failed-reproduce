# Opus Decode Failed Reproduction

This repository contains code to reproduce the "opus decode failed" issue.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Create a `.env` file based on `.env.example`.
4. Run `npm run dev`.
5. Wait for the "app is registered" log.
6. Make a call to your softphone app.
7. Press "2" rapidly several times.
8. Obtain the "opus decode failed" message in the console.

## System Specifications

- **OS:** macOS 15.2 / Ubuntu 24.04.1
- **CPU:** Apple M1 Pro / Intel I7 13th Gen
- **GPU:** Apple M1 Pro / Nvidia RTX 4070
- **RAM:** 32GB
- **Node.js:** 20.17.0
- **Npm:** 10.2.3
