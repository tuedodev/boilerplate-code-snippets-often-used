/*
Rotates an 2-dimensional array by 90 degree with flexible length of rows

Given is an array like:

const arr = [
	['A', 'B', 'C'],
	['D', 'E', 'F', 'G', 'H', 'I'],
	['J', 'K'],
	['L', 'M', 'N', 'O'],
];

Expected output after rotation by 90 degree:

const arr = [
	['L', 'J', 'D', 'A'],
	['M', 'K', 'E', 'B'],
	['N', 'undefined', 'F', 'C'],
	['O', 'undefined', 'G', 'undefined'],
    ['undefined', 'undefined', 'H', 'undefined'],
    ['undefined', 'undefined', 'I', 'undefined'],
];
*/

const arr = [
	['A', 'B', 'C'],
	['D', 'E', 'F', 'G', 'H', 'I'],
	['J', 'K'],
	['L', 'M', 'N', 'O'],
];

let arrMaxLength = Math.max.apply(
	// Get the max. row length inside array
	null,
	arr.map((x) => x.length)
);
let _arr = [...arr].reverse(); // Makes a copy of arr, because reverse function would mutate original array
let newarr = [];

for (let i = 0; i < arrMaxLength; i++) {
	let newRow = [];
	newRow = _arr.map((x) => {
		let _x = Array.from({ ...x, length: arrMaxLength });
		return _x[i]; // instead of undefined for empty fields you could return empty string: return _x[i] ? _x[i] : '';
	});
	newarr.push(newRow);
}

console.log(newarr);
