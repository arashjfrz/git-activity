function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false; 
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimes(start, end) {
    let primes = [];
    
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

let start = parseInt(prompt("Enter the starting number:"));
let end = parseInt(prompt("Enter the ending number:"));

let primes = findPrimes(start, end);
console.log(`Prime numbers between ${start} and ${end}:`, primes);