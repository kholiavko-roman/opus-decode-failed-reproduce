# Opus Decode Failure Reproduction

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

- **OS:** macOS 15.2
- **CPU:** Apple M1 Pro
- **GPU:** Apple M1 Pro
- **RAM:** 32GB
- **Node.js:** 20.17.0
- **Npm:** 10.2.3
