# array-map-to-object

Like `map()`, but creates object keys and values instead of array. `mapToObject` creates a new object with the returned keys and values of calling a provided function on every element in the calling array.

Published as `.js`, `.mjs`, `umd.js` including type definitions for `TypeScript`.

# Syntax

```ts
const newObject = mapToObject(array, (currentValue[, index[, array]]) => {
  // Return key for object item
  // or [key, value] tuple (array) for key and value
  // or { key, value } object for key and value
}, [, thisArg]);
```

# Examples

```ts
import mapToObject from "array-map-to-object";
```

## Using a property for key to create object

```ts
const users = [
  { name: "George", basketSize: 3 },
  { name: "Lisa", basketSize: 2 },
];
const usersLookup = mapToObject(users, "name");
// { George: { name: "George", basketSize: 3 }, Lisa: { name: "Lisa", basketSize: 2 } }
```

```ts
const users = [
  { name: "George", basketSize: 3 },
  { name: "Lisa", basketSize: 2 },
];
const usersLookup = mapToObject(users, (user) => user.name);
// Callback returns only key, value is same item. `usersLookup` is:
// { George: { name: "George", basketSize: 3 }, Lisa: { name: "Lisa", basketSize: 2 } }
```

## Creating custom object using key/value pair.

```ts
const users = [
  { name: "George", basketSize: 3 },
  { name: "Lisa", basketSize: 2 },
];
const usersLookup = mapToObject(users, (user) => [user.name, user.basketSize]);
// Callback returns [key, value] tuple (array). First returned value used for key, second for value. `usersLookup` is:
// { George: 3, Lisa: 2 }
```

## Creating custom object using key/value object.

```ts
const users = [
  { name: "George", basketSize: 3 },
  { name: "Lisa", basketSize: 2 },
];
const usersLookup = mapToObject(users, (user) => ({ key: user.name, value: user.basketSize }));
// Callback returns { key, value } object. `usersLookup` is:
// { George: 3, Lisa: 2 }
```

## Mapping an array of numbers to an array of square roots

```ts
const numbers = [1, 4, 9];
const roots = mapToObject(numbers, (num) => [num, Math.sqrt(num)]);
// `roots` is { 1: 1, 4: 2, 9: 3 }
```
