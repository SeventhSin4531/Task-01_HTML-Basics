let formatString = (str) => str.split('')
    .reduce((previous, current, i) => previous + current.toUpperCase() + current.toLowerCase().repeat(i) + '-', '')
    .slice(0, -1);

console.log("6.4. Форматирование строки");
console.log("Дано: abcd", "Результат:", formatString('abcd'));
console.log("Дано: RqaEzty", "Результат:", formatString('RqaEzty'));
console.log("Дано: cwAt", "Результат:", formatString('cwAt'));