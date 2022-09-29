const functions = require("../functions.js");

describe("Testing isPathAbsolute", () => {
  it("should...", () => {
    expect(functions.isPathAbsolute("../readme.md")).toBe(false);
  });
});

describe("Testing toAbsolute", () => {
  it("should...", () => {
    expect(functions.toAbsolute("./readme.md")).toBe('D:\\2022\\LABORATORIA_BOOTCAMP_LIM18\\LIM018-md-links\\readme.md');
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

describe("Testing isExtNameMd", () => {
  it("should..", () => {
    expect(functions.isExtNameMd("./readme.md")).toBe(true);
  });
});

describe("Testing fileContent", ()=>{
  it("should ..", () => {
    const text = `* [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)`;
    expect(functions.fileContent("./readme.md")).toContain(text);
  });
});

describe("Testing findLinks", () => {
  // it('should return an empty array when passing insufficient arguments', () =>{
  //   expect(functions.findLinks().length).toBe(0);
  // })
  it("should return array of object", () => {
    const text = `* [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
    * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
    * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)`;

    const route = "./readme.md";

    const arrayObjects = [
      {
        href: "https://curriculum.laboratoria.la/es/topics/javascript/04-arrays",
        text: "Arreglos",
        file: route,
      },
      {
        href: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/",
        text: "Array - MDN",
        file: route,
      },
      {
        href: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
        text: "Array.prototype.sort() - MDN",
        file: route,
      }
    ];

    const arrResult = functions.findLinks(text, route);

    expect(arrResult).toStrictEqual(arrayObjects);
  });
});


