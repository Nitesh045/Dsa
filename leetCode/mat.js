let mat1 =[
    [0,0,0],
    [0,1,0],
    [0,0,0]
]
let mat2=[
    [0,0,0],
    [0,1,0],
    [1,1,1]
]
var updateMatrix = function(mat1) {
    const m = mat1.length,
		n = mat1[0].length;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (mat1[i][j] === 0) continue;
			mat1[i][j] = Infinity;
			if (i - 1 >= 0) mat1[i][j] = Math.min(mat1[i][j], 1 + mat1[i - 1][j]);
			if (j - 1 >= 0) mat1[i][j] = Math.min(mat1[i][j], 1 + mat1[i][j - 1]);
		}
	}

	for (let i = m - 1; i >= 0; i--) {
		for (let j = n - 1; j >= 0; j--) {
			if (mat1[i][j] === 0) continue;
			if (i + 1 < m) mat1[i][j] = Math.min(mat1[i][j], 1 + mat1[i + 1][j]);
			if (j + 1 < n) mat1[i][j] = Math.min(mat1[i][j], 1 + mat1[i][j + 1]);
		}
	}

	return mat1;
};
console.log(updateMatrix(mat1))