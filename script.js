let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let screenValue = "";

for (item of buttons) 
{
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') 
        {
            screen.value += 'x ';
            buttonText = '*';
            screenValue += buttonText;
        }
        else if (buttonText == 'C') 
        {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') 
        {
            screen.value = eval(screenValue)+" ";
        }
        else 
        {
            screenValue += buttonText;
            screen.value += buttonText+" ";
        }

    })
}
