#!/usr/bin/env node

const functions = require("./index.js");
const mdLinks = functions.mdLinks;
//const { argv } = require("yargs");

//TODO:
//1. configurar cli
//2. revisar la cantidad de argumentos que recibe el comando (mdlinks miruta) -> argv

console.log(process.argv)
const [ , , route, option] = process.argv
if(validateOption = process.argv.includes("--validate:true")){
  const validateOption = true;
}else if(validateOption = process.argv.includes("--validate:false")){
  validateOption = false;
}

//3. una vez validados los argumentos, llamar funcion mdLinks

mdLinks(route,{validate:validateOption})
  .then((res) => console.log(res))
  .catch((res) => console.log(res));



