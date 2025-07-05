// elements to get from html
const convertBtn = document.getElementById("convert-btn");
const inputInt = document.getElementById("number");
const output = document.getElementById("output");








// validate user input
const checkUserInput = () => {

  output.innerHTML= ``;
  const inputNumber = Number(inputInt.value);

  if (!inputNumber || isNaN(inputNumber) ||  !Number.isInteger(inputNumber))
  {
    output.innerHTML = `Please enter a valid number`;
    return;
  } 
  else if (inputNumber < 0 ){
    output.innerHTML = `Please enter a number greater than or equal to 1`;
    return;
  }
  else if (inputNumber > 4000 ||inputNumber === 4000){
    output.innerHTML = `Please enter a number less than or equal to 3999`;
    return;
  }
  else {
    
    console.log(convertNumber());
    const text = convertNumber();
    output.innerHTML = `${text}`;
    return;
  }
};


// convert the number function
const convertNumber = () => {
  const inputNumber = Number(inputInt.value);
  const str = inputInt.value;
  const strArr = str.split("");
  var result ='';

  const length = strArr.length;
  
  console.log(length);
  console.log(str);
  console.log(strArr);
  console.log(strArr[length-1]);
  console.log(strArr[length-2]);
  console.log(strArr[length-3]);
  console.log(strArr[length-4]);
  if (strArr[length-1] )
  {
    var first = '';
    console.log('first');
    const num = parseInt(strArr[length-1]);
    if (num === 9)
    {
      first = 'IX';
    }
    else if (num > 5 && num < 9)
    {
      first = 'V'+ 'I'.repeat(num-5);
    }
    else if (num === 5 )
    {
      first = 'V';
    }
    else if (num === 4) 
    {
      first = 'IV';
    }
    else if (num > 1 && num < 4) 
    {
      first = 'I'+'I'.repeat(num-1);
    }
    else if (num === 1) 
    {
      first = 'I';
    }

    result = first;
  }
  
  if (strArr[length-2] )
  { 
    var second ='';
    console.log('second');
    const num = parseInt(strArr[length-2]);
    if (num === 9)
    {
      second = 'XC';
    }
    else if (num > 5 && num < 9)
    {
      second = 'L'+ 'X'.repeat(num-5);
    }
    else if (num === 5)
    {
      second = 'L'
    }
    else if (num === 4)
    {
      second = 'XL';
    }
    else if (num > 1 && num < 4)
    {
      second = 'X' + 'X'.repeat(num-1);
    }
    else if (num === 1)
    {
      second = 'X';
    }

    result = second + result;

  }
  
  if (strArr[length-3] )
  {
    var third = '';
    console.log('third');
    const num = parseInt(strArr[length-3]);
    if (num === 9)
    {
      third = 'CM';
    }
    else if (num > 5 && num < 9)
    {
      third = 'D'+ 'C'.repeat(num-5);
    }
    else if (num === 5)
    {
      third = 'D';
    }
    if (num === 4)
    {
      third = 'CD';
    }
    if (num > 1 && num < 4)
    {
      third = 'C'+'C'.repeat(num-1);
    }
    if (num === 1)
    {
      third = 'C';
    }

    result = third + result;
  }
  if (strArr[length-4] )
  {
    var fourth = '';
    console.log('fourth');
    const num = parseInt(strArr[length-4]);
    fourth = 'M' +'M'.repeat(num-1);

    result = fourth + result;
  }
  
 
  return result;

}


// event listeners
convertBtn.addEventListener("click", checkUserInput);

inputInt.addEventListener("keydown",
(e)=>{
  if (e.key === "Enter"){
  checkUserInput();
  }
});