// Challenger 15 - tirando dados

// let a = [1,2,3,4,5,6];
// let b = [1,2,3,4,5,6];

function dado1(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let opcion1 = dado1 (1, 7)
console.log(`El dado 1 cayo en ${opcion1}.`);

function dado2(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let opcion2 = dado2(1, 7)
console.log(`El dado 2 cayo en ${opcion2}.`);

let result = opcion1 + opcion2;
console.log(`El resultado de la suma de los dos es ${result}.`);


