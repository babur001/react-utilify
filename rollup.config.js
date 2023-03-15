import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: './src/lib/index.ts',
    output: [
      { file: 'dist/esm/index.d.ts', format: 'esm' },
      { file: 'dist/cjs/index.d.ts', format: 'cjs' },
    ],
    plugins: [dts()],
  },
  {
    input: './src/lib/index.ts',
    output: [
      {
        file: 'dist/esm/index.js',
        format: 'es',
      },
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
      },
    ],

    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
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
  },
];
