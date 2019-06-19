let matrix = [
    [1, 2],
    [3, 4]
];

function printMatrix(array) {
    let str = "";
    array.forEach(element => {
        element.forEach(value => {
            str += value + " "
        });
        str += "\n";
    });

    console.log(str);
}

function generateMatrix(height, width) {
    let matrix = [];
    for (let i = 0; i < height; i++) {
        let rowArray = [];
        for (let j = 0; j < width; j++) {
            rowArray.push(j);
        }

        matrix.push(rowArray);
    }
    return matrix;
}


function transpose(matrix) {
    // Initization for the new matrix according to the old matrix height and width
    let newMatrix = [];

    // Find the maxium length from each row. 
    // let height = matrix.length;
    // let width=0;
    // for (let i=0;i<height;i++) {
    //     if (matrix[i].length > width) {
    //         width = matrix[i].length;
    //     }
    // }

    let width = Math.max(...matrix.map(elm => elm.length));

    for (let i = 0; i < width; i++) {
        newMatrix.push([]);
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            newMatrix[j][i] = matrix[i][j];
        }

    }
    return newMatrix;
}


let expect = require("chai").expect;
describe("Typical cases", () => {
    it("should tranpose a symmetric matrix", () => {
        // Arrange
        let matrix = [
            [1, 2],
            [3, 4]
        ];

        let tMatrix = [
            [1, 3],
            [2, 4]
        ]

        // Act
        let result = transpose(matrix);

        // Assert
        expect(result).to.deep.equal(tMatrix);

    });

    it("should transpose an a-symmetric matrix", () => {
        // Arrange
        let matrix = [
            [1, 2],
            [3, 4, 5]
        ];

        let tMatrix = [
            [1, 3],
            [2, 4],
            [, 5]
        ]

        // Act
        let result = transpose(matrix);

        // Assert
        expect(result).to.deep.equal(tMatrix);
    });
});