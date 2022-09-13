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
    console.log('la ruta ingresada es relativa', route)
    route = functions.toAbsolute(route);
    console.log("la ruta relativa se transformó a absoluta", route)
  }
  
  if(functions.isExists(route)){
    console.log('la ruta existe')

    if(functions.isDirectory(route)){
      console.log("es un directorio......")
    }else{
      console.log("es un archivo")

      if(functions.isExtNameMd(route)){
        console.log('el archivo es .md')
        let texts = functions.fileContent(route);

          if(texts != ''){
        
            if(functions.findLinks(texts).length != 0){
              let links = functions.findLinks(texts)
  
              // let arrayObjects = []
              // for (var i=0; i<links.length; i++){
              //   arrayObjects.push({"href": links[i][2], "text": links[i][1], "file": route});
              // }
  
              let arrayObjects = []
              for (var i=0; i<links.length; i++){
                arrayObjects.push({"href": links[i][2], "text": links[i][1], "file": route});
              }

              console.log(arrayObjects)
              // // let newArrayObjectsLinks = []
              // let arrayPromises = []
              // for (var i=0; i<arrayObjects.length; i++){
              //   //console.log(links[i][2])
              //   axios({method:'GET', url: arrayObjects[i].href}).then((res)=>{
              //     let resultado = {
              //       "status": res.status, 
              //       "statustext": res.statusText, 
              //       ...links[i]
              //     }
              //     arrayPromises.push(resultado)
              //   }).catch((error)=>{
              //     // TODO:¨verificar como se van a procesar los que no tengan response
              //     if(error.response) {
  
              //       let resultado = {
              //         "status": error.response.status, 
              //         "statustext": 'Fail', 
              //         ...links[i]
              //       }
              //       arrayPromises.push(resultado)
              //     }
              //   })
              // }
              
              // Promise.allSettled(arrayPromises).then((values) => {
              //   procesar respuestas y agregar propiedades nuevas
              // });
  
  
            }else{
              console.log('el archivo no tiene links, fin') 
            }
  
          }else{
            console.log('el archivo esta vacio, fin')
          }

      }else{
        console.log('el archivo no es .md, fin ')
      }
    }
  }else{
    console.log('la ruta no existe, fin')
  }
  
});



