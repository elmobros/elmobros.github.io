// global variables
let price = 19.5;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];


// variables from html elements
const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const totalSpan = document.getElementById("change-due");
const pennies = document.getElementById("pennies");
const nickels = document.getElementById("nickels");
const dimes = document.getElementById("dimes");
const quarters = document.getElementById("quarters");
const ones = document.getElementById("ones");
const fives = document.getElementById("fives");
const tens = document.getElementById("tens");
const twenties = document.getElementById("twenties");
const hundreds = document.getElementById("hundreds");
const drawer = document.getElementById("drawer-container");


///////////////////////////////////////////////
const formatResults = (status, change) => {
  totalSpan.innerHTML = `<p>Status: ${status}</p>`;
  totalSpan.innerHTML += change
    .map(
      ([denominationName, amount]) => `<p>${denominationName}: $${amount}</p>`
    )
    .join('');
};


/////////////////////////////////////////////
// check cash register function
const checkCashRegister = () => {

  const cashInCents = Math.round(parseFloat(cash.value)*100);
  const priceInCents = Math.round(price*100);
  console.log(cashInCents);
  console.log(priceInCents);
if(priceInCents > cashInCents)
{
  alert("Customer does not have enough money to purchase the item.");
  cash.value = '';
  return;
}

if(priceInCents === cashInCents)
{
  totalSpan.innerHTML =
      '<p>No change due - customer paid with exact cash</p>';
    cash.value = '';
    return;
}

let changeDue = cashInCents - priceInCents;

const reversedCid = [...cid]
.reverse()
    .map(([denominationName, amount]) => [
      denominationName,
      Math.round(amount * 100)
    ]);
const denominations = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  const result = { status: 'OPEN', change: [] };
  const totalCID = reversedCid.reduce((prev, [_, amount]) => prev + amount, 0);

  if (totalCID < changeDue) {
    totalSpan.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return;
  }
  if (totalCID === changeDue) {
    result.status = 'CLOSED';
  }

  for (let i = 0; i <= reversedCid.length; i++) {
    if (changeDue >= denominations[i] && changeDue > 0) {
      const [denominationName, total] = reversedCid[i];
      const possibleChange = Math.min(total, changeDue);
      const count = Math.floor(possibleChange / denominations[i]);
      const amountInChange = count * denominations[i];
      changeDue -= amountInChange;

      if (count > 0) {
        result.change.push([denominationName, amountInChange / 100]);
      }
    }
  }
  if (changeDue > 0) {
    totalSpan.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return;
  }

  formatResults(result.status, result.change);
  updateUI(result.change);
};

const updateUI = change => {
  const currencyNameMap = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    'ONE HUNDRED': 'Hundreds'
  };
  // Update cid if change is passed in
  if (change) {
    change.forEach(([changeDenomination, changeAmount]) => {
      const targetArr = cid.find(
        ([denominationName]) => denominationName === changeDenomination
      );
      targetArr[1] =
        (Math.round(targetArr[1] * 100) - Math.round(changeAmount * 100)) / 100;
    });
  }
 
  cash.value = '';
  priceScreen.textContent = `Total: $${price}`;
  drawer.innerHTML = `<p><strong>Change in drawer:</strong></p>
    ${cid
      .map(
        ([denominationName, amount]) =>
          `<p>${currencyNameMap[denominationName]}: $${amount}</p>`
      )
      .join('')}
  `;
};




// is user input valid
const isValidInput = () =>
{
  const regex = /([0-9]*)(.?)([0-9])([0-9]?)/g;
  const text = cash.value;
  const amount = parseFloat(text);
  
  if (regex.test(text) && amount > 0)
  {
    checkCashRegister();
  }
  else 
  {
    alert("enter a valid amount");
    return;
  }
}







// purchase button event listener
purchaseBtn.addEventListener("click", 
() => {

  isValidInput();
  


}

)

