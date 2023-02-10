
import * as circularJson from 'circular-json'

import * as fs from 'fs'
const path = require('path')

import { CatchCompile } from '../demo/promise-transform-plugin/index'

import { parseSourceFile } from './parseSourceFile'

const filepath = './demo/promise-transform-plugin/demo-file.ts'
const fileData: any = fs.readFileSync(filepath)
const filename = path.basename(filepath)
const fileContent = fileData.toString()
const fileNode = { name: filename, textContent: fileData.toString() }
const sourceFile = parseSourceFile(fileNode)
fs.writeFileSync('./ast/catch-ast-result.json', circularJson.stringify({ ...sourceFile }))
CatchCompile(fileContent)