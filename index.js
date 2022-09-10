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
  if(!functions.isPathAbsolute(route)){
    console.log('la ruta ingresada es relativa',route)
    route = functions.toAbsolute(route);
    console.log("la ruta relativa se transformó a absoluta", route)
  }
  
  if(functions.isExists(route)){
    console.log('la ruta existe')
  }else{
    console.log('la ruta no existe')
    process.exit()
  }
  
  if(functions.isDirectory(route)){
    console.log("es un directorio")
  }else{
    console.log("es un archivo")
    if(functions.isExtNameMd(route)){
      console.log('el archivo es .md')
      let texts = functions.fileContent(route);
      //console.log('el contenido es', texts)
    }else{
      console.log('el archivo no es .md ')
      process.exit()
    }
  }

});



