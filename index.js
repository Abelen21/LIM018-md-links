// module.exports = () => {
//   // ...
// }
// console.log(process.argv)
// console.log(__dirname)
const functions = require('./functions.js');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa la ruta: ", (route) => {
  // if(!isPathAbsolute(route)){
  //   console,log('la ruta ingresada es relativa')
  //   route = toAbsolute(route);
  //   console.log("la ruta relativa se transformó a abasoluta", route)
  // }
  if(functions.isExtNameMd(route)){
    console.log('el archivo es .md')
    let texts = functions.fileContent(route);
  }
  process.exit();
});





// let interfazCaptura = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// interfazCaptura.question("Ingrese la ruta: ", function(respuesta) {
//   let resp = `${respuesta}`;
//   console.log(`La ruta ingresada es: ${resp}`);

//   functions.existFile(resp).then(()=>{
//     if(!functions.pathAbsolute(resp)){
//       console.log('la ruta ingresada es relativa ... se transformará a abasoluta');
//       resp = functions.pathTransformationAbsolute(resp);
//       console.log('absoluta: ', resp);
//     }

//   })



// })


