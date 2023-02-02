import * as ts from 'typescript'
import * as circularJson from 'circular-json'

import * as fs from 'fs'
const path = require('path')

import { compile as antdTransformCompile } from '../demo/antd-transform-pligin/index'

import { parseSourceFile } from './parseSourceFile'
import { printparticularNode } from './printparticularNode'
import { testVal, descDec } from './add'
import { initializeState } from './scanner'

console.log('Hello TypeScript!')
const filepath = './src/index.ts'
const fileData: any = fs.readFileSync(filepath)
const filename = path.basename(filepath)
const addReslut = testVal(2, 4)

const fileNode = { name: filename, textContent: fileData.toString() }
const sourceFile = parseSourceFile(fileNode)

// Prints out particular nodes from a source file
printparticularNode('src/index.ts', [
  'path',
  'filepath',
  'fileData',
  'filename',
  'fileNode',
  'sourceFile',
  'printer',
  'unfoundNodes',
])

// 'import { Button } from "antd"' transform 'import Button from "antd/lib/button"';
console.log('ant-design ftranform plugin', antdTransformCompile('import { Button } from "antd"'))

fs.writeFileSync('./ast/ast-result.json', circularJson.stringify({ ...sourceFile }))
// console.log('AST SourceFileObject: ',astData)
