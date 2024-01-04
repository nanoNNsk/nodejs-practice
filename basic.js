console.log("Hello World");
let a = 1;
console.log(a);
console.log(typeof (a));
let b = "nano";
console.log(b);
console.log(typeof (b));
if (a == b) {
    console.log("Yes");
} else {
    console.log("No");
}
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
function print(data) {
    console.log(data);
}
print("nano");
print(a);
let fruits = ["banana", "orange", "watermelon"];
const getfruits = () => {
    setTimeout(() => {
        fruits.forEach(data => {
            console.log(data);
        });
    }, 1000);
};
const postfruits = (fruit, callback) => {
    setTimeout(() => {
        fruits.push(fruit);
        callback();
    }, 2000);
};
const nowfruits = fruit => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fruits.push(fruit);
            let err = false;
            if (!err) {
                resolve();
            } else {
                reject("Something went wrong");
            }
        }, 2000);
    });
};
nowfruits("kivi")
    .then(getfruits)
    .catch(err => {
    console.log(err);
    });
const init = async() =>{
    try{
        await nowfruits("apple");
        getfruits();
    }catch(err){
        console.log(err);
    }
};
init();