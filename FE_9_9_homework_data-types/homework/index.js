/* function, which returns type of passed parameter */

const findType = value => {
    return typeof value;
}

/*function, which iterates over array and executes function on each element.*/

const forEach = (arr, el) => {
    for (let i = 0; i < arr.length; i++) {
        el(arr[i]);
    }
}

/* function, which returns transformed array based on function, which passed as a parameter */

const map = (arr, el) => {
    let result = [];
    forEach(arr, num => result.push(el(num)));
    return result;
}

/* function, which returns filtered array based on function, which passed as a parameter */

const filter = (arr, el) => {
    let arrSorted = [];
    forEach(arr, num => {
        if (el(num) === true) {
            arrSorted.push(num);
        }
    });
    return arrSorted;
}

/* function, which returns array of names of people, who are over 18 and their favorite fruit is apple */

const getAdultAppleLovers = data => {
    return map(filter(data, objInfo => objInfo.age > 18 && objInfo.favoriteFruit === 'apple'), objInfo => objInfo.name)
}

/* function, which returns array of keys of an object */

const keys = obj => {
    let arrKeys = [],
        i = 0;

    for (arrKeys[i++] in obj) {
        /* new object */
    }

    return arrKeys;
}

/* function, which returns array of values of an object */

const values = obj => {
    let arrValues = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrValues.push(obj[key]);
        }
    }

    return arrValues;
}

/* function, which returns formatted date. */

const showFormattedDate = date => {

    let mthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day = date.getDate();
    let dayLimit = 9;
    let month = mthArray[date.getMonth()];
    let year = date.getFullYear();

    return 'It is ' + (day <= dayLimit ? '0' + day : day) + ' of ' + month + ', ' + year;

}