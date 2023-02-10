
import { printparticularNode } from './printparticularNode'
const path = require('path')

// Prints out particular nodes from a source file
printparticularNode('src/particular.ts', [
  'path',
  'filepath'
])
