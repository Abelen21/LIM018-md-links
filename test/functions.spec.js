// const mdLinks = require('../');

// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });

const functions = require("../functions.js");

describe("Testing isPathAbsolute", () => {
  it("should...", () => {
    expect(functions.isPathAbsolute("../readme.md")).toBe(false);
  });
});

describe("Testing isExists", () => {
  it("should...", () => {
    expect(functions.isExists("./readme.md")).toBe(true);
  });
});

describe("Testing isDirectory", () => {
  it("should..", () => {
    expect(functions.isDirectory("./readme.md")).toBe(false);
  });
});

describe("Testing findLinks", () => {
  // it('should return an empty array when passing insufficient arguments', () =>{
  //   expect(functions.findLinks().length).toBe(0);
  // })
  it("should return array of object", () => {
    const text = `* [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
    * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
    * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
    * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
    * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
    * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)`;

    const route = "./readme.md";

    const arrayObjects = [
      {
        href: "https://curriculum.laboratoria.la/es/topics/javascript/04-arrays",
        text: "Arreglos",
        file: route,
      },
      // {href: arrayLinks[i][2],text: arrayLinks[i][1],file: route},
      // {href: arrayLinks[i][2],text: arrayLinks[i][1],file: route},
      // {href: arrayLinks[i][2],text: arrayLinks[i][1],file: route},
      // {href: arrayLinks[i][2],text: arrayLinks[i][1],file: route},
      // {href: arrayLinks[i][2],text: arrayLinks[i][1],file: route},
      // {href: arrayLinks[i][2],text: arrayLinks[i][1],file: route}
    ];

    const arrResult = functions.findLinks(text, route);

    console.log('ARR EXPECTED:::', arrayObjects);
    console.log('ARR RESULT:::', arrResult);

    //expect(arrResult).toStrictEqual(arrayObjects);
  });
});
