function Length(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

  function elementRand(arr)
  {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
function generatedPassword(input)
{
    if (input >= 6) 
    {
        if (input <= 20)
        {
            let array = [];
            let number = "0123456789";
            let upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let lowerLetter = "abcdefghiklmnopqrstuvwxyz";
            let password = elementRand(number) + elementRand(upperLetter) + elementRand(lowerLetter);
          
            array = array.concat(number.split(""))
                        .concat(upperLetter.split(""))
                        .concat(lowerLetter.split(""))
          
            while (password.length < input)
            {
              password += array[Length(0, array.length - 1)];
            }
            return password;
        }
        else
        {
            return "Слишком большое значение длинны пароля!"
        }
    }
    else
    {
        return "Слишком маленькое значение длинны пароля!"
    }
}

function getVowels()
{
    var input = document.getElementById("getInputVowels").value;
    document.getElementById("getResult").innerHTML = generatedPassword(input).toString();
}

function reset()
{
    document.getElementById("getInputVowels").value = "";
    document.getElementById("getResult").innerHTML = "";
}