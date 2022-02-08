/*
Rotates an 2-dimensional array (matrix) by 90 degree

Given is an array like:

const arr = [
	['A', 'B', 'C', 'D'],
	['E', 'F', 'G', 'H'],
	['I', 'J', 'K', 'L'],
	['M', 'N', 'O', 'P'],
];

Expected output after rotation by 90 degree:

const arr = [
	['M', 'I', 'E', 'A'],
	['N', 'J', 'F', 'I'],
	['O', 'K', 'F', 'E'],
	['P', 'E', 'I', 'A'],
];
*/

const arr = [
	['A', 'B', 'C', 'D'],
	['E', 'F', 'G', 'H'],
	['I', 'J', 'K', 'L'],
	['M', 'N', 'O', 'P'],
];

let _arr = [...arr].reverse(); // Makes a copy of arr, because reverse function would mutate original array
let newarr = [];

for (let i = 0; i < arr[0].length; i++) {
	let newRow = [];
	newRow = _arr.map((x) => {
		return x[i];
	});
	newarr.push(newRow);
}

console.log(newarr);
