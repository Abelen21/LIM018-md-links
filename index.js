// module.exports = () => {
//   // ...
// }
// console.log(process.argv)
// console.log(__dirname)
const functions = require("./functions.js");
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Ingresa la ruta: ", (route) => {



const mdLinks = (route) => {
  return new Promise((resolve,reject)=>{

  if (!functions.isPathAbsolute(route)) {
    console.log("la ruta ingresada es relativa", route);
    route = functions.toAbsolute(route);
    console.log("la ruta relativa se transformó a absoluta", route);
  }

  if (functions.isExists(route)) {
    console.log("la ruta existe");
    if (functions.isDirectory(route)) {
      console.log("es un directorio......");
    } else {
      console.log("es un archivo");

      if (functions.isExtNameMd(route)) {
        console.log("el archivo es .md");
        let texts = functions.fileContent(route);

        if (texts != "") {
          if (functions.findLinks(texts, route).length != 0) {
            let arrayLinks = functions.findLinks(texts, route);
            let arrayPromise = functions.validateLinks(arrayLinks);
            Promise.all(arrayPromise).then((resultado)=>{
              const links = resultado;
              resolve(links);
            });
              //console.log(resultado)});
          } else {
            reject("el archivo no tiene links, fin");
          }
        } else {
          reject("el archivo esta vacio, fin");
        }
      } else {
        reject("el archivo no es .md, fin ");
      }
    }
  } else {
    reject("la ruta no existe, fin");
  }

})

}

mdLinks("./readme.md")
.then(res => console.log(res))
.catch(res => console.log(res))









