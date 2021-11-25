function containsOnlyUniqueSymbols(text) {
	let letters = text.toLowerCase().split('')
    return letters.every((letter, index) => index == letters.indexOf(letter));
}

console.log("6.4 Изограммы");
console.log("Дано: Dermatoglyphics", "Результат:", containsOnlyUniqueSymbols("Dermatoglyphics"))
console.log("Дано: abcdefg", "Результат:", containsOnlyUniqueSymbols("abcdefg"))
console.log("Дано: abcdefga", "Результат:", containsOnlyUniqueSymbols("abcdefga"))
console.log("Дано: _", "Результат:", containsOnlyUniqueSymbols(""))