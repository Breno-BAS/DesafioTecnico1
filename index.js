const div3e5 = (numero) => {
    let calc = 0;

    for(let i = 1; i < numero; i++){
        if (i % 3 == 0  || i % 5 == 0) {
            calc += i;
        }
    }

    return calc;
}

console.log(div3e5(20))
console.log(div3e5(21))