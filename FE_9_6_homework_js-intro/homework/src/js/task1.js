const money = parseFloat(prompt('Type amount of money', '0'));
const discount = parseFloat(prompt('Type discount (max value - 100%!)', '0'));

const resultLog = (money, discount, newPrice, saved) => `
Price without discount: ${Math.floor(money*100)/100}
Discount: ${Math.floor(discount*100)/100}%
Price with discount: ${Math.floor(newPrice*100)/100}
Saved: ${Math.floor(saved*100)/100}
`;

let result;

if (validateData(money) || validateData(discount) || discount > 100) {
    result = 'Invalid data';
} else {
    const saved = money / 100 * discount;
    const newPrice = money - saved;
    result = resultLog(money, discount, newPrice, saved);
}

function validateData(number) {
    return isNaN(number) || typeof number !== 'number' || number < 0;
}

console.log(result);