// app.js
console.log("Hello, GitHub Actions!");

function add(a, b) {
    return a + b;
}

const result = add(5, 7);
console.log(`5 + 7 = ${result}`);

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Дані отримано!");
        }, 1000);
    });
}

fetchData().then(message => console.log(message));