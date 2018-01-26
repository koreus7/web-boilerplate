// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
 
export default {
  input: 'src/main.js',
  output: {
    name: 'main',
    file: '../dist/js/bundle.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    commonjs(),
    json({
        // All JSON files will be parsed by default,
        // but you can also specifically include/exclude files
        include: 'node_modules/**',
        
        //exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],
        
        // for tree-shaking, properties will be declared as
        // variables, using either `var` or `const`
        preferConst: true, // Default: false
  
        // specify indentation for the generated default export —
        // defaults to '\t'
        indent: '  '
    })
  ]
};