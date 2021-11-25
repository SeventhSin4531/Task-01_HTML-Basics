let Binning = (str) => str.split('')
    .map(s => s.charCodeAt().toString(2))
    .map(s => '0'.repeat(8 - s.length) + s);

console.log("6.2 Бинарное слово");

console.log("Слово: man");
console.log("Вывод:", Binning('man'));

console.log("Слово: AB");
console.log("Вывод:", Binning('AB'));

console.log("Слово: wecking");
console.log("Вывод:", Binning('wecking'));

console.log("Слово: Ruby");
console.log("Вывод:", Binning('Ruby'));

console.log("Слово: Yosemite");
console.log("Вывод:", Binning('Yosemite'));