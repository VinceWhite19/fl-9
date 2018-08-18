const a = parseFloat(prompt('Type "a" length', '0'));
const b = parseFloat(prompt('Type "b" length', '0'));
const angle = parseFloat(prompt('Type angle', '0'));
const squareCof = 0.5;
const radToDegreeCof = 180;

const maxTotalAngle = 180;

const totalResult = (c, square, perimeter) => `
c length: ${Math.floor(c*100)/100} 
Triangle square: ${Math.floor(square*100)/100}
Triangle perimeter: ${Math.floor(perimeter*100)/100}
`;

let result;

if (validateData(a) || validateData(b) || validateData(angle) || angle > maxTotalAngle) {
    result = 'Invalid data';
} else {
    const c = getC(a, b, angle);
    let perimeter = a + b + c;
    let square = squareCof * a * b * Math.sin(angle / radToDegreeCof * Math.PI);
    result = totalResult(c, square, perimeter);
}

function validateData(number) {
    return isNaN(number) || typeof number !== 'number' || number <= 0;
}

function getC(a, b, angle) {
    let d = Math.PI / maxTotalAngle * angle;
    return Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(d));
}


console.log(result);