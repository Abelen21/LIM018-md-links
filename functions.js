const path = require('path');
const fs = require('fs');
const https = require('http');
const url = require('url');

const isPathAbsolute = (param) => path.isAbsolute(param);

const toAbsolute = (param) => path.resolve(param);

const isExtNameMd = (param) => path.extname(param) === '.md';

const fileContent = (param) => fs.readFileSync(param, 'utf-8');

module.exports = {
    isPathAbsolute,
    toAbsolute,
    isExtNameMd,
    fileContent
}

