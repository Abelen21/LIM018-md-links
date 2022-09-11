const path = require('path');
const fs = require('fs');
// const https = require('http');
// const url = require('url');

const isPathAbsolute = (param) => path.isAbsolute(param);

const toAbsolute = (param) => path.resolve(param);

const isExists = (param) => fs.existsSync(param);

const isDirectory = (param) => fs.lstatSync(param).isDirectory();

const isExtNameMd = (param) => path.extname(param) === '.md';

const fileContent = (param) => fs.readFileSync(param, 'utf-8');

const findLinks = (param) =>{
    const regExp = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi;
    return param.match(regExp)
}

module.exports = {
    isPathAbsolute,
    toAbsolute,
    isExists,
    isDirectory,
    isExtNameMd,
    fileContent,
    findLinks
}

