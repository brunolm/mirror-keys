// import mirrorKeys from 'mirror-keys';
// const mirrorKeys = require('mirror-keys').default;
const { default: mirrorKeys } = require('mirror-keys');

const ex1 = mirrorKeys(undefined, { a: undefined });
const ex2 = mirrorKeys('Home.', { a: undefined });
const ex3 = mirrorKeys(undefined, { a: { b: undefined } });
const ex4 = mirrorKeys('Home.', { a: { b: undefined } });

console.log(ex1);
console.log(ex2);
console.log(ex3);
console.log(ex4);
