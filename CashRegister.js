// Cash Register

// Design a cash register drawer function checkCashRegister() that accepts purchase price as
// the first argument (price), payment as the second argument (cash),
// and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due,
// or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change
// if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills,
// sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

const STATUS_INSUFFICIENT = "INSUFFICIENT_FUNDS";
const STATUS_OPEN = "OPEN";
const STATUS_CLOSED = "CLOSED";

let emptyChangeArray = [
  ["PENNY", 0],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];

const CURRENCY_VALUES_MULTIPLIER = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000,
};

/**
 * Calculates the total amount of cash in the drawer.
 *
 * This function iterates through each denomination in the cash drawer (represented as sub-arrays in the `cid` array),
 * multiplies the quantity of each denomination by its value, and adds it to the total. The amounts are converted to pennies
 * and then back to dollars to avoid precision issues that can occur when performing arithmetic with floating-point numbers.
 *
 * @param {Array} cid - An array representing the cash in the drawer.
 *  Each element is a sub-array where the first element is the denomination name and the second element is the quantity of that denomination.
 * @returns {number} The total amount of cash in the drawer, in dollars.
 */
function getTotalCid(cid) {
  // note I'm converting to pennies and converting back to dollars to avoid pression issues
  let total_pennies = 0;
  for (const element of cid) {
    total_pennies = total_pennies + element[1] * 100;
  }

  return total_pennies / 100;
}

/**
 * Calculates the amount that can be returned as change in a specific denomination.
 *
 * This function determines how much of the bills or coins of a specific value can be returned as change,
 * up to a maximum of the total value in pennies (i.e., all the bills or coins of that denomination).
 * The amounts are converted to dollars from pennies to avoid precision issues that can occur when performing arithmetic with
 * floating-point numbers.
 *
 * @param {number} ValueOfType - The value of the specific denomination of bill or coin, in dollars.
 * @param {number} changeAmountInPennies - The total amount of change due, in pennies.
 * @param {number} value_in_pennies - The total value of the specific denomination of bill or coin in the cash drawer, in pennies.
 * @returns {number} The amount that can be returned as change in the specific denomination, in dollars.
 * The returned value is a float with two decimal places.
 */
function AmountReturnedDollars(
  ValueOfType,
  changeAmountInPennies,
  value_in_pennies
) {
  // how many bills of ValueOfType can go evenly into changeAmountInPennies?
  let numOfBills = Math.floor(changeAmountInPennies / ValueOfType);
  // how much ofthis type do we give as change?
  let AmountChange = ValueOfType * numOfBills;
  // if the possible amount of change is greater than the existing cid the give the cid
  if (AmountChange > value_in_pennies) {
    return (value_in_pennies / 100).toFixed(2);
  }
  return (AmountChange / 100).toFixed(2);
}

/**
 * Calculates the amount of a specific denomination to be used for change and the remaining amount.
 *
 * This function determines how much of a specific denomination (bills or coins) can be used as change, and what the remaining amount is.
 * It takes into account the total amount of change required and the total value of the specific denomination available in the cash drawer.
 *
 * @param {number} changeAmount - The total amount of change required, in dollars.
 * @param {Array} cidElement - A two-element array representing a denomination in the cash drawer.
 * The first element is a string indicating the type of bill or coin, and the second element is a number indicating the total value of that denomination available.
 *
 * Examples:
 *    ["TWENTY", 60] - Represents 3 $20 bills.
 *    ["DIME", 3.1] - Represents 31 dimes (10 cents each).
 *
 * @returns {Object} An object with two properties:
 *    "amount" - The total value of the specific denomination used for change, in dollars.
 *    "change" - An array representing the denomination and the total value of that denomination used for change.
 *
 * Examples:
 *    ["QUARTER", 0.5] - Represents 2 quarters used for change.
 *    ["PENNY", 0.04] - Represents 4 pennies used for change.
 */
function doCidadjustmentForAType(changeAmount, cidElement) {
  let type = cidElement[0];
  let valueInCID = cidElement[1];
  let value_in_pennies = valueInCID * 100;
  let ValueOfType = CURRENCY_VALUES_MULTIPLIER[type]; //in pennies
  let changeAmountInPennies = parseInt(Math.round(changeAmount * 100)); // the change Amount in Pennies
  let changeArray = [type, 0]; // the type , the value of type being given as change

  if (valueInCID === changeAmount) {
    // the value in the cash draw matches the amount of change I am looking for
    //  then  easy return of all the cash in draw for this type
    changeArray = [type, valueInCID];
    return { amount: valueInCID, change: changeArray };
  } else if (changeAmount === 0) {
    // if we are looking for 0 change then return 0 and no change given out
    return { amount: 0, change: [] };
  } else if (valueInCID == 0) {
    // if  Type has 0 in the cash draw then return amount unchanged and no change given out
    return { amount: changeAmount, change: [] };
  } else if (ValueOfType > changeAmountInPennies) {
    // if the value of one unit of the type is greater that the changeAmount
    //   then return the amount 0 and a null changeArray
    return { amount: 0, change: changeArray };
  } else if (ValueOfType <= changeAmountInPennies) {
    // some number of bills can be used to pay some ammount of the changeAmount
    // we can we use all of the bill to pay some of the amount
    // how many bills of ValueOfType can go evely into changeAmountInPennies?
    // let numOfBills = Math.floor(changeAmountInPennies / ValueOfType);
    // // how much ofthis type do we give as change?
    // let AmountChange = ValueOfType * numOfBills;
    // if the possible amount of change is greater than the existing cid the give the cid
    let AmountChange = AmountReturnedDollars(
      ValueOfType,
      changeAmountInPennies,
      value_in_pennies
    );
    changeArray = [type, AmountChange];

    return { amount: AmountChange, change: changeArray };
  }

  return { amount: 0, change: changeArray };
}

/**
 * Adjusts the cash in drawer by removing the specified change amount.
 *
 * This function iterates through each denomination in the cash drawer (represented as sub-arrays in the `cid` array) from highest to lowest,
 * and subtracts the change amount from the total cash in drawer. The change amount and the amounts in the cash drawer are converted to pennies
 * to avoid precision issues that can occur when performing arithmetic with floating-point numbers.
 *
 * @param {number} changeAmount - The amount of change to be removed from the cash drawer, in dollars.
 * @param {Array} cid - An array representing the cash in the drawer.
 *  Each element is a sub-array where the first element is the denomination name and the second element is the quantity of that denomination.
 * @returns {Object} An object representing the cash register status and the change to be given.
 *  The object has a `status` key which can be 'INSUFFICIENT_FUNDS', 'CLOSED', or 'OPEN',
 *  and a `change` key which is an array of the change due in each denomination.
 */
function doCidadjustment(changeAmount, cid) {
  let cid_length = cid.length;

  let change = {
    status: STATUS_OPEN,
    change: [],
  };

  // for each element in cid highest to lowest
  for (let x = cid_length - 1; x >= 0; x--) {
    let adjustment = doCidadjustmentForAType(changeAmount, cid[x]);

    if (IsNoneZeroAdjustment(adjustment)) {
      let adjustedElement = adjustment.change;
      adjustedElement[1] = Number.parseFloat(adjustment.amount);

      change.change.push(adjustedElement);
      changeAmount = (changeAmount - adjustment.amount).toFixed(2);
    }
  }

  changeAmount = Number.parseFloat(changeAmount);

  change.change = removeNullElemenetsFromChange(change);

  // if changeAmount is not zero then we dont have suffishent funds
  return changeAmount !== 0
    ? { status: STATUS_INSUFFICIENT, change: [] }
    : change;
}

function IsNoneZeroAdjustment(adjustment) {
  return adjustment.change.length !== 0 && adjustment.amount !== 0
    ? true
    : false;
}

function removeNullElemenetsFromChange(change) {
  let cleanArr = change.change.filter((elements) => {
    let type = elements[0];
    let value = elements[1];
    if (type != undefined || value != undefined || value != 0) {
      return elements;
    }
  });
  return cleanArr;
}

/**
 * Checks the cash register and returns an object with the status and change due.
 *
 * This function calculates the change due by subtracting the price from the cash given.
 * It then checks if the total cash in drawer (cid) is less than the change due.
 *
 * If the total cid is less than the change due, it updates the status to 'INSUFFICIENT_FUNDS' and the change to an empty array.
 * If the total cid is equal to the change due, it updates the status to 'CLOSED' and the change to the cid.
 * If the total cid is more than the change due, it updates the status to 'OPEN' and the change to the change due in each denomination.
 *
 * @param {number} price - The price of the item, in dollars.
 * @param {number} cash - The cash given by the customer, in dollars.
 * @param {Array} cid - An array representing the cash in the drawer.
 * Each element is a sub-array where the first element is the denomination name and the second element is the quantity of that denomination.
 * @returns {Object} An object representing the cash register status and the change to be given.
 * The object has a `status` key which can be 'INSUFFICIENT_FUNDS', 'CLOSED', or 'OPEN', and a `change` key which is an array of the change due in each denomination.
 */
export default function checkCashRegister(price, cash, cid) {
  let change = {
    status: STATUS_INSUFFICIENT,
    change: [],
  };

  let changeAmount = cash - price;

  // get total cid amount
  let totalCid = getTotalCid(cid);

  if (totalCid < changeAmount) {
    change.status = STATUS_INSUFFICIENT;
    change.change = [];
  } else if (changeAmount == totalCid) {
    change.status = STATUS_CLOSED;
    change.change = cid;
  } else {
    change = doCidadjustment(changeAmount, cid);
  }
  return change;
}

export { doCidadjustmentForAType, getTotalCid };
