const path = require('path');
const fs = require('fs');
// const https = require('http');
// const url = require('url');
const axios = require('axios').default;

const isPathAbsolute = (param) => path.isAbsolute(param);

const toAbsolute = (param) => path.resolve(param);

const isExists = (param) => fs.existsSync(param);

const isDirectory = (param) => fs.lstatSync(param).isDirectory();

const isExtNameMd = (param) => path.extname(param) === '.md';

const fileContent = (param) => fs.readFileSync(param, 'utf-8');

const findLinks = (param1,param2) => {
    //const regExp = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi;
    const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
    let arrayLinks = [...param1.matchAll(regExp)];
    let arrayObjects = [];
    for (var i = 0; i < arrayLinks.length; i++) {
        arrayObjects.push({
            href: arrayLinks[i][2],
            text: arrayLinks[i][1],
            file: param2
        })};
    return arrayObjects;
}

const valLinks = (param) => {
    axios({method:'GET',url: param}).then((res)=>{
        console.log(res)
    })
}

module.exports = {
    isPathAbsolute,
    toAbsolute,
    isExists,
    isDirectory,
    isExtNameMd,
    fileContent,
    findLinks,
    valLinks
}
