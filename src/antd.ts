import * as ts from 'typescript'
import * as circularJson from 'circular-json'

import * as fs from 'fs'
import { compile as antdTransformCompile } from '../demo/antd-transform-pligin/index'
console.log('Hello TypeScript!')
const filepath = './src/import-antd.ts'
const fileData: any = fs.readFileSync(filepath)
// 'import { Button } from "antd"' transform 'import Button from "antd/lib/button"';
fs.writeFileSync('./dist/import-antd', antdTransformCompile(fileData.toString()))