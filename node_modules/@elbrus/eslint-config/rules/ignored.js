export default {
  rules: {
    // Do not need the strict mode
    strict: 'off',

    // Flux reducers violate this rule
    'default-param-last': 'warn',

    // Prefer ++ over += 1
    'no-plusplus': 'off',

    // console.log is used nontheless
    'no-console': 'off',

    // Allow for...of and for...in
    'no-restricted-syntax': 'off',

    // Disable prototype guard in for...in loop
    'guard-for-in': 'off',

    // Warn about loosing a return statement
    'consistent-return': 'warn',

    // Just warn about not using this in class methods
    'class-methods-use-this': 'warn',
  },
};
