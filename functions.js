const path = require("path");
const fs = require("fs");
const axios = require("axios");

const isPathAbsolute = (param) => path.isAbsolute(param);

const toAbsolute = (param) => path.resolve(param);

const isExists = (param) => fs.existsSync(param);

const isDirectory = (param) => fs.lstatSync(param).isDirectory();

const isExtNameMd = (param) => path.extname(param) === ".md";

const fileContent = (param) => fs.readFileSync(param, "utf-8");

const findLinks = (param1, param2) => {
  //const regExp = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi;
  const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
  let arrayLinks = [...param1.matchAll(regExp)];
  let arrayObjects = [];
  for (var i = 0; i < arrayLinks.length; i++) {
    arrayObjects.push({
      href: arrayLinks[i][2],
      text: arrayLinks[i][1],
      file: param2,
    });
  }
  return arrayObjects;
};

const validateLinks = (arrLinks) => {
  let arrayPromises = [];
  for (var i = 0; i < arrLinks.length; i++) {
    const obj = arrLinks[i];
    let promise = axios.get(obj.href)
      .then((res) => {
        console.log('RES:::', res);
        return {
          href: res.config.url,
          text: obj.text,
          file: obj.file,
          status: res.status,
          message: 'ok',
        };
      })
      .catch((error) => {
        if ("response" in error) {
          return {
            href: error.response.url,
            text: obj.text,
            file: obj.file,
            status: error.response.status,
            message: 'fail',
          };
        }
      });
    arrayPromises.push(promise);
  }
  return arrayPromises;
  
};

////recorrido de directorio
const findFileDirectory = (routeDirectory) =>{
  const arrayFiles = [];

  const readDirectory = fs.readdirSync(routeDirectory);

  readDirectory.forEach((files)=>{
    
    const newRoutedirectory = path.join(routeDirectory,files);
     if(newRoutedirectory.isDirectory()){
      findFileDirectory(newRoutedirectory).forEach((file)=>{
        arrayFiles.push(file);
      });
     }else if(isExtNameMd(newRoutedirectory)){
      arrayFiles.push(newRoutedirectory);
     }
  });
  return arrayFiles
}



module.exports = {
  isPathAbsolute,
  toAbsolute,
  isExists,
  isDirectory,
  isExtNameMd,
  fileContent,
  findLinks,
  validateLinks,
  findFileDirectory
};
