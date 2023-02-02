import * as ts from 'typescript';
export function parseSourceFile(file: File, target?: ts.ScriptTarget | undefined) {
  return ts.createSourceFile(file.name, file.textContent, target || ts.ScriptTarget.ES5, /*setParentNodes*/ true);
}