import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
export default {
    input: 'src/root.js',
    external: ['angular', 'moment'],
    output: {
        file: "js/app.js",
        format: 'iife',
        name: 'pkg'
    },
    plugins: [
        resolve(), // so Rollup can find `ms`
        commonjs() // so Rollup can convert `ms` to an ES module
    ]
}
