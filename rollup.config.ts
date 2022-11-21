import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

const pkg = require('./package.json')

const libraryName = 'javascript-utils'

export default {
  input: `src/index.ts`,
  output: [
    { file: pkg.main, name: libraryName, format: 'umd' },
    { file: pkg.module, format: 'es' }
  ],
  watch: {
    include: 'src/**'
  },
  plugins: [
    // Compile TypeScript files
    typescript({ declaration: true }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve()
  ]
}
