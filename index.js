// module.exports = () => {
//   // ...
// }
// console.log(process.argv)
// console.log(__dirname)
const functions = require('./functions.js');
const readline = require('readline');
const { url } = require('inspector');
const axios = require('axios').default;

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

            let arrayObjects = []
            for (var i=0; i<links.length; i++){
              arrayObjects.push({"href": links[i][2], "text": links[i][1], "file": route});
            }
            console.log(arrayObjects, arrayObjects.length)

            
            let array = []
            let arrayPromises3 = []

            for (var i=0; i<arrayObjects.length; i++){
              let promise = axios({method:'GET',url: arrayObjects[i].href}).then((res) => {
                let resultado = {
                  "href":res.config.url,
                  "status": res.status,
                  "statustext": res.statusText,
                }
                array.push(resultado)}).catch((error) => {
                  let resultado = {
                    "href":error.response.config.url,
                    "status": error.response.status,
                    "statustext": error.response.statusText,
                  }
                  array.push(resultado)
                })
              arrayPromises3.push(promise)
            }

            Promise.allSettled(arrayPromises3).then((allData) =>
            console.log(array))
            
            
           


            // Promise.all(array).then((values) => {
            //   console.log(values)
            // });

            // let arrayPromises2 = []
            // axios({method:'GET', url: arrayObjects[3].href}).then((res)=>{
            //   let resultado = {
            //     "status": res.status, 
            //     "statustext": res.statusText, 
            //     ...arrayObjects[3]
            //   }
            //   console.log(resultado)
            //   arrayPromises2.push(resultado)
            // }).catch((error)=>{

            // })

            // Promise.allSettled(arrayPromises2).then((values) => {
            //   console.log(values)
            // });
           





            // let newArrayObjectsLinks = []
            let arrayPromises = []
            // for (var i=0; i<arrayObjects.length; i++){
              axios({method:'GET', url: arrayObjects[0].href}).then((res)=>{
                let resultado = {
                  "status": res.status, 
                  "statustext": res.statusText, 
                  ...links[0]
                }
                arrayPromises.push(resultado)
              }).catch((error)=>{
                // TODO:¨verificar como se van a procesar los que no tengan response
                if(error.response) {

                  let resultado = {
                    "status": error.response.status, 
                    "statustext": 'Fail', 
                    ...links[0]
                  }
                  arrayPromises.push(resultado)
                }
              })
            // }

            Promise.allSettled(arrayPromises).then((values) => {
              // procesar respuestas y agregar propiedades nuevas
              // console.log(values)
            });
            
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


              // if(links[i].length > 2){
              //   console.log(links[i][2])
              //   axios({method:'GET', url: links[i][2]}).then((res)=>{
              //     console.log(res)
              //     let resultado = {"status": res.status, "statustext": res.statusText, 
              //     "href": links[i][2], "text": links[i][1], "file": route}
              //     console.log(resultado)
              //     arrayObjects.push(resultado)
              //   }).catch((error)=>{
              //   })
              // }