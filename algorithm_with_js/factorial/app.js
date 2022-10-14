function fact(number) {

    let total = 1;
    for(i = 1 ; i <= number; i++) {
        total = total * i
        
    }

    return total;
}

console.log(fact(5))