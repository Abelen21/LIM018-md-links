#!/usr/bin/env node

const functions = require("./index.js");
const mdLinks = functions.mdLinks;
//const { argv } = require("yargs");

//TODO:
//1. configurar cli
//2. revisar la cantidad de argumentos que recibe el comando (mdlinks miruta) -> argv
console.log(process.argv)
const validateOption = process.argv.includes("--validate")

//3. una vez validados los argumentos, llamar funcion mdLinks

mdLinks("./readme.md",{validate:validateOption})
  .then((res) => console.log(res))
  .catch((res) => console.log(res));



