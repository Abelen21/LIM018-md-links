// module.exports = () => {
//   // ...
// }
// console.log(process.argv)
// console.log(__dirname)
const functions = require("./functions.js");
const readline = require("readline");
const { url } = require("inspector");
const axios = require("axios").default;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingresa la ruta: ", (route) => {
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
          if (functions.findLinks(texts).length != 0) {
            let links = functions.findLinks(texts);

            let arrayObjects = [];
            for (var i = 0; i < links.length; i++) {
              arrayObjects.push({
                href: links[i][2],
                text: links[i][1],
                file: route,
              });
            }
            console.log(arrayObjects, arrayObjects.length);

            let array = [];
            let arrayPromises3 = [];

            for (var i = 0; i < arrayObjects.length; i++) {
              const obj = arrayObjects[i];
              let promise = axios({ method: "GET", url: obj.href })
                .then((res) => {
                  const resultado = {
                    text: obj.text,
                    href: res.config.url,
                    status: res.status,
                    statustext: res.statusText,
                  };
                  array.push(resultado);
                })
                .catch((error) => {
                  // let href = "NA";
                  // // TODO poner esta logica en una funcion
                  // if ("response" in error) {
                  //   href = error.response.config.url;  
                  // }
                  const resultado = {
                    text: obj.text,
                    href,
                    status: error.response.status,
                    statustext: error.response.statusText,
                  };
                  array.push(resultado);
                });
              arrayPromises3.push(promise);
            }

            Promise.allSettled(arrayPromises3).then((allData) => {
              console.log(array);
            });

          } else {
            console.log("el archivo no tiene links, fin");
          }
        } else {
          console.log("el archivo esta vacio, fin");
        }
      } else {
        console.log("el archivo no es .md, fin ");
      }
    }
  } else {
    console.log("la ruta no existe, fin");
  }
});

