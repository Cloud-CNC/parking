/**
 * @fileoverview TSUP Config
 */

//Imports
import {defineConfig} from 'tsup';

//Export
export default defineConfig({
  entry: [
    'src/cli.ts'
  ],
  format: ['esm'],
  minify: true
});