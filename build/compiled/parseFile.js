"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFile = void 0;
var ts = require("typescript");
function parseFile(file, target) {
    return ts.createSourceFile(file.name, file.textContent, target || ts.ScriptTarget.ES5, /*setParentNodes*/ true);
}
exports.parseFile = parseFile;
//# sourceMappingURL=parseFile.js.map