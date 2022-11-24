//* level01

// const empt = [];
// const moreThan5 = [1, 2, 3, 4, 5, 6];
// console.log(moreThan5);
// console.log(moreThan5[0], moreThan5[moreThan5.length / 2], moreThan5[moreThan5.length - 1]);
// const moreThan5_2 = ["dasada", 231, 23.5, 'd', "dasdaa", 1232];
// console.log(moreThan5_2);

//* level02

// let text =
//     'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// let words = text.replaceAll(/[,\.!\?]/ig, '').split(' ');
// console.log(words);
// console.log(words.length);

// let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// if (!shoppingCart.includes('Meat'))
//     shoppingCart.unshift('Meat');

// if (!shoppingCart.includes('Sugar'))
//     shoppingCart.push('Sugar');

// shoppingCart = shoppingCart.filter(a => a !== 'Honey');

// const index = shoppingCart.indexOf('Tea');
// if (index !== -1)
//     shoppingCart[index] = 'Green Tea';
// console.log(shoppingCart);

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']

// const fullStack = [...frontEnd, ...backEnd];
// console.log(fullStack)

//! objects
//* level02

// const users = {
//     Alex: {
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: false,
//         points: 30
//     },
//     Asab: {
//         email: 'asab@asab.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 25,
//         isLoggedIn: false,
//         points: 50
//     },
//     Brook: {
//         email: 'daniel@daniel.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//         age: 30,
//         isLoggedIn: true,
//         points: 50
//     },
//     Daniel: {
//         email: 'daniel@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     John: {
//         email: 'john@john.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//         age: 20,
//         isLoggedIn: true,
//         points: 50
//     },
//     Thomas: {
//         email: 'thomas@thomas.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     Paul: {
//         email: 'paul@paul.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     }
// }

// console.log(Object.values(users).filter(u => u.isLoggedIn === true).length);

//* level03

// const users = [{
//     _id: 'ab12ex',
//     username: 'Alex',
//     email: 'alex@alex.com',
//     password: '123123',
//     createdAt: '08/01/2020 9:00 AM',
//     isLoggedIn: false,
// },
// {
//     _id: 'fg12cy',
//     username: 'Asab',
//     email: 'asab@asab.com',
//     password: '123456',
//     createdAt: '08/01/2020 9:30 AM',
//     isLoggedIn: true,
// },
// {
//     _id: 'zwf8md',
//     username: 'Brook',
//     email: 'brook@brook.com',
//     password: '123111',
//     createdAt: '08/01/2020 9:45 AM',
//     isLoggedIn: true,
// },
// {
//     _id: 'eefamr',
//     username: 'Martha',
//     email: 'martha@martha.com',
//     password: '123222',
//     createdAt: '08/01/2020 9:50 AM',
//     isLoggedIn: false,
// },
// {
//     _id: 'ghderc',
//     username: 'Thomas',
//     email: 'thomas@thomas.com',
//     password: '123333',
//     createdAt: '08/01/2020 10:00 AM',
//     isLoggedIn: false,
// },
// ]

// const products = [{
//     _id: 'eedfcf',
//     name: 'mobile phone',
//     description: 'Huawei Honor',
//     price: 200,
//     ratings: [{
//         userId: 'fg12cy',
//         rate: 5
//     },
//     {
//         userId: 'zwf8md',
//         rate: 4.5
//     },
//     ],
//     likes: [],
// },
// {
//     _id: 'aegfal',
//     name: 'Laptop',
//     description: 'MacPro: System Darwin',
//     price: 2500,
//     ratings: [],
//     likes: ['fg12cy'],
// },
// {
//     _id: 'hedfcg',
//     name: 'TV',
//     description: 'Smart TV:Procaster',
//     price: 400,
//     ratings: [{
//         userId: 'fg12cy',
//         rate: 5
//     }],
//     likes: ['fg12cy'],
// },
// ]

// function hashCode(s) {
//     for (var i = 0, h = 0; i < s.length; i++)
//         h = Math.imul(31, h) + s.charCodeAt(i) | 0;
//     return h;
// }

// function signUp() {
//     let email = prompt('Enter your email');
//     if (!users.some((user) => {
//         user.email.match(email);
//     })) {

//         let username = prompt('Enter your username');
//         let password = prompt('Enter your new password');

//         users.push(hashCode(email), username, email, password, Date.now, false);
//         console.log('Created new account');
//     } else {
//         console.log("Account has already been created");
//     }
// }

// const id = null;

// function signIn() {
//     console.log("signIn");
//     const email = prompt('Enter your email');
//     const user = users.find((user) => {
//         user['email'].match(email);
//     });

//     if (user === null) {
//         console.log("User doesn't exist");
//     } else if (!user.password.match(prompt('Enter your password'))) {
//         console.log("Password doesn't match");
//     } else {
//         console.log(`Welcome ${user.username}`);
//         user.isLoggedIn = true;
//         id = user._id;
//     }
// }

// function rateProduct(id) {
//     if (id === null) {
//         console.log('You are not signed in');
//         return;
//     }

//     products.forEach((prod) => {
//         console.log(`Do you want to rate ${prod.name}`);
//         if (prompt('Y/N', 'N').toUpperCase() === 'Y') {
//             let rating = prompt('Enter your rating (1-5)');
//             rating = rating >= '1' || rating <= '5' ? parseInt(rating) : 1;
//             prod.ratings.push({ id, rating });
//         }
//     });
// }

// function avgRating(prodId) {
//     const product = products.find(prod => {
//         prod._id.match(prodId);
//     });
//     const avg = product.ratings.values.reduce((sum, u, rate) => sum + rate, 0)
//         / product.ratings.length;
//     Console.log(avg);
// }

// function likeProduct(id) {
//     if (id === null) {
//         console.log('You are not signed in');
//         return;
//     }

//     products.forEach((prod) => {
//         console.log(`Do you want to like ${prod.name}`);
//         if (prompt('Y/N', 'N').toUpperCase() === 'Y') {
//             const index = prod.likes.indexOf(id);
//             if (index != -1) {
//                 prod.likes.splice(index, 1);
//             } else {
//                 prod.likes.push(id);
//             }
//         }
//     });
// }

// signUp();
// signIn();
// rateProduct();
// avgRating('eedfcf');
// likeProduct();


//! function

//* level02

// function solveQuadratic(a, b, c) {
//     const d = Math.sqrt(b * b - 4 * a * c);
//     const res2 = (-b - d) / (2 * a);
//     const res1 = (-b + d) / (2 * a);

//     const result = {};
//     if (!isNaN(res1)) {
//         result.res1 = res1;
//         if (res2 !== res1) {
//             result.res2 = res2;
//         }
//     }

//     return result;
// }

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}'

//* level03

// function getSymbols(symbols) {
//     for (let letter = 'A'.charCodeAt(0); letter <= 'Z'.charCodeAt(0); letter++) {
//         symbols.push(String.fromCharCode(letter));
//     }

//     for (let letter = 'a'.charCodeAt(0); letter <= 'z'.charCodeAt(0); letter++) {
//         symbols.push(String.fromCharCode(letter));
//     }

//     for (let diggit = '0'.charCodeAt(0); diggit <= '9'.charCodeAt(0); diggit++) {
//         symbols.push(String.fromCharCode(diggit));
//     }
// }

// function userIdGeneratedByUser(charCount = 0, idCount = 0) {
//     const symbols = [];
//     getSymbols(symbols);
//     let result = '';
//     for (let idIndex = 0; idIndex < idCount; idIndex++) {
//         for (let symIndex = 0; symIndex < charCount; symIndex++) {
//             result += symbols[Math.floor(Math.random() * symbols.length)];
//         }
//         result += '\n';
//     }
//     return result;
// }

// console.log(userIdGeneratedByUser(16, 5));

//! Classes

//* level 03

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

class Stats {
    constructor(agesArr) {
        this.ages = Array.from(agesArr);
    }
    count() {
        return this.ages.length;
    }
    sum() {
        return this.ages.reduce((sum, age) => sum + age, 0);
    }
    min() {
        return Math.min.apply(null, this.ages);
    }
    max() {
        return Math.max.apply(null, this.ages);
    }
    range() {
        return this.max() - this.min();
    }
    mean() {
        return Math.ceil(this.sum() / this.count());
    }
    median() {
        const sorted = Array.from(this.ages).sort();
        const middle = Math.floor(this.count() / 2);
        if (this.count() % 2 == 0) {
            return (sorted[middle] + sorted[middle - 1]) / 2;
        }
        return sorted[middle];
    }

    mode() {
        const groupped = {};
        const max = { 'key': 0, 'val': Number.MIN_VALUE };
        for (const key of ages) {
            groupped[key] ??= 0;

            if (max.val < ++groupped[key]) {
                max.key = key;
                max.val = groupped[key];
            }
        }
        return { 'mode': max.key, 'count': max.val };
    }
    var() {
        const mean = this.mean();
        let sum = 0;
        for (const age of this.ages) {
            sum = sum + (age - mean) ** 2;
        }

        return sum / this.ages.length;
    }
    std() {
        return Math.round(Math.sqrt(this.var()) * 10) / 10;
    }
    freqDist() {
        const groupped = {};
        for (const key of ages) {
            groupped[key] ??= 0;
            groupped[key]++;
        }
        const sorted = Object.entries(groupped).sort((o1, o2) => {
            if (o1[1] > o2[1]) {
                return -1;
            }
            if (o1[1] < o2[1]) {
                return 1;
            }
            return 0;
        });
        let result = [];

        for (const age of sorted) {
            result.push([age[0] / this.ages.length * 100.0, age[0]]);
        }
        return result;
    }
}


const statistics = new Stats(ages);

console.log('Count:', statistics.count()); // 25
console.log('Sum: ', statistics.sum()); // 744
console.log('Min: ', statistics.min()); // 24
console.log('Max: ', statistics.max()); // 38
console.log('Range: ', statistics.range()); // 14
console.log('Mean: ', statistics.mean()); // 30
console.log('Median: ', statistics.median()); // 29
console.log('Mode: ', statistics.mode()); // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()); // 17.5
console.log('Standard Deviation: ', statistics.std()); // 4.2
console.log('Frequency Distribution: ', statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]