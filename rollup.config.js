import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
// import pkg from './package.json';

export default {
  input: './src/lib/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'es',
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
  ],

  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: '**/node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    resolve({ extensions: ['.js', '.ts', '.tsx'] }),
    commonjs(),
    terser(),
  ],
  external: ['react', 'react-dom'],
};
