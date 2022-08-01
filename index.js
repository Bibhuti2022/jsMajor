
const converter = document.querySelector('#converter');
const swaper = document.querySelector('#swaper');
const from = document.querySelector('#from');
const to = document.querySelector('#to');
const numberval = document.querySelector('#number123');
const result = document.querySelector('.result');
converter.addEventListener('click',convertBase);
swaper.addEventListener('click',swapeBase);
from.addEventListener('change',fixTypeOfInput);

function fixTypeOfInput()
{
    
    
    const val = from.value;
    numberval.value = '';
    
    if(val === "Decimal")
    {
        
        let key = [48, 49, 97, 96,98,99,100,101,102,103,50,51,52,53,54,55,56,57,8,104,105];
        numberval.type = "number";
        
        numberval.addEventListener("keyup",(e)=>{
            if(key.includes(e.which)) 
            {
                    
            }
            else{
                    alert('Please enter a valid input for decimal base. Allowed digits are (0 to 9)');
                
                    window.location.reload();
                }
        });
    }
    else if(val === 'Octal')
    {
        
        let keycode = [48, 49, 97, 96,98,99,100,101,102,103,50,51,52,53,54,55,8];
        numberval.type = "number";
        numberval.max = 7;
        numberval.min = 0;
        numberval.addEventListener("keyup",(e)=>{
            if( keycode.includes(e.which)) 
            {
        
                    
            }
            else{
                    alert('Please enter a valid input for octal. Allowed digits are (0 to 7)');
                    window.location.reload();
                }
        });
       
    }
    else if(val === 'Binary'){
        
        numberval.type = "number";
        numberval.max = 1;
        numberval.min = 0;
        let keys = [48, 49, 97, 96,8];
        numberval.addEventListener("keyup",(e)=>{
            if( keys.includes(e.which)) 
            {
            
                    
            }
            else{
                    alert('Please enter a valid input for binary. Allowed digits are (0 and 1)');
                    window.location.reload();
                }
        });
        
    }
   else if(val === 'Hexadecimal')
    {
        
        
        let keyc = [8,65,66,67,68,69,70,48, 49, 97, 96,98,99,100,101,102,103,50,51,52,53,54,55,56,57,65,66,67,68,69,70,104,105,20];
        
    
        numberval.addEventListener("keyup",(e)=>{
            if( keyc.includes(e.which)) 
            {
            
            }
            else{
                    alert('Please enter a valid input for hexadecimal. Allowed digits are (0 to 9 and a to f)');
                    window.location.reload();               }
        });

    }
}
function convertBase()
{
    const value = numberval.value;
    const fromBase = from.value;
    const toBase = to.value;

    if(!value)alert('Please enter the number to be converted')
    
    else if(fromBase =="From") alert('Please select From base');
    else if(toBase == "To")    alert('Please select To base');
    else{
        let number = 0;
        if(fromBase =="Hexadecimal")
            number = value.toString(value,16);
        else if(fromBase == "Decimal") 
            number = Number.parseInt(value);
        else if(fromBase == "Binary") 
            number = value.toString(value,2);
        else if(fromBase == "Octal") 
            number = value.toString(value,8);
        
        if(fromBase == "Decimal")
        {
            if(toBase == "Decimal") alert("From base and To base can not be same");
            else if(toBase == "Binary")
            {
                fromDecimalToBinary(number);
            }
            else if(toBase == "Hexadecimal")
            {
                fromDecimalToHex(number);

            }
            else if(toBase == "Octal")
            {
                fromDecimalToOct(number);
            }
        }

        else if(fromBase == "Binary")
        {

            

            
            if(toBase == "Binary") alert("From base and To base can not be same");
            else if(toBase == "Decimal")
            {
                fromBinaryToDecimal(number);
            }
            else if(toBase == "Hexadecimal")
            {
                fromBinaryToHex(number);

            }
            else if(toBase == "Octal")
            {
                fromBinaryToOct(number);
            }
        
        
        }

        else if(fromBase == "Octal")
        {
            if(toBase == "Octal") alert("From base and To base can not be same");
            else if(toBase == "Decimal")
            {
                fromOctalToDecimal(number);
            }
            else if(toBase == "Hexadecimal")
            {
                fromOctalToHex(number);

            }
            else if(toBase == "Binary")
            {
                fromOctalToBinary(number);
            }
        

        }

        else if(fromBase == "Hexadecimal")
        {
            if(toBase == "Hexadecimal") alert("From base and To base can not be same");
            else if(toBase == "Decimal")
            {
                fromHexaToDecimal(number);
            }
            else if(toBase == "Octal")
            {
                fromHexToOct(number);

            }
            else if(toBase == "Binary")
            {
                fromHexToBinary(number);
            }
        

        }
    
    
    }
}

function fromDecimalToBinary(a)
{
 result.innerHTML = a.toString(2);
}


function fromDecimalToHex(a)
{
 result.innerHTML = a.toString(16).toUpperCase();
}

function fromDecimalToOct(a)
{
 result.innerHTML = a.toString(8).toUpperCase();
}

function fromBinaryToDecimal(a)
{
    result.innerHTML = parseInt(a,2);
}

function fromBinaryToOct(a)
{
    result.innerHTML = parseInt(a,2).toString(8).toUpperCase();
}
function fromBinaryToHex(a)
{
    result.innerHTML = parseInt(a,2).toString(16).toUpperCase();
}

function fromOctalToDecimal(a)
{
    result.innerHTML = parseInt(a,8);
}
function fromOctalToBinary(a)
{
    result.innerHTML = parseInt(a,8).toString(2);
}
function fromOctalToHex(a)
{
    result.innerHTML = parseInt(a,8).toString(16).toUpperCase();
}

function fromHexaToDecimal(a)
{
    result.innerHTML = parseInt(a,16);
}
function fromHexToBinary(a)
{
    result.innerHTML = parseInt(a,16).toString(2);
}
function fromHexToOct(a)
{
    result.innerHTML = parseInt(a,16).toString(8).toUpperCase();
}

function swapeBase()
{
    const fromBase = from.value;
    const toBase = to.value;
    if(fromBase =="From") alert('Please select From base');
    else if(toBase == "To")alert('Please select To base');
    else{
        from.value = toBase;
        to.value = fromBase;
        numberval.value = null;
    
    }
    
}