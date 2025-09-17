import js from '@eslint/js';
import bestPractices from './rules/best-practices.js';
import errors from './rules/errors.js';
import es6 from './rules/es6.js';
import node from './rules/node.js';
import style from './rules/style.js';
import formatting from './rules/formatting.js';
import variables from './rules/variables.js';
import ignored from './rules/ignored.js';
import configPrettier from 'eslint-config-prettier';

const elbrusConfig = [
  js.configs.all,
  bestPractices,
  errors,
  es6,
  node,
  variables,
  style,
  formatting,
  configPrettier,
  ignored,
];

export default elbrusConfig;
