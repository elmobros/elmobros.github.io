//  get elements from html
const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");








// check and validate user input
const checkUserInput = (str) => {

    
    // regex for each part of number 
    const countryCode = '^(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const spaceDashes= '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
     const regexPhone = new RegExp(
    `${countryCode}${areaCode}${spaceDashes}${phoneNumber}`
  );
    console.log(regexPhone);
    regexPhone.test(str) ? results.innerText= `Valid US Number: ${str}` : results.innerText= `Invalid US number: ${str}`;


}


// event listeners for buttons
checkBtn.addEventListener("click",()=>
{
  if (input.value === ''){
    
    alert("Please provide a phone number");
    return;
  }

  checkUserInput(input.value);

 

})

clearBtn.addEventListener("click",()=>
{
  results.innerText= '';
  input.value = '';
})
