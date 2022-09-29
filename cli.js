#!/usr/bin/env node

const functions = require("./index.js");
const mdLinks = functions.mdLinks;

//TODO:
//1. configurar cli

//2. revisar la cantidad de argumentos que recibe el comando (mdlinks miruta) -> argv
//console.log(process.argv)
const [ , , route, option] = process.argv
validateOption = process.argv.includes("--validate")


//3. una vez validados los argumentos, llamar funcion mdLinks
mdLinks(route,{validate:validateOption})
  .then((res) => console.log(res))
  .catch((res) => console.log(res));



