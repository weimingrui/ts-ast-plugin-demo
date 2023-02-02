import * as ts from 'typescript'
import transformer from './antd-transform-plugin'

export function compile(sourceCode: string) {

  const source = ts.createSourceFile(
    '',
    sourceCode,
    ts.ScriptTarget.ES2016,
    true
  )

  const result = ts.transform(source, [transformer])

  const transformedSourceFile = result.transformed[0]
  const printer = ts.createPrinter()
  const resultCode = printer.printFile(transformedSourceFile)

  return resultCode
}