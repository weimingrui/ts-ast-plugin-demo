const path = require('path')
const fs = require('fs-extra')



// webpack state module list 可能存在嵌套结构
function flattenModules(modules) {
  return modules.reduce((pre, item) => {
    return [
      ...pre,
      item,
      ...Array.isArray(item.modules) ? flattenModules(item.modules): []
    ]
  }, [])
}

class ExportSourceFilesPlugin {
  constructor(opts) {
    this.opts = Object.assign({
      filter: () => true,
      dirName: 'webpack-source-files',
      ...opts
    })
  }
  apply(compiler) {
    this.compiler = compiler;

    // 指定要附加到的事件钩子函数
    const filterFn = this.opts.filter
    const exportFilepath = path.resolve(this.compiler.options.output.path, this.opts.dirName)
    const cwdDir = process.cwd()

    compiler.hooks.done.tapAsync(
      'ExportSourceFilesWebpackPlugin',
      (stats, callback) => {
        const statsModules = flattenModules(stats.toJson().modules)
        const sourceModule = statsModules.filter(({ name }) => {
          return filterFn(name)
        })

        const names = new Set(sourceModule.map(item => item.name.replace(/[\s\?].*/g, '')))

        for (const fileName of names) {
          const fromFile = path.resolve(cwdDir, fileName)
          if (fs.pathExistsSync(fromFile)) {
            fs.copySync(fromFile, path.resolve(exportFilepath, fileName))
          } else {
            console.warn('[webpack-source-files]: File does not exist, copy fail !', fileName)
          }
        }

        callback()
      }
    );
  }
}

module.exports = ExportSourceFilesPlugin
