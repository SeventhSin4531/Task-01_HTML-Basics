console.log("8.2. Игра на выбывание");
console.log("");
function game(num, number)
{
    let listPlayer = new Array(num).fill().map((e, i) => i + 1)

    for (let i = 1; listPlayer.length > 1; i++)
    {
        let actual = listPlayer.shift();
        !(i % number == 0) 
        ? listPlayer.push(actual)
        : i = 0;
    }
    return listPlayer.shift();
}

console.log("Игра 1:");
console.log("Входные данные: (7, 3)");
console.log("Победитель:", game(7,3));
console.log("Игра 2:");
console.log("Входные данные: (11,19)");
console.log("Победитель:", game(11,19));
console.log("Игра 3:");
console.log("Входные данные: (1,300)");
console.log("Победитель:", game(1,300));
console.log("Игра 4:");
console.log("Входные данные: (14,2)");
console.log("Победитель:", game(14,2));
console.log("Игра 5:");
console.log("Входные данные: (100,1)");
console.log("Победитель:", game(100,1));