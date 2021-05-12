// Code Snippets in Javascript

let arr = [];

// Filled Array with empty objects
arr = Array.from({ length }, (x) => {});

// Filled Array with with increasing numbers, using the index
// Result: [0, 1, 2, 3, 4, ...]
arr = Array.from({ length }, (x, i) => i);
