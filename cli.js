#!/usr/bin/env node

const functions = require("./index.js");
const { argv } = require("yargs");
const mdLinks = functions.mdLinks;

//TODO:
//1. configurar cli
//2. revisar la cantidad de argumentos que recibe el comando (mdlinks miruta) -> argv
//3. una vez validados los argumentos, llamar funcion mdLinks


mdLinks("./readme.md", {validate:true})
  .then((res) => console.log(res))
  .catch((res) => console.log(res));
