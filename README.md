# TypeScript-test-

A simple TypeScript project with a unit-tested `merge()` function that merges and sorts three arrays.

# Typescript Project
## Project Setup

### 1. Initialize the project 
```bash
npm init -y
```
### 2. Install development dependencies for testing
```bash
npm install --save-dev jest ts-jest @types/jest
```

### 3. Configure Jest for TS
This is to setup to handle the TS files for running.
```bash
npx ts-jest config:init
```
### 4. To run unit tests
```bash
npx jest
```
### 5. Additional: To compile
```bash
npx tsc --init \\ configure
npx tsc merge.ts \\ this will run to compile into JavaScript
```
### 6. Additional : To run after compile
```bash
node merge.js
```