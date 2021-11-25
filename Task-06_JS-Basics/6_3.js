function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log("6.3 Подсчёт гласных");
console.log("Подсчёт гласных в строке here we go again:", countVowels('here we go again'));
console.log("Подсчёт гласных в строке HERE WE GO AGAIN:", countVowels('HERE WE GO AGAIN'));
console.log("Подсчёт гласных в строке biba and boba:", countVowels('biba and boba'));
console.log("Подсчёт гласных в строке my life my rules:", countVowels('my life my rules'));