let Sorting = (arr) => arr.flat(1)
    .sort((a, b) => a - b);
console.log("6.1 Плоский массив");

console.log("Дано: [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]");
console.log("Вывод:", Sorting([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));

console.log("Дано:[]");
console.log("Вывод:", Sorting([]));

console.log("Дано: [[], []]");
console.log("Вывод:", Sorting([[], []]));

console.log("Дано: [[], [1]]");
console.log("Вывод:", Sorting([[], [1]]));

console.log("Дано:[[1, 3, 5], [-100], [2, 4, 6]]");
console.log("Вывод:", Sorting([[1, 3, 5], [-100], [2, 4, 6]]));