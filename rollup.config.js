import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
export default {
    input: 'src/index.js',
    external: ['angular', 'moment', 'weui'],
    output: {
        file: "js/app.js",
        name: 'pkg' + Math.ceil(Math.random() * 1000),
        format: 'iife'
    },
    plugins: [
        resolve(), // so Rollup can find `ms`
        commonjs() // so Rollup can convert `ms` to an ES module
    ]
}
