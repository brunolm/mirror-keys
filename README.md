# mirror-keys

[![npm version][npm-version-image]][npm-url]
[![Try mirror-keys on RunKit][runkit-badge]][runkit]

Example usage:

```typescript
import mirrorKeys from 'mirror-keys';

mirrorKeys(undefined, { a: undefined }); // { a: 'a' };
mirrorKeys('Home.', { a: undefined }); // { a: 'Home.a' };
mirrorKeys(undefined, { a: { b: undefined } }); // { a: { b: 'b' } };
mirrorKeys('Home.', { a: { b: undefined } }); // { a: { b: 'Home.b' } };
```

[npm-url]: https://www.npmjs.com/package/mirror-keys
[npm-version-image]: http://img.shields.io/npm/v/mirror-keys.svg?style=flat

[runkit]: https://runkit.com/npm/mirror-keys
[runkit-badge]: https://badge.runkitcdn.com/mirror-keys.svg
