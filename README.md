# opus decode failed reproduce
this is a repository that contains code to reproduce the opus decode failed issue

## How to reproduce
1. Clone this repository
2. Run `npm i`
3. Run `npm run dev`
4. Wait for "app is registered" log
5. Call to your softphone app
6. Press "2" fast several times
7. You will see "opus decode failed" in the console

## Pc specs
os: macOS 15.2
cpu: Apple M1 Pro
gpu: Apple M1 Pro
ram: 32GB
node: 20.17.0
npm: 10.2.3
